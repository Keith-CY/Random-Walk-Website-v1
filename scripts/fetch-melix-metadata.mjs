import fs from "node:fs/promises";
import path from "node:path";

const outputPath = path.join(process.cwd(), "content", "generated", "melix-repo.json");
const fallback = JSON.parse(await fs.readFile(outputPath, "utf8"));
const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "random-walk-static-build"
};

if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

async function getJson(url) {
  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`GitHub metadata fetch failed: ${response.status}`);
  }
  return response.json();
}

try {
  const [repo, releases] = await Promise.all([
    getJson("https://api.github.com/repos/Keith-CY/melix"),
    getJson("https://api.github.com/repos/Keith-CY/melix/releases?per_page=1").catch(() => [])
  ]);

  const metadata = {
    name: repo.full_name ?? fallback.name,
    description: repo.description ?? fallback.description,
    stars: repo.stargazers_count ?? fallback.stars,
    forks: repo.forks_count ?? fallback.forks,
    topics: Array.isArray(repo.topics) ? repo.topics : fallback.topics,
    latestRelease: Array.isArray(releases) && releases[0] ? releases[0].tag_name : null,
    lastPushedAt: repo.pushed_at ?? fallback.lastPushedAt,
    readmeUrl: "https://github.com/Keith-CY/melix#readme",
    githubUrl: repo.html_url ?? fallback.githubUrl,
    source: "github"
  };

  await fs.writeFile(outputPath, `${JSON.stringify(metadata, null, 2)}\n`);
  console.log("Melix metadata refreshed from GitHub.");
} catch (error) {
  console.warn(`${error.message}. Using checked-in Melix metadata fallback.`);
}
