import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useRef, useState } from "react";
import Web3Modal from "web3modal";
import { Contract, providers, utils } from 'ethers';
import { NFT_CONTRACT_ABI, NFT_CONTRACT_ADDRESS } from "../constants";


export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [presaleStarted, setPresaleStarted] = useState(false);
  const [presaleEnded, setPresaleEnded] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [tokenIdsMinted, setTokenIdsMinted] = useState("0");

  const web3ModalRef = useRef();

  const presaleMint = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI, signer,);

      const txn = await nftContract.presaleMint({
        value: utils.parseEther("0.01"),
      });
      setLoading(true);

      await txn.wait();
      setLoading(false);

      window.alert("You successfully minted a CryptoDev!");
    } catch (error) {
      console.error(error);
    }
  }

  const publicMint = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI, signer,);

      const txn = await nftContract.mint({
        value: utils.parseEther("0.01"),
      });
      setLoading(true);

      await txn.wait();
      setLoading(false);

      window.alert("You successfully minted a CryptoDev!");
    } catch (error) {
      console.error(error);
    }
  }

  const getOwner = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI, signer,);
      const owner = await nftContract.owner();
      const userAddress = await signer.getAddress();
      if (owner.toLowerCase() === userAddress.toLowerCase()) {
        setIsOwner(true);
      };
    } catch (error) {
      console.error(error);
    }
  }

  const startPresale = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI, signer,);
      const txn = await nftContract.startPresale();
      setLoading(true);

      await txn.wait();
      setLoading(false);

      setPresaleStarted(true);
      await checkIfPresaleStarted();

    } catch (error) {
      console.error(error);
    }
  }

  const checkIfPresaleStarted = async () => {
    try {
      const provider = await getProviderOrSigner();
      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI, provider,);
      const _presaleStarted = await nftContract.presaleStarted();
      if (!_presaleStarted) {
        await getOwner();
      }
      setPresaleStarted(_presaleStarted);
      return _presaleStarted;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  const checkIfPresaleEnded = async () => {
    try {
      const provider = await getProviderOrSigner();
      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI, provider,);
      const presaleEndTime = await nftContract.presaleEnded();
      const currentTimeInSeconds = Date.now() / 1000;
      const _presaleEnded = presaleEndTime.lt(Math.floor(currentTimeInSeconds));
      setPresaleEnded(_presaleEnded);
      return _presaleEnded;
    } catch (error) {
      console.error(error);
    }
  }

  const getProviderOrSigner = async (needSigner = false) => {
    try {
      const provider = await web3ModalRef.current.connect();
      const web3Provider = new providers.Web3Provider(provider);

      const { chainId } = await web3Provider.getNetwork();
      if (chainId !== 4) {
        window.alert("Change the network to Rinkeby");
        throw new Error("Change the network to Rinkeby");
      }
      if (needSigner) {
        const signer = web3Provider.getSigner();
        return signer;
      }
      return web3Provider;
    } catch (error) {
      console.error(error);
    }
  }

  const getTokenIdsMinted = async () => {
    try {
      const provider = await getProviderOrSigner();
      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI, provider,);
      const _tokenIds = await nftContract.tokenIds();
      setTokenIdsMinted(_tokenIds.toString());
    } catch (error) {
      console.error(error);
    }
  }


  const connectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (error) {
      console.error(error);
    }
  };




  useEffect(() => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "rinkeby",
        providerOptions: {},
        disabledInjectedProvider: false,
      });
      connectWallet();
      const presaleStarted = checkIfPresaleStarted();
      if (presaleStarted) {
        checkIfPresaleEnded();
      }
      getTokenIdsMinted();

      const presaleEndedInterval = setInterval(async () => {
        const _presaleStarted = await checkIfPresaleStarted();
        if (_presaleStarted) {
          const _presaleEnded = await checkIfPresaleEnded();
          if (_presaleEnded) {
            clearInterval(presaleEndedInterval);
          }
        }
      }, 5 * 1000);
    }
  }, [walletConnected])

  function renderButton() {
    if (!walletConnected) {
      return (<button onClick={connectWallet} className={styles.button}>
        Connect your Wallet
      </button>)
    }

    if (loading) {
      return <button className={styles.button}>Loading...</button>;
    }


    if (isOwner && !presaleStarted) {
      return (<button onClick={startPresale} className={styles.button}>
        Start Presale
      </button>)
    }

    if (!presaleStarted) {
      return (
        <div>
          <span className={styles.description}>
            Presale has not started yet. Come back later!
          </span>
        </div>
      );
    }

    if (presaleStarted && !presaleEnded) {
      return (
        <div>
          <span className={styles.description}>
            Presale has started! If your address is whiteListed, you can mint a CryptoDev!
          </span>
          <button onClick={presaleMint} className={styles.button}>
            Presale Mint 🚀
          </button>
        </div>
      );
    }

    if (presaleEnded) {
      return (
        <div>
          <span className={styles.description}>
            Presale has ended.
            You can mint a CryptoDev in public sale, if any remain.
          </span>
          <button onClick={publicMint} className={styles.button}>
            Public Mint 🚀
          </button>
        </div>
      );
    }
  }


  return (
    <div>
      <Head>
        <title>Crypto Devs</title>
        <meta name="description" content="Whitelist-Dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div>
          <h1 className={styles.title}>Welcome to Crypto Devs!</h1>
          <div className={styles.description}>
            Its an NFT collection for developers in Crypto.
          </div>
          <div className={styles.description}>
            {tokenIdsMinted}/20 have been minted
          </div>
          {renderButton()}
        </div>
        <div>
          <img className={styles.image} src="./0.svg" />
        </div>
      </div>
      <footer className={styles.footer}>
        Made with &#10084; by Crypto Devs
      </footer>
    </div>
  )
}
