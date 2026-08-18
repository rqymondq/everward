import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the Everward landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Everward \| HVAC Lead Generation/);
  assert.match(html, /More qualified HVAC replacement opportunities\./);
  assert.match(html, /From ad click to estimate opportunity\./);
  assert.match(html, /https:\/\/calendar\.app\.google\/sqs2iTmTbKPKM2gf9/);
  assert.doesNotMatch(html, /testimonial|guarantee|revenue|case stud/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});
