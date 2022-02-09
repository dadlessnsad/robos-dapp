
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import BoltsToken from "./utils/BoltsToken.json";
import RobosNFT from "./utils/RobosNFT.json";

import "./styles/App.css";
import logo from "./images/RLogo.png";
import DiscordLogo from "./images/Discord-Logo-White.png";
import OpenseaLogo from "./images/OpenseaLogomarkWhite.png";
import TwitterLogo from "./images/TwitterLogowhite.png";
import EtherScanLogo from "./images/etherscanLogo.png";
import GlitchesLogo from "./images/GlitchLogo.png";
import LandingLogo from "./images/RobosLogo.png";
import { hasEthereum } from "./utils/ethereum";
import useWeb3Modal from "./hooks/useWeb3Modal";

import Mint from "./components/mint/Mint";
import Roadmap from "./components/roadmap/Roadmap";
import Team from "./components/team/Team";
import Manufacture from "./components/manufacture/Manufacture";
import Accordion from "./components/accordion/accordion";
import WhitelistMint from "./components/whitelistmint/whitelistMint";
import PresaleTimer from "./components/presaleTimer/presaleTimer";
import Ticker from "./components/Ticker/ticker";


function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
  const [account, setAccount] = useState("");
  const [rendered, setRendered] = useState("");
  const [totalBalance, setTotalBalance] = useState(0);
  const [loading, setLoading] = useState(true);

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
        if (provider) {
          const { ethereum } = window;
          const chainParams = [
            {
              chainId: "0x4",
              chainName: "Rinkeby Testnet",
              nativeCurrency: {
                name: "ETHER",
                symbol: "ETH",
                decimals: 18,
              },
              rpcUrls: [
                "https://rinkeby.infura.io/v3/30dcd2131e91416c9794eeea577b54eb",
              ],
              blockExplorerUrls: ["https://rinkey.etherscan.io"],
            },
          ];

          window.ethereum
            .request({ method: "wallet_addEthereumChain", chainParams })
            .catch(console.error);
          ethereum
            .request({
              method: `wallet_switchEthereumChain`,
              params: [{ chainId: "0x4" }],
            })
            .catch(console.error);
        }

        window.ethereum.on(`chainChanged`, () => {
          window.location.reload();
        });

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

  useEffect(function() {
    async function fetchTotals() {
      if (!hasEthereum()) {
        console.log("Install MetaMask");
        setLoading(false);
        return;
      }

      await getBalanceOf();
      setLoading(false);
    }
    fetchTotals();
  });

  async function getBalanceOf() {
    try {
      const CONTRACT_ADDRESS = "0x929c33cf3abc1990debec51d575da09bdfd68323";
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        BoltsToken.abi,
        provider
      );

      const balance = (await contract.balanceOf(account)).toString();
      const data = ethers.utils.formatEther(balance);

      setTotalBalance(Math.round(data.toString()).toFixed(2));
    } catch (error) {}
  }

  return (
    <div className="boltsContainer">
      <div className="boltsBalance">
        <h1 className="boltsText">{totalBalance}</h1>
      </div>
      <button
        className="connectButton"
        onClick={() => {
          if (!provider) {
            loadWeb3Modal();
          } else {
            logoutOfWeb3Modal();
          }
          getBalanceOf();
        }}
      >
        {rendered === "" && "Connect Wallet"}
        {rendered !== "" && rendered}
      </button>
    </div>
  );
}

function App() {
  // const { loading, error, data } = useQuery(GET_TRANSFERS);
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();
  async function Claim() {
    try {
      const CONTRACT_ADDRESS = "0x9efb028Ff1fcf3a37CC2EbCf54CB1F720fC835b1";
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        RobosNFT.abi,
        provider
      );
      const signer = provider.getSigner(0);
      const contractSigner = contract.connect(signer);

      const claim = await contractSigner.getReward();
      await claim.wait();
      console.log(claim);
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  }

  return (
    <main className="background">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="headerText">
            <a href="/" className="header-Links">
              Home
            </a>
          </h1>
          <h1 className="headerText">
            <a href="#Roadmap" className="header-Links">
              About
            </a>
          </h1>
          <h1 className="headerTextVote">
            <a href="/" className="header-Links">
              Vote
            </a>
          </h1>
          <h1 className="headerText">
            <a href="#Mint" className="header-Links">
              Mint
            </a>
          </h1>
          <h1 className="headerText">
            <a onClick={Claim} href="#" className="header-Links">
              Claim
            </a>
          </h1>
          <h1 className="headerTextBolts">
            <a href="/" className="header-Links">
              $BOLTS:
            </a>
          </h1>
          <WalletButton
            provider={provider}
            loadWeb3Modal={loadWeb3Modal}
            logoutOfWeb3Modal={logoutOfWeb3Modal}
          />
        </header>
        <div className="App-LandingPage">
          <div className="App-LandingImage">
            <img src={LandingLogo} className="App-LandingLogo" alt="logo" />
          </div>
        </div>
      </div>
      <Roadmap />
      <PresaleTimer />
      <WhitelistMint />
      <Ticker />
      <Mint />
      <Manufacture />
      <Team />
      <Accordion />
      <footer className="App-Footer">
        <div className="Footer-left">
          <img src={logo} className="FooterApp-logo" alt="logo" />
        </div>
        <div className="Footer-center">
          <h4 className="FooterTitle">Contracts</h4>
          <img
            src={EtherScanLogo}
            className="GlitchesLogo"
            alt="Etherscan Logo"
          />
          <img
            src={EtherScanLogo}
            className="GlitchesLogo"
            alt="Etherscan Logo"
          />
          <img src={GlitchesLogo} className="GlitchesLogo" alt="Glitch Logo" />
        </div>
        <div className="Footer-right">
          <h4 className="FooterTitle">Socials</h4>
          <a href="https://twitter.com/RobosDAO">
            <img src={TwitterLogo} className="footerlogo" alt="Twitter Logo" />
          </a>
          <a href="https://twitter.com/RobosDAO" className="FooterText">
            Twitter
          </a>
          <a href="https://discord.gg/bctUawQPB3">
            <img src={DiscordLogo} className="footerlogo" alt="Discord Logo" />
          </a>
          <a href="https://discord.gg/bctUawQPB3" className="FooterText">
            Discord
          </a>
          <a href="https://opensea.io/">
            <img src={OpenseaLogo} className="footerlogo" alt="Opensea Logo" />
          </a>
          <a href="https://opensea.io/" className="FooterText">
            OpenSea
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
