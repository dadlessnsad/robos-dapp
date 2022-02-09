import React, {useEffect, useState} from 'react'
import { ethers, BigNumber } from 'ethers'
import { hasEthereum, requestAccount } from '../../utils/ethereum';
import BoltsToken from '../../utils/BoltsToken.json'
import useWeb3Modal from "../../hooks/useWeb3Modal"
import account from '../../App'
import './boltsBalance.css';

function BoltsBalance() {
  const [provider] = useWeb3Modal();
  const [loading, setLoading] = useState(true)
  const [totalBalance, setTotalBalance] = useState(0)

  const oneEther = BigNumber.from("1000000000000000000");

  useEffect( function() {
    async function fetchTotals() {
      if(! hasEthereum()) {
        console.log('Install MetaMask')
          setLoading(false)
          return
      }
    
      await getBalanceOf();
      setLoading(false)
    }
      fetchTotals();
  });


  async function getBalanceOf() {
    try {
      const CONTRACT_ADDRESS = '0x929c33cf3abc1990debec51d575da09bdfd68323'
      const newProvider = new ethers.providers.Web3Provider(provider)
      const contract = new ethers.Contract(CONTRACT_ADDRESS, BoltsToken.abi, newProvider);
      
      const balance = (await contract.balanceOf(account)).toString();
      const parseBalance = ethers.utils.parseEther(balance);
      const data = ethers.utils.formatEther(parseBalance) / oneEther

      setTotalBalance(data.toString());

    } catch(error) {
      console.error(error)      
    }
  }
  return (
    <div className="boltsBalance">
      <h1 className="boltsText">{totalBalance}</h1>
    </div>
  )
}

export default BoltsBalance