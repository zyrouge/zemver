const { ZemVer } = require("../dist");

const start = async () => {
    const version = ZemVer.parse("2025.1.1-beta+0");
    console.log(`original: ${version}`);
    console.log(`bump: ${version.bump()}`);
};

start();
