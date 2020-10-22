require('dotenv').config();

const namecheapApi = require('namecheap-api');
const axios = require('axios');

const hosts = require('./hosts');

const arrayToNumberedObject = (hosts) => hosts.reduce((acc, cur, idx) => {
    Object.keys(cur).forEach(key => {
        acc[key + idx] = cur[key];
    });
    acc['TTL' + idx] = 1799;

    return acc;
}, {});

namecheapApi.config.set('ApiUser', process.env.API_USER);
namecheapApi.config.set('ApiKey', process.env.API_KEY);

axios.get('https://ipv4bot.whatismyipaddress.com')
    .then(res => {
        namecheapApi.config.set('ClientIp', res.data);
        return namecheapApi.apiCall('namecheap.domains.dns.setHosts', {
            TLD: 'org',
            SLD: 'lowellhs',
            ...arrayToNumberedObject(hosts)
        });
    })
    .then(res => console.log(res.response[0].DomainDNSSetHostsResult[0].$.IsSuccess))
    .catch(console.error);
