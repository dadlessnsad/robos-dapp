import React, {useState, useEffect} from 'react'
import { ethers } from "ethers"
import { hasEthereum, requestAccount } from '../../utils/ethereum';
import RobosNFT from '../../utils/RobosNFT.json'



function Counter() { 
  
  // UI state
  const [loading, setLoading] = useState(true)
  const [totalMinted, setTotalMinted] = useState(0)
  const ABI = RobosNFT.abi 
  const CONTRACT_ADDRESS = '0x9efb028Ff1fcf3a37CC2EbCf54CB1F720fC835b1'
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    ABI,
    signer
  );
  useEffect( function() {
    async function fetchTotals() {
      if(! hasEthereum()) {
        console.log('Install MetaMask')
          setLoading(false)
          return
      }
    
      await getTotalSupply();
      console.log(getTotalSupply);
      setLoading(false)
    }
      fetchTotals();
  });

  // Get total supply of tokens from smart contract
  async function getTotalSupply() {
    try {
      // Interact with contract
      const ABI = RobosNFT.abi 
      const CONTRACT_ADDRESS = '0x9efb028Ff1fcf3a37CC2EbCf54CB1F720fC835b1'
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider)
      const data = await contract.robosSupply()
      console.log(data);
      
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