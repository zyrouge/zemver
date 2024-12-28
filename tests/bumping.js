const assert = require("node:assert");
const test = require("node:test");
const { ZemVer, ZemVerBumpMode } = require("../dist");

test("incrementing version", () => {
    const date = new Date();
    const version = new ZemVer(2024, 1, 1);
    const bumped = version.bump();
    assert.strictEqual(bumped.year, date.getFullYear());
    assert.strictEqual(bumped.month, date.getMonth() + 1);
    assert.strictEqual(bumped.code, 2);
    assert.strictEqual(bumped.prerelease, undefined);
    assert.strictEqual(bumped.build, undefined);
});

test("incrementing numeric build only", () => {
    const version = new ZemVer(2024, 1, 1, undefined, 0);
    const bumped = version.bump(ZemVerBumpMode.IncrementNumericBuildOnly);
    assert.strictEqual(bumped.year, 2024);
    assert.strictEqual(bumped.month, 1);
    assert.strictEqual(bumped.code, 1);
    assert.strictEqual(bumped.prerelease, undefined);
    assert.strictEqual(bumped.build, "1");
});
