const assert = require("node:assert");
const test = require("node:test");
const { ZemVer } = require("../dist");

test("parsing version", () => {
    const version = ZemVer.parse("2024.1.1");
    assert.strictEqual(version.year, 2024);
    assert.strictEqual(version.month, 1);
    assert.strictEqual(version.code, 1);
    assert.strictEqual(version.prerelease, undefined);
    assert.strictEqual(version.build, undefined);
});

test("parsing version + prerelease", () => {
    const version = ZemVer.parse("2024.1.1-stable");
    assert.strictEqual(version.year, 2024);
    assert.strictEqual(version.month, 1);
    assert.strictEqual(version.code, 1);
    assert.strictEqual(version.prerelease, "stable");
    assert.strictEqual(version.build, undefined);
});

test("parsing version + build", () => {
    const version = ZemVer.parse("2024.1.1+1");
    assert.strictEqual(version.year, 2024);
    assert.strictEqual(version.month, 1);
    assert.strictEqual(version.code, 1);
    assert.strictEqual(version.prerelease, undefined);
    assert.strictEqual(version.build, "1");
});

test("parsing version + prerelease + build", () => {
    const version = ZemVer.parse("2024.1.1-stable+1");
    assert.strictEqual(version.year, 2024);
    assert.strictEqual(version.month, 1);
    assert.strictEqual(version.code, 1);
    assert.strictEqual(version.prerelease, "stable");
    assert.strictEqual(version.build, "1");
});
