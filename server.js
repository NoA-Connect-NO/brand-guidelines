// Static file server for the NoA Connect design system.
// Zero dependencies on purpose: nothing to install, nothing to keep patched.
//
// Railway sets PORT. Bind 0.0.0.0, not localhost, or the platform's health
// check cannot reach the process and the deploy is marked failed.

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 5180;
const ROOT = __dirname;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".json": "application/json; charset=utf-8",
  // Markdown as text/plain so browsers show it instead of downloading it.
  ".md": "text/plain; charset=utf-8",
  ".mp4": "video/mp4",
};

function send(res, status, body, headers) {
  res.writeHead(status, Object.assign({ "X-Content-Type-Options": "nosniff" }, headers || {}));
  res.end(body);
}

const server = http.createServer((req, res) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    return send(res, 405, "Method Not Allowed", { "Content-Type": "text/plain; charset=utf-8", Allow: "GET, HEAD" });
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  } catch {
    return send(res, 400, "Bad Request", { "Content-Type": "text/plain; charset=utf-8" });
  }

  if (pathname.endsWith("/")) pathname += "index.html";

  // Resolve, then verify the result is still inside ROOT. Without this check a
  // request for /../../etc/passwd would escape the served directory.
  const filePath = path.resolve(ROOT, "." + pathname);
  if (filePath !== ROOT && !filePath.startsWith(ROOT + path.sep)) {
    return send(res, 403, "Forbidden", { "Content-Type": "text/plain; charset=utf-8" });
  }

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      return send(res, 404, "Not found", { "Content-Type": "text/plain; charset=utf-8" });
    }
    const ext = path.extname(filePath).toLowerCase();
    const headers = {
      "Content-Type": TYPES[ext] || "application/octet-stream",
      "Content-Length": stat.size,
      // Short cache: the point of hosting this is that updates show up quickly.
      "Cache-Control": "public, max-age=300",
      "Last-Modified": stat.mtime.toUTCString(),
    };
    if (req.method === "HEAD") return send(res, 200, "", headers);
    res.writeHead(200, headers);
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Design system served on http://0.0.0.0:${PORT}`);
});
