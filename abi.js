window.SKILLVAULT_ABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "endorser",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "builder",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "skillId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "EndorsementWithdrawn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "builder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "displayName",
				"type": "string"
			}
		],
		"name": "ProfileCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "builder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "category",
				"type": "string"
			}
		],
		"name": "SkillAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "endorser",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "builder",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "skillId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "SkillEndorsed",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "category",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "proofURI",
				"type": "string"
			}
		],
		"name": "addSkill",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "displayName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "bio",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "pfpURI",
				"type": "string"
			}
		],
		"name": "createProfile",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "builder",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "skillId",
				"type": "uint256"
			}
		],
		"name": "endorseSkill",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "builder",
				"type": "address"
			}
		],
		"name": "getCredibility",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "total",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "builder",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "skillId",
				"type": "uint256"
			}
		],
		"name": "getSkillEndorsements",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "endorser",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct SkillVault.Endorsement[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "builder",
				"type": "address"
			}
		],
		"name": "getSkills",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "category",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "proofURI",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "credibility",
						"type": "uint256"
					}
				],
				"internalType": "struct SkillVault.Skill[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "profiles",
		"outputs": [
			{
				"internalType": "string",
				"name": "displayName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "bio",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "pfpURI",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "joinedAt",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalEndorsements",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "builder",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "skillId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "withdrawEndorsement",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
