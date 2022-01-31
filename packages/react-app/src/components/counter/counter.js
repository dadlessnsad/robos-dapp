import React, { useState } from "react";
import { ethers } from 'ethers';
import RobosNFT from '../../utils/RobosNFT.json'

function Counter() {
  const CONTRACT_ADDRESS = '0x9efb028ff1fcf3a37cc2ebcf54cb1f720fc835b1'
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(CONTRACT_ADDRESS, RobosNFT.abi, provider);
  const signer = provider.getSigner(0);
  const contractSigner = contract.connect(signer);
 
  const currentSupply = async event => {
    const supply = await contract.robosSupply()
  }
  console.log(currentSupply);
  return ( 
    <div>
      <h2>71 / 5000</h2>
    </div>
  )
}

export default Counter