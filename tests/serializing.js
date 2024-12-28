const assert = require("node:assert");
const test = require("node:test");
const { ZemVer } = require("../dist");

test("parsing version", () => {
    const version = new ZemVer(2024, 1, 1);
    assert.strictEqual(version.toString(), "2024.1.1");
});

test("parsing version + prerelease", () => {
    const version = new ZemVer(2024, 1, 1, "stable");
    assert.strictEqual(version.toString(), "2024.1.1-stable");
});

test("parsing version + build", () => {
    const version = new ZemVer(2024, 1, 1, undefined, 1);
    assert.strictEqual(version.toString(), "2024.1.1+1");
});

test("parsing version + build (0)", () => {
    const version = new ZemVer(2024, 1, 1, undefined, 0);
    assert.strictEqual(version.toString(), "2024.1.1");
});

test("parsing version + prerelease + build", () => {
    const version = new ZemVer(2024, 1, 1, "stable", 1);
    assert.strictEqual(version.toString(), "2024.1.1-stable+1");
});
