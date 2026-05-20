import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/RoomMi-Web-Enrique" : "";

const nextConfig: NextConfig = {
  ...(isGitHubPages && { output: "export" as const }),
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: isGitHubPages,
  images: { unoptimized: true },
};

export default nextConfig;
