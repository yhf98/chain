var Web3=require("web3")

var web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var args=process.argv.splice(2)
var _from=web3.eth.accounts[0];
var _to="0x826ed834fd268ae9564d9572231a98184e754e5a";

