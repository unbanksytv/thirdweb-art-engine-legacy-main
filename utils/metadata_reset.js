const basePath = process.cwd();
const { readFileSync, writeFileSync } = require('fs-extra');

// reset metadata to default
(async () => {
    // read json data
    let rawdata = readFileSync(`${basePath}/build/json/_metadata.json`);
    let data = JSON.parse(rawdata);

    // reset the metadata information
    data.forEach((item) => {
        item.image = `${item.edition}.png`;
        writeFileSync(
            `${basePath}/build/json/${item.edition}.json`,
            JSON.stringify(item, null, 2)
        );
    });

    writeFileSync(
        `${basePath}/build/json/_metadata.json`,
        JSON.stringify(data, null, 2)
    );

    console.log('[done]: Metadata has been reset ./');

})();
