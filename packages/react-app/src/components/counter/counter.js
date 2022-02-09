import React, {useState, useEffect} from 'react'
import { ethers } from "ethers"
import { hasEthereum, requestAccount } from '../../utils/ethereum';
import useWeb3Modal from "../../hooks/useWeb3Modal"
import RobosNFT from '../../utils/RobosNFT.json'



function Counter() { 
  const [provider] = useWeb3Modal();
  // UI state
  const [loading, setLoading] = useState(true)
  const [totalMinted, setTotalMinted] = useState(0)
 
  useEffect( function() {
    async function fetchTotals() {
      if(! hasEthereum()) {
        console.log('Install MetaMask')
          setLoading(false)
          return
      }
    
      await getTotalSupply();
      setLoading(false)
    }
      fetchTotals();
  });

  // Get total supply of tokens from smart contract
  async function getTotalSupply() {
    try {
      // Interact with contract
      const CONTRACT_ADDRESS = '0x9efb028Ff1fcf3a37CC2EbCf54CB1F720fC835b1'
      const contract = new ethers.Contract(CONTRACT_ADDRESS, RobosNFT.abi, provider)
      const data = await contract.robosSupply()
      
      setTotalMinted(data.toNumber());
    } catch(error) {
        console.log(error)
    }
  }
    return (
      <h2>Genesis Robos Left: <br /> {totalMinted} / 5000</h2>
    )
  }
export default Counter