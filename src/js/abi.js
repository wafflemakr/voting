const votacionABI =[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_idCandidato",
				"type": "uint256"
			}
		],
		"name": "votar",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_idCandidato",
				"type": "uint256"
			}
		],
		"name": "eventoVoto",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidatos",
		"outputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "nombre",
				"type": "string"
			},
			{
				"name": "numeroVotos",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "numeroCandidatos",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "votantes",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

//module.exports = { votacionABI: votacionABI };
export default votacionABI