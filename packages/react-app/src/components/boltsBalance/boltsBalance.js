import React, {useEffect, useState} from 'react'
import { ethers, BigNumber } from 'ethers'
import { hasEthereum, requestAccount } from '../../utils/ethereum';
import BoltsToken from '../../utils/BoltsToken.json'
import './boltsBalance.css';

function BoltsBalance() {
  const [loading, setLoading] = useState(true)
  const [totalBalance, setTotalBalance] = useState()
  const [account, setAccount] = useState("");
  const [rendered, setRendered] = useState("");

  const oneEther = BigNumber.from("1000000000000000000");
  const CONTRACT_ADDRESS = '0x929c33cf3abc1990debec51d575da09bdfd68323'
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(CONTRACT_ADDRESS, BoltsToken.abi, provider);
  const signer = provider.getSigner(0);
  const contractSigner = contract.connect(signer);
  
  useEffect(() => {
    async function fetchAccount() {
      try {
        if (!provider) {
          return;
        }

        // Load the user's accounts.
        const accounts = await provider.listAccounts();
        setAccount(accounts[0]);
        // Resolve the ENS name for the first account.
        const name = await provider.lookupAddress(accounts[0]);

        // Render either the ENS name or the shortened account address.
        if (name) {
          setRendered(name);
        } else {
          setRendered(account.substring(0, 6) + "..." + account.substring(36));
        }
      } catch (err) {
        setAccount("");
        setRendered("");
        console.error(err);
      }
    }
    fetchAccount();
  }, [account, provider, setAccount, setRendered]);

  useEffect( function() {
    async function fetchTotals() {
      if(! hasEthereum()) {
        console.log('Install MetaMask')
          setLoading(false)
          return
      }
    
      await getBalanceOf();
      console.log(getBalanceOf);
      setLoading(false)
    }
      fetchTotals();
  });


  async function getBalanceOf() {
    try {
      const ABI = BoltsToken.abi 
      const CONTRACT_ADDRESS = '0x929c33cf3abc1990debec51d575da09bdfd68323'
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
      
      // const rawData = await contract.balanceOf(account)

      const balance = (await contract.balanceOf(account)).toString();
      const parseBalance = ethers.utils.parseEther(balance);
      const data = ethers.utils.formatEther(parseBalance) / oneEther

      setTotalBalance(data.toString());

    } catch(error) {
      console.log(error)
    }
  }
  console.log("total Balance", totalBalance)
  return (
    <div className="boltsBalance">
      <h1 className="boltsText">{totalBalance}</h1>
    </div>
  )
}

export default BoltsBalance