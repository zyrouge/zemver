const assert = require("node:assert");
const test = require("node:test");
const { ZemVer } = require("../dist");

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
