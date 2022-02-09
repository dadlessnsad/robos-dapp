// import React, {useEffect, useState} from "react"
// import { ethers } from 'ethers';
// import RobosNFT from '../../utils/RobosNFT.json'


// function Claim() {
//   const [account, setAccount] = useState("");
//   const [rendered, setRendered] = useState("");

//   const CONTRACT_ADDRESS = '0x929c33cf3abc1990debec51d575da09bdfd68323'
//   const provider = new ethers.providers.Web3Provider(window.ethereum);


//   useEffect(() => {
//     async function fetchAccount() {
//       try {
//         if (!provider) {
//           return;
//         }

//         // Load the user's accounts.
//         const accounts = await provider.listAccounts();
//         setAccount(accounts[0]);
//         // Resolve the ENS name for the first account.
//         const name = await provider.lookupAddress(accounts[0]);

//         // Render either the ENS name or the shortened account address.
//         if (name) {
//           setRendered(name);
//         } else {
//           setRendered(account.substring(0, 6) + "..." + account.substring(36));
//         }
//       } catch (err) {
//         setAccount("");
//         setRendered("");
//         console.error(err);
//       }
//     }
//     fetchAccount();
//   }, [account, provider, setAccount, setRendered]);



//   const getReward = async event => {
//     try {
//       const CONTRACT_ADDRESS = '0x9efb028Ff1fcf3a37CC2EbCf54CB1F720fC835b1'

//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const contract = new ethers.Contract(CONTRACT_ADDRESS, RobosNFT.abi, provider);
//       const signer = provider.getSigner(0);
//       const contractSigner = contract.connect(signer);

//       const claim = await contractSigner.getReward();
//       await claim.wait();

//       console.log(claim)
//     } catch (error) {
//       alert(error.message);
//       console.error(error)
//     }
//   }

//   return (
//     <h1 className="headerText"><a onClick={getReward} href="#" className="header-Links">Claim</a></h1>
//   )
// }

// export default Claim