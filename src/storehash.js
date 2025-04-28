import getWeb3 from "./getWeb3";
// export an instance of the smart contract that stores IPFS hash

async function storehash() {
  // Your contract address as deployed by Remix
  const address = "0xB9267989af34A896496004876C53F6E70494dF5b";
  const abi = [
    {
      constant: false,
      inputs: [
        {
          name: "s",
          type: "string",
        },
      ],
      name: "sendHash",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "getHash",
      outputs: [
        {
          name: "s",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ];
  const web3 = await getWeb3();
  return new web3.eth.Contract(abi, address);
}
storehash();

export default storehash;
