import { ApiPromise, WsProvider, Keyring } from "@polkadot/api";
import { ContractPromise } from "@polkadot/api-contract";
import { cryptoWaitReady } from "@polkadot/util-crypto";

import { web3Accounts, web3Enable, web3FromAddress } from "@polkadot/extension-dapp";

// Load onchain app metadata, this json file autogenerated when you compile
// backends using `build.sh` script, please see `backends/build.sh`.
const abiJson = require("~/assets/$name_snake_case$.json");

const keyring = new Keyring({ type: "sr25519", ss58Format: 42 });

async function ConnectNodeAndContract(contractAddress) {
  await cryptoWaitReady();

  console.log(`Connecting to ${process.env.WS_SERVER}...`);
  const provider = new WsProvider(process.env.WS_SERVER);
  const api = await ApiPromise.create({
    provider,
    types: {
      Address: "MultiAddress",
      LookupSource: "MultiAddress"
    }
  });

  const contract = new ContractPromise(api, abiJson, contractAddress);

  const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version()
  ]);

  console.log(
    `You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`
  );

  return contract;
}

var allAccounts = [];

/**
 * Fungsi untuk menginisialisasi web3
 * ini akan mengakses data akun di extension yang provide web3 keystore.
 */
async function init() {
  const allInjected = await web3Enable("$name_snake_case$");
  allAccounts = await web3Accounts();
}

function getInjectedAccounts() {
  return allAccounts;
}

/**
 * Gunakan akun dari web3 keystore.
 * Ini akan membangkitkan extension (apabila ada) untuk konfirmasi akses ke pengguna.
 */
async function useAccount(address){
    return await web3FromAddress(address); 
}

export default (context, inject) => {
  inject("nuchain", {
    init,
    getInjectedAccounts,
    useAccount,
    ConnectNodeAndContract,
    keyring
  });
};