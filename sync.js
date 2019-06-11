const fs = require('fs');
const hosts = require('./hosts');

fs.writeFileSync('hosts.json', JSON.stringify(hosts.sort((a, b) => a.Address.localeCompare(b.Address)), null, 2));
