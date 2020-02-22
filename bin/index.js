#!/usr/bin/env node

const program = require('commander');
const generateAddressess = require('../app/helpers/bip44Helper');

function fetchData(mnemonic, deviation_path, coin_type) {
  const aa = generateAddressess.generateAddressess()
  generateAddressess.addresses.map(function(item) {
       console.log(item.deviation_path, "ddddd")
  });
}

program
  .command('list')
  .alias('ls')
  .description('Wallet a.ddress list')
  .action(() => fetchData())

program.parse(process.argv);
