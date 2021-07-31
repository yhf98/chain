# Solidity

pragma 版本杂注

## 值类型
- bool：布尔
- int/uint【uint8-uint256】：有符号/无符号
- fixed/ufixed:有符号定长浮点数/无符号定长浮点数
- address: 地址
- enum : 枚举
- function: 函数
- array: 数组
- mapping: 映射

## 数据存储位置
- storage
- memory

## Solidity函数的状态可变性
- pure 纯函数，不允许修改或访问状态
- view 不允许修改状态
- payable 允许从消息调用中接收以太币Ether
- constant 与view相同，一般只修饰变量，不允许赋值

## 回退函数（fallback）
没有名字，不能有参数也不能有返回值
如果在一个到合约的调用中，没有其他函数与给定的函数标识符匹配（没有提供调用数据），那么这个函数就会被执行。

## 异常处理
- require
- assert

