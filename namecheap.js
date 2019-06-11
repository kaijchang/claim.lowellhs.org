require('dotenv').config();

const Namecheap = require('namecheap'),
      namecheap = new Namecheap(process.env.USERNAME, process.env.PASSWORD, '74.125.225.100');

const hosts = require('./hosts');

namecheap.domains.dns.setHosts('lowellhs.org', hosts, (err, res) => {
    console.log(err, res);
});
