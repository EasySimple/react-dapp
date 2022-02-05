# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# react-dapp
Use Create React App, react, antd,truffle and other libraries to build a DAPP project.

## Truffle
### 基本命令   truffle -x
- truffle init      基本项目初始化
- truffle unbox     继承框架
- truffle compile   合约编译
- truffle migrate   合约部署
- truffle test      测试
- truffle deploy    部署

### 创建合约
- truffle create contract InfoContract

### 创建部署及迁移脚本
- truffle create migrations InfoContract

### 迁移
- truffle migrations --network 【geth/development,,, 默认development】

## 启动
- npm i
- npm run start
