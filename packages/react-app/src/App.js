import { useQuery } from "@apollo/react-hooks";
import { Contract } from "@ethersproject/contracts";
import { getDefaultProvider } from "@ethersproject/providers";
import React, { useEffect, useState } from "react";

import {Button} from "./components";
import './styles/App.css';
import logo from "./images/RLogo.png";
import DiscordLogo from "./images/Discord-Logo-White.png";
import OpenseaLogo from "./images/OpenseaLogomarkWhite.png";
import TwitterLogo from "./images/TwitterLogowhite.png";
import EtherScanLogo from "./images/etherscanLogo.png";
import GlitchesLogo from "./images/GlitchLogo.png";
import LandingLogo from './images/RobosLogo.png';
import useWeb3Modal from "./hooks/useWeb3Modal";

import Mint from "./components/mint/Mint"
import Roadmap from "./components/roadmap/Roadmap"
import Team from "./components/team/Team"
import Manufacture from "./components/manufacture/Manufacture"
import Accordion from "./components/accordion/accordion"

import { addresses, abis } from "@project/contracts";
import GET_TRANSFERS from "./graphql/subgraph";

async function readOnChainData() {
  // Should replace with the end-user wallet, e.g. Metamask
  const defaultProvider = getDefaultProvider();
  // Create an instance of an ethers.js Contract
  // Read more about ethers.js on https://docs.ethers.io/v5/api/contract/contract/
  const ceaErc20 = new Contract(addresses.ceaErc20, abis.erc20, defaultProvider);
  // A pre-defined address that owns some CEAERC20 tokens
  const tokenBalance = await ceaErc20.balanceOf("0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C");
  console.log({ tokenBalance: tokenBalance.toString() });
}

function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
  const [account, setAccount] = useState("");
  const [rendered, setRendered] = useState("");

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

  return (
    <button
        className="connectButton" 
        onClick={() => {
            if (!provider) {
                loadWeb3Modal();
            } else {
                logoutOfWeb3Modal();
            }
        }}
    >
      {rendered === "" && "Connect Wallet"}
      {rendered !== "" && rendered}
    </button>
  );
}

function App() {
  const { loading, error, data } = useQuery(GET_TRANSFERS);
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();

  React.useEffect(() => {
    if (!loading && !error && data && data.transfers) {
      console.log({ transfers: data.transfers });
    }
  }, [loading, error, data]);

  return (
  <main className="background">    
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="headerText"><a href="/" className="header-Links">Home</a></h1>
            <h1 className="headerText"><a href="#Roadmap" className="header-Links">About</a></h1>
            <h1 className="headerTextBolts"><a href="/" className="header-Links">$BOLTS</a></h1>
            <h1 className="headerText"><a href="/" className="header-Links">Claim</a></h1>
            <h1 className="headerTextVote"><a href="/" className="header-Links">Vote</a></h1>
            <h1 className="headerText"><a href="#Mint" className="header-Links">Mint</a></h1>
            <h1 className="headerText"><a href="#Manufacture" className="header-Links">Manufacture</a></h1>
            <WalletButton provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal} />
        </header>
        <div className="App-LandingPage">
            <div className="App-LandingImage">
                <img src={LandingLogo} className="App-LandingLogo" alt="logo" />
            </div>
                {/* Remove the "hidden" prop and open the JavaScript console in the browser to see what this function does */}
                <Button hidden onClick={() => readOnChainData()}>
                    Read On-Chain Balance
                </Button>
        </div>
    </div>
    <Roadmap />
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
                <img src={EtherScanLogo} className="GlitchesLogo" alt = "Etherscan Logo" />
                <img src={EtherScanLogo} className="GlitchesLogo" alt = "Etherscan Logo" />
                <img src={GlitchesLogo} className="GlitchesLogo" alt = "Glitch Logo" />
            </div>
            <div className="Footer-right">
                <h4 className="FooterTitle">Socials</h4>
                <a href="https://twitter.com/RobosDAO">
                  <img src={TwitterLogo} className="footerlogo" alt = "Twitter Logo" />
                </a>
                <a href="https://twitter.com/RobosDAO" className="FooterText">Twitter</a>
                <a href="https://discord.gg/bctUawQPB3">
                  <img src={DiscordLogo} className="footerlogo" alt = "Discord Logo" />
                </a>
                <a href="https://discord.gg/bctUawQPB3" className="FooterText">Discord</a>
                <a href="https://opensea.io/">
                  <img src={OpenseaLogo} className="footerlogo" alt = "Opensea Logo" />
                </a>
                <a href="https://opensea.io/" className="FooterText">OpenSea</a>
            </div>
        </footer>
    </main>
  );
}

export default App;
