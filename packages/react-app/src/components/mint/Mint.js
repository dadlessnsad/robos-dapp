
import './Mint.css';
import React, {useState} from "react";
import MintLogo from "../../images/GenesisRobos/2.png";


function Mint() {
  const [mintAmount, setMintAmount] = useState(1);

const decrementMintAmount = () => {
  let newMintAmount = mintAmount - 1;
  if (newMintAmount < 1) {
    newMintAmount = 1;
  }
  setMintAmount(newMintAmount);
};

const incrementMintAmount = () => {
  let newMintAmount = mintAmount + 1;
  if (newMintAmount > 10) {
    newMintAmount = 10;
  }
  setMintAmount(newMintAmount);
};

  console.log({mintAmount})
  return (
    <div className="container" id="Mint">
      <div className="mintPage">
        <div className="mintTop">
          <h1 className="mintTitle">Mint to Join the $Robos Fam!!</h1>
          <p className="mintdescription">Earn "x" amount of Robo Coins Daily per Robo!</p>
        </div>
        
        <img className="mintImage" src={MintLogo} alt="Robos" layout="intrinsic" width="175" height="175" />

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
        <button className="mintButton">Mint</button>

      </div>
    </div>
  );
}

export default Mint