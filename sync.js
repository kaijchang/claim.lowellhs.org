const fs = require('fs');

const hosts = require('./hosts');

fs.writeFileSync('hosts.json', hosts.sort((a, b) => a.localeCompare(b)));
