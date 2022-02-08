import React,{ useEffect, useState }  from 'react';
import { Button } from 'antd';
import Web3 from 'web3';
import './App.less';

function App() {
  const [account, setAccount] = useState(); // state variable to set account.
  
  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
      const accounts = await web3.eth.requestAccounts();
      
      setAccount(accounts[0]);
    }
    
    load();
   }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Your account is: {account}
        </p>
        <Button type="primary">Button</Button>
      </header>
    </div>
  );
}

export default App;
