// Entry point for the news-image-20261125 entry.
//
// Copies entry.png (a 1024x1024 PNG of "The World" front page for
// 25 November 2026) from the bot directory into the output directory,
// validating the file before copying and verifying the copy afterwards.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Environment:
//   MAKEFUN_BOT_DIR     directory holding entry.png (default: this file's dir)
//   MAKEFUN_OUTPUT_DIR  directory to write entry.png into (default: "out")

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const MAX_BYTES = 1048576; // 1 MiB
const EXPECTED_WIDTH = 1024;
const EXPECTED_HEIGHT = 1024;

// PNG signature: 89 50 4E 47 0D 0A 1A 0A
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

function pngDimensions(buf: Buffer): { width: number; height: number } {
  // A PNG starts with an 8-byte signature, then a 25-byte IHDR chunk:
  // 4 bytes length, 4 bytes "IHDR", 4 bytes width, 4 bytes height (big-endian).
  if (buf.length < 33) fail("entry.png is too short to be a PNG");
  if (!buf.subarray(0, 8).equals(PNG_MAGIC)) {
    fail("entry.png does not start with the PNG signature");
  }
  if (buf.toString("ascii", 12, 16) !== "IHDR") {
    fail("entry.png has no IHDR chunk where one is expected");
  }
  return {
    width: buf.readUInt32BE(16),
    height: buf.readUInt32BE(20),
  };
}

const botDir =
  process.env.MAKEFUN_BOT_DIR ?? dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const srcPath = join(botDir, "entry.png");
const dstPath = join(outDir, "entry.png");

let bytes: Buffer;
try {
  bytes = readFileSync(srcPath);
} catch {
  fail(`cannot read ${srcPath}`);
}

const { width, height } = pngDimensions(bytes);
if (width !== EXPECTED_WIDTH || height !== EXPECTED_HEIGHT) {
  fail(`entry.png is ${width}x${height}, expected ${EXPECTED_WIDTH}x${EXPECTED_HEIGHT}`);
}
if (bytes.length > MAX_BYTES) {
  fail(`entry.png is ${bytes.length} bytes, over the ${MAX_BYTES} byte cap`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(dstPath, bytes);

const copied = readFileSync(dstPath);
if (!copied.equals(bytes)) {
  fail("copy of entry.png is not byte-identical to the source");
}

const sha = createHash("sha256").update(bytes).digest("hex");
console.log(
  `wrote ${dstPath} (${width}x${height}, ${bytes.length} bytes, sha256 ${sha})`,
);
