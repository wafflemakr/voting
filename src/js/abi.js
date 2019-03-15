const abi = [
  {
    constant: true,
    inputs: [],
    name: "totalCandidates",
    outputs: [
      {
        name: "",
        type: "uint8"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x3866965c"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint8"
      }
    ],
    name: "candidates",
    outputs: [
      {
        name: "id",
        type: "uint8"
      },
      {
        name: "name",
        type: "string"
      },
      {
        name: "voteCount",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x6d6277f4"
  },
  {
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x715018a6"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x8da5cb5b"
  },
  {
    constant: true,
    inputs: [],
    name: "isOwner",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x8f32d59b"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address"
      }
    ],
    name: "voters",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xa3ec138d"
  },
  {
    constant: false,
    inputs: [
      {
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xf2fde38b"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
    signature: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_candidateId",
        type: "uint8"
      }
    ],
    name: "Voted",
    type: "event",
    signature:
      "0x7093329465ed557bd14ccfc262717be13ddd1773b2a8307dd8560299717a87b3"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event",
    signature:
      "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_name",
        type: "string"
      }
    ],
    name: "addCandidate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x462e91ec"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_candidateId",
        type: "uint8"
      }
    ],
    name: "vote",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xb3f98adc"
  }
];

export default abi;
