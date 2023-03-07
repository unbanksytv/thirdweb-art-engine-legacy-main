const project = require('../package.json');

const cliArt = () => {
    return console.info(`
=======================================
|| thirdweb art engine (legacy) v${project.version}
|| by ${project.contributors[1].name}
=======================================
    `)
}

module.exports = cliArt;
