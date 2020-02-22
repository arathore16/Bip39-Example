const bip39 = require("bip39");
const hdkey = require("ethereumjs-wallet/hdkey")

const generateAddressess = function (
  mnemonic,
  deviation_path,
  coin_type
) {
  const response = { addresses: [] };

  const seed = bip39.mnemonicToSeed(mnemonic).toString();
  const hdwallet = hdkey.fromMasterSeed(seed);

  for (let i = 0; i < 20; i++) {
    let address_data = {};
    address_data.deviation_path = deviation_path + "/" + i;
    let wallets = hdwallet.derivePath(deviation_path + i).getWallet();

    let wallet_address = "0x" + wallets.getAddress().toString("hex");
    let private_key = wallets.getPrivateKey().toString("hex");
    let public_key = wallets.getPublicKey().toString("hex");

    if (coin_type == "ETH") {
      private_key = "0x" + private_key;
      public_key = "0x" + public_key;
    }

    address_data.public_key = public_key;
    address_data.private_key = private_key;
    address_data.wallet_address = wallet_address;

    response.addresses.push(address_data);
  }
  return response;
};

module.exports = {
  generateAddressess
};
