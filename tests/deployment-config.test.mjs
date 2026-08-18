import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("Vercel builds the repository as a Next.js app", async () => {
  const packageJson = JSON.parse(await readFile(new URL("package.json", root), "utf8"));
  const vercelJson = JSON.parse(await readFile(new URL("vercel.json", root), "utf8"));
  const homepage = await readFile(new URL("app/page.tsx", root), "utf8");

  assert.equal(packageJson.scripts.build, "next build");
  assert.equal(packageJson.scripts.start, "next start");
  assert.equal(vercelJson.framework, "nextjs");
  assert.equal(vercelJson.buildCommand, "npm run build");
  assert.equal(vercelJson.installCommand, "npm install");
  assert.match(homepage, /export default function Home/);
});
