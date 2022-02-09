import "./Mint.css";
import React, { useState } from "react";
import MintLogo from "../../images/GenesisRobos/2.png";
import RobosNFT from '../../utils/RobosNFT.json';
import { ethers } from 'ethers'
import useWeb3Modal from "../../hooks/useWeb3Modal";
import Counter from '../counter/counter';



function Mint() {
  const [mintAmount, setMintAmount] = useState(1);
  const [provider] = useWeb3Modal();


  const ethValue = (mintAmount * 0.1).toFixed(2)
  const CONTRACT_ADDRESS = '0x9efb028Ff1fcf3a37CC2EbCf54CB1F720fC835b1';

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 8) {
      newMintAmount = 8;
    }
    setMintAmount(newMintAmount);
  };

  const handleMint = async event => {
    try {
      const contract = new ethers.Contract(CONTRACT_ADDRESS, RobosNFT.abi, provider);
      const signer = provider.getSigner(0);
      const contractSigner = contract.connect(signer);

      const ethValueString = ethValue.toString();
      console.log(ethValue.toString());
      
      const txParamsOverride = {
        value: ethers.utils.parseEther(ethValueString),
      }

      const tx = await contractSigner.mintGenesisRobo( mintAmount, txParamsOverride ) 
      await tx.wait()
    } catch (error) {
      alert(error.message);
      console.error(error)
    }
  }
  console.log({ mintAmount});
  return (
    <div className="container" id="Mint">
      <div className="mintPage">
        <div className="mintTop">
          <h1 className="mintTitle">Mint to Join the $Robos Fam!</h1>
          <p className="mintdescription">
            Manufacture, & name your Robo!
          </p>
          <p className="mintdescription">
            Cost to Mint: Ξ{ethValue} 
          </p>
        </div>

        <img
          className="mintImage"
          src={MintLogo}
          alt="Robos"
          layout="intrinsic"
          width="175"
          height="175"
        />
        <div className="countContainer">
          <button
            className="subButton"
            style={{ lineHeight: 0.4 }}
            onClick={(e) => {
              e.preventDefault();
              decrementMintAmount();
            }}
          >
            -
          </button>
          <p className="mintAmount">{mintAmount}</p>
          <button
            className="addButton"
            style={{ lineHeight: 0.4 }}
            onClick={(e) => {
              e.preventDefault();
              incrementMintAmount();
            }}
          >
            +
          </button>
        </div>
        <button 
          onClick={handleMint}
          className="mintButton">Mint
        </button>
        <Counter />
        
      </div>
    </div>
  );
}

export default Mint;
