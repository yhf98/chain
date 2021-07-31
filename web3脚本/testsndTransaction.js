var Web3=require("web3")

var web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var args=process.argv.splice(2)
var _from=web3.eth.accounts[0];
var _to="0x826ed834fd268ae9564d9572231a98184e754e5a";
var _amount="50000";

var abi=[{"constant":true,"inputs":[],"name":"minter","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"send","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Sent","type":"event"}];
var CoinContract=web3.eth.contract(abi)
var contractAddress="0xaF187ee40e719156989e05F1717653Ddcd70480b"
var contractInstace=CoinContract.at(contractAddress);

contractInstace.send(_to,_amount,{from:_from},(err,res)=>{
	if(err){
		console.info("Error: ",err)
	}else{
		console.info("Result: ",res)
	}
});