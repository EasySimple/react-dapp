# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# react-dapp
Use Create React App, react, antd,truffle and other libraries to build a DAPP project.

## Truffle
创建文件夹并初始化目录
- mkdir contracts && cd contracts && truffle init
- truffle create contract Contacts  新建Contacts合约
### 基本命令   truffle -x
- truffle init      基本项目初始化
- truffle unbox     继承框架
- truffle compile   合约编译
- truffle migrate   合约部署
- truffle test      测试
- truffle deploy    部署

### 创建合约
- truffle create contract Contacts

### 创建部署及迁移脚本
- truffle create migrations Contacts

### 迁移
- truffle migrations --network 【geth/development,,, 默认development】

## 启动
- npm i
- npm run start

## 说明
当前的目录结构是前端工程内嵌 truffle 工程目录，前端工程truffle文件夹同级也可以


## 参考博文

- [Build a Real-World dApp With React, Solidity, and Web3.js](https://betterprogramming.pub/blockchain-introduction-using-real-world-dapp-react-solidity-web3-js-546471419955)