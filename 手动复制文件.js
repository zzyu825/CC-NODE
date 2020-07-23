const fs = require('fs');
const path = require('path');

async function test() {
    const fromFilename = path.resolve(__dirname, './files/harden.jpg');
    const buffer = await fs.promises.readFile(fromFilename);
    const toFilename = path.resolve(__dirname, './files/harden_copy.jpg');
    await fs.promises.writeFile(toFilename, buffer);
    console.log('copy success!');
};
test();
