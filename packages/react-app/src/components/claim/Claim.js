import React, {useEffect, useState} from "react"
import { ethers } from 'ethers';
import RobosNFT from '../../utils/RobosNFT.json'

function Claim() {
  const getReward = async event => {
    try {
      const CONTRACT_ADDRESS = '0x9efb028Ff1fcf3a37CC2EbCf54CB1F720fC835b1'

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, RobosNFT.abi, provider);
      const signer = provider.getSigner(0);
      const contractSigner = contract.connect(signer);

      const claim = await contractSigner.getReward();
      await claim.wait();

      console.log(claim)
    } catch (error) {
      alert(error.message);
      console.error(error)
    }
  }

  return (
    <h1 className="headerText"><a onClick={getReward} href="#" className="header-Links">Claim</a></h1>
  )
}

export default Claim