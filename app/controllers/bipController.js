const bip44Helper = require("../helpers/bip44Helper");
const generateAddressess = function (req, res, next) {
  var response = bip44Helper.generateAddressess(
    req.body.mnemonic,
    req.body.deviation_path,
    req.body.coin_type
  );
  res.json(response);
};

module.exports = {
  generateAddressess,
};
