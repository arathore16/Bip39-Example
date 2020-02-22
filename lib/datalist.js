const program = require('commander');
const generateAddressess = require('../app/controllers/bipController');

program
  .version('0.0.1')
  .description('Get public and private keys');

program
  .command('generateAddressess <mnemonic> <deviation_path> <coin_type>')
  .alias('a')
  .description('Get addresss')
  .action((mnemonic, deviation_path, coin_type) => {
    generateAddressess({ mnemonic, deviation_path, coin_type });
  });