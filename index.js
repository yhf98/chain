var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var abi = JSON.parse('[{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]') 
var VotingContract =web3.eth.contract(abi); 
console.info(VotingContract)
var contractInstance = VotingContract.at('0xe4d8c06458fd577607f5c8007819942fb26d4d89');
var candidates = {
	"Curry": "candidate-1",
	"Thompson": "candidate-2",
	"Durant": "candidate-3"
};
function voteForCandidate(candidateName) {
	// candidateName = $("#candidate").val();
	try {
		 contractInstance.voteForCandidate(candidateName, {
			from: web3.eth.accounts[0]
		},
		function() {
			let div_id = candidates[candidateName];
			$("#" + div_id).html(contractInstance.totalVotesFor.call(candidateName).toString());
		});
	} catch(err) {}
}
$(document).ready(function() {
	candidateNames = Object.keys(candidates);
	for (var i = 0; i < candidateNames.length; i++) {
		let name = candidateNames[i];
		let val = contractInstance.totalVotesFor.call(name).toString();
		$("#" + candidates[name]).html(val);
	}
});



