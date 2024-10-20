const cron = require('node-cron');
const { syncDB } = require('./tasks/sysnc-db');

cron.schedule('1-59/5 * * * * *', syncDB);

console.log('Inicio')