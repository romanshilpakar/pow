const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      network_id: "9840123110",
      host: "localhost",
      port: 8545,
      //gas: 6666666666,
      //gasPrice: 2000000000000
    },
  },
};
