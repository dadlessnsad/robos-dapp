import { Web3Provider } from "@ethersproject/providers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Fortmatic from "fortmatic";
import Portis from "@portis/web3";
import Torus from "@toruslabs/torus-embed";

import { useCallback, useEffect, useMemo, useState } from "react";
import Web3Modal from "web3modal";

// Enter a valid infura key here to avoid being rate limited
// You can get a key for free at https://infura.io/register
const INFURA_ID = "f3ff95210f0c42e0ae133e610deab89e";

const NETWORK = "mainnet";

function useWeb3Modal(config = {}) {
  const [provider, setProvider] = useState();
  const [autoLoaded, setAutoLoaded] = useState(false);
  const { autoLoad = true, infuraId = INFURA_ID, network = NETWORK } = config;


  // Web3Modal also supports many other wallets.
  // You can see other options at https://github.com/Web3Modal/web3modal
  const web3Modal = useMemo(() => {
    const customNetworkOptions = {
      rpcUrl: 'https://mainnet.infura.io/v3/eb712358b90f44e694ae16c90d922b19',
      chainId: 1
    }

    return new Web3Modal({
      network,
      cacheProvider: true,
      providerOptions: {
        portis: {
          package: Portis, // required
          options: {
            id: "f127a727-8db0-48e0-9c3c-bf2e7dc9d00e" // required
          }
        },
        torus: {
          package: Torus, // required
          options: {
            networkParams: {
              host: "https://localhost:3000", // optional
            }
          }
        },
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId,
          },
        },
      },
      fortmatic: {
        package: Fortmatic, // required
        options: {
          key: "pk_live_658B798DAF01F7F4", // required,
          network: customNetworkOptions // if we don't pass it, it will default to localhost:8454
        }
      }
    });
  }, [infuraId, network]);

  // Open wallet selection modal.
  const loadWeb3Modal = useCallback(async () => {
    const newProvider = await web3Modal.connect();
    setProvider(new Web3Provider(newProvider));
  }, [web3Modal]);

  const logoutOfWeb3Modal = useCallback(
    async function () {
      await web3Modal.clearCachedProvider();
      window.location.reload();
    },
    [web3Modal],
  );

  // If autoLoad is enabled and the the wallet had been loaded before, load it automatically now.
  useEffect(() => {
    if (autoLoad && !autoLoaded && web3Modal.cachedProvider) {
      loadWeb3Modal();
      setAutoLoaded(true);
    }
  }, [autoLoad, autoLoaded, loadWeb3Modal, setAutoLoaded, web3Modal.cachedProvider]);

  return [provider, loadWeb3Modal, logoutOfWeb3Modal];
}

export default useWeb3Modal;
