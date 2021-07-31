# 初始化私链
```
geth --datadir /home/angular/chainData/ init /home/angular/mychain/genesis.json
```

# 链接到私链
```
geth --datadir /home/angular/chainData/ --networkid 15
```

# 链接到私链并打开控制台
```
geth --datadir /home/angular/chainData/ --networkid 15 console 2>output.log 
```

# 允许远程过程调用 RPC
```
geth  --datadir /home/angular/chainData/ --rpc --allow-insecure-unlock  --http --http.corsdomain https://remix.ethereum.org --networkid 15 console 
```

# 启动Dev链
```
geth --datadir /home/angular/testChainData --http --dev --http.corsdomain "https://remix.ethereum.org,http://remix.ethereum.org" console 

```
