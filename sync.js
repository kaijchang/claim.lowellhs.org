const fs = require('fs');
const hosts = require('./hosts');

fs.writeFileSync('hosts.json', JSON.stringify(hosts.sort((a, b) => a.HostName.localeCompare(b.HostName)), null, 2));
