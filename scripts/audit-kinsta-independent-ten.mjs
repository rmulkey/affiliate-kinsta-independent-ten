import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const rootOutDir = "kinsta-independent-dist";
const expectedAffiliateTag = "kinsta-sites-20";

function fail(message) {
  console.error(`FAIL | ${message}`);
  process.exitCode = 1;
}

function pass(message) {
  console.log(`PASS | ${message}`);
}

function readJson(file) {
  return JSON.parse(readFileSync(file, "utf8"));
}

const manifestPath = path.join(rootOutDir, "manifest.json");
if (!existsSync(manifestPath)) {
  fail("missing manifest.json");
  process.exit();
}

const manifest = readJson(manifestPath);
const globalChecks = {
  tenSites: manifest.siteCount === 10 && manifest.sites?.length === 10,
  affiliateTag: manifest.affiliateTag === expectedAffiliateTag,
  kinstaHosts: manifest.sites.every((site) => site.baseUrl.endsWith(".kinsta.page")),
  distinctProjects: new Set(manifest.sites.map((site) => site.projectName)).size === 10
};

if (Object.values(globalChecks).every(Boolean)) pass(`global | ${JSON.stringify(globalChecks)}`);
else fail(`global | ${JSON.stringify(globalChecks)}`);

for (const site of manifest.sites) {
  const siteDir = path.join(rootOutDir, site.slug);
  const siteJsonPath = path.join(siteDir, "site.json");
  const indexPath = path.join(siteDir, "index.html");
  const productPath = path.join(siteDir, "products", "index.html");
  const sitemapPath = path.join(siteDir, "sitemap.xml");
  const robotsPath = path.join(siteDir, "robots.txt");

  if (![siteJsonPath, indexPath, productPath, sitemapPath, robotsPath].every(existsSync)) {
    fail(`${site.slug} | missing required output file`);
    continue;
  }

  const data = readJson(siteJsonPath);
  const indexHtml = readFileSync(indexPath, "utf8");
  const productsHtml = readFileSync(productPath, "utf8");
  const allHtml = `${indexHtml}\n${productsHtml}`;
  const amazonLinks = [...allHtml.matchAll(/https:\/\/www\.amazon\.com\/dp\/[A-Z0-9]{10}\?tag=kinsta-sites-20/g)].map((match) => match[0]);
  const imageRefs = [...allHtml.matchAll(/<img[^>]+src="([^"]+)"/g)].map((match) => match[1]);
  const localImageRefs = imageRefs.filter((image) => image.startsWith("/images/"));
  const disclosureIndex = indexHtml.indexOf("Affiliate disclosure:");
  const firstAmazonIndex = indexHtml.indexOf("https://www.amazon.com/dp/");
  const checks = {
    productCount: data.productCount >= 50 && data.products?.length >= 50,
    taggedAmazonLinks: amazonLinks.length >= 50,
    realImages: data.products.every((product) => product.image?.startsWith("https://m.media-amazon.com/") || product.image?.startsWith("/images/")),
    renderedImages: imageRefs.length >= 20,
    localImagesExist: localImageRefs.every((image) => existsSync(path.join(siteDir, image))),
    disclosureBeforeAmazon: disclosureIndex >= 0 && firstAmazonIndex >= 0 && disclosureIndex < firstAmazonIndex,
    monetizationSurface: Array.isArray(data.monetizationSurface) && data.monetizationSurface.some((item) => item.kind === "standard_commission"),
    sitemap: readFileSync(sitemapPath, "utf8").includes(`${site.baseUrl}/products/`),
    robots: readFileSync(robotsPath, "utf8").includes(`${site.baseUrl}/sitemap.xml`),
    noHardcodedRatings: !/\b[0-5]\.\d\s*out of\s*5\s*stars/i.test(allHtml),
    noHardcodedPrices: !/\$[0-9]+(?:\.[0-9]{2})?/.test(allHtml)
  };

  if (Object.values(checks).every(Boolean)) {
    pass(`${site.slug} | products=${data.productCount} amazonLinks=${amazonLinks.length} images=${imageRefs.length}`);
  } else {
    fail(`${site.slug} | ${JSON.stringify(checks)}`);
  }
}
