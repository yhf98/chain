// 导入模块
var Web3 = require('web3')
// 连接本地私链
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// 异步读取本地合约文件 
var code = fs.readFileSync('Voting.sol').toString()
// 导入solc模块
var solc = require('solc')
// 编译合约
var compiledCode = solc.compile(code)
// ABI 接口定义
var abiDefinition =JSON.parse(compiledCode.contracts[':Voting'].interface)
// 得到合约对象
var VotingContract = web3.eth.contract(abiDefinition)
// 拿到合约的字节码
var byteCode = compiledCode.contracts[':Voting'].bytecode
// 部署合约
var deployedContract = VotingContract.new(['Curry','Thompson','Durant'],{data: byteCode, from: web3.eth.accounts[0], gas: 4700000})


deployedContract.address
var contractInstance = VotingContract.at(deployedContract.address)
















