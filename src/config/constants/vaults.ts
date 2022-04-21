import { CHAIN_ID } from './chains'
import tokens from './tokens'
import { VaultConfig } from './types'

const vaults: VaultConfig[] = [
  {
    id: 0,
    pid: 22,
    availableChains: [CHAIN_ID.BSC],
    type: 'AUTO',
    version: 'V1',
    stratAddress: {
      [CHAIN_ID.BSC]: '0x9a668d5482828a444d7322fe5420ab5b44ce3de7',
    },

    stakeToken: tokens.banana,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [CHAIN_ID.BSC]: 0,
      },
      address: {
        [CHAIN_ID.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [CHAIN_ID.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
    totalFees: 1,
    withdrawFee: 0,
    burning: false,
  },
  {
    id: 1,
    pid: 1,
    availableChains: [CHAIN_ID.BSC],
    type: 'AUTO',
    version: 'V1',
    stratAddress: {
      [CHAIN_ID.BSC]: '0x4e4efe113214c1371b264c09f59f64c5f12589f8',
    },
    stakeToken: tokens.bananaBnb,
    rewardToken: tokens.bananaBnb,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [CHAIN_ID.BSC]: 1,
      },
      address: {
        [CHAIN_ID.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [CHAIN_ID.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
    totalFees: 4,
    withdrawFee: 0.1,
    burning: false,
  },
  {
    id: 2,
    pid: 2,
    availableChains: [CHAIN_ID.BSC],
    type: 'AUTO',
    version: 'V1',
    stratAddress: {
      [CHAIN_ID.BSC]: '0x234101c6612115cac7bdb74ee20f388bb95db8cc',
    },
    stakeToken: tokens.bananaBusd,
    rewardToken: tokens.bananaBusd,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [CHAIN_ID.BSC]: 2,
      },
      address: {
        [CHAIN_ID.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [CHAIN_ID.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
    totalFees: 4,
    withdrawFee: 0.1,
    burning: false,
  },
  {
    id: 3,
    pid: 0,
    availableChains: [CHAIN_ID.BSC_TESTNET, CHAIN_ID.BSC],
    type: 'MAX',
    version: 'V2',
    stratAddress: {
      [CHAIN_ID.BSC_TESTNET]: '0x32C359E44374a103A35171fc1aB92ef6E6B3f7D5',
      [CHAIN_ID.BSC]: '0xbfA9faC2e891f21f0eD32F1655eD5B1CD7De3897',
    },
    stakeToken: tokens.banana,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [CHAIN_ID.BSC_TESTNET]: 0,
        [CHAIN_ID.BSC]: 0,
      },
      address: {
        [CHAIN_ID.BSC_TESTNET]: '0xbbC5e1cD3BA8ED639b00927115e5f0e0040aA613',
        [CHAIN_ID.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [CHAIN_ID.BSC_TESTNET]: 'cakePerBlock',
        [CHAIN_ID.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
    totalFees: 1,
    withdrawFee: 0,
    burning: false,
  },
  {
    id: 4,
    pid: 1,
    availableChains: [CHAIN_ID.BSC],
    type: 'MAX',
    version: 'V2',
    stratAddress: {
      [CHAIN_ID.BSC]: '0xcA8078Ab97E7F54e40D1ff4aA81012f8629E2cD5',
    },
    stakeToken: tokens.bananaBnb,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [CHAIN_ID.BSC]: 7,
      },
      address: {
        [CHAIN_ID.BSC]: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
      },
      rewardsPerBlock: {
        [CHAIN_ID.BSC]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
    totalFees: 1,
    withdrawFee: 0,
    burning: false,
  },
  {
    id: 998,
    pid: 1,
    availableChains: [CHAIN_ID.BSC_TESTNET],
    type: 'MAX',
    version: 'V2',
    stratAddress: {
      [CHAIN_ID.BSC_TESTNET]: '0xA0F89D810257942bB91119c7c2Ea5A9F218fC4Cf',
    },
    stakeToken: tokens.horNey,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [CHAIN_ID.BSC_TESTNET]: 7,
      },
      address: {
        [CHAIN_ID.BSC_TESTNET]: '0xbbC5e1cD3BA8ED639b00927115e5f0e0040aA613',
      },
      rewardsPerBlock: {
        [CHAIN_ID.BSC_TESTNET]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
    totalFees: 1,
    withdrawFee: 0,
    burning: false,
  },
  {
    id: 999,
    pid: 2,
    availableChains: [CHAIN_ID.BSC_TESTNET],
    type: 'MAX',
    version: 'V2',
    stratAddress: {
      [CHAIN_ID.BSC_TESTNET]: '0x8fbcFD4f90e53C2722CDc56D2d3403B097136819',
    },
    stakeToken: tokens.forEver,
    rewardToken: tokens.banana,
    platform: 'ApeSwap',
    masterchef: {
      pid: {
        [CHAIN_ID.BSC_TESTNET]: 8,
      },
      address: {
        [CHAIN_ID.BSC_TESTNET]: '0xbbC5e1cD3BA8ED639b00927115e5f0e0040aA613',
      },
      rewardsPerBlock: {
        [CHAIN_ID.BSC_TESTNET]: 'cakePerBlock',
      },
      rewardToken: tokens.banana,
    },
    totalFees: 1,
    withdrawFee: 0,
    burning: false,
  },

  // {
  //   pid: 2,
  //   image: '',
  //   network: CHAIN_ID.BSC,
  //   strat: '0x234101c6612115cac7bdb74ee20f388bb95db8cc',
  //   stakeTokenAddress: '0x7Bd46f6Da97312AC2DBD1749f82E202764C0B914',
  //   platform: 'ApeSwap',
  //   token0: tokens.busd,
  //   token1: tokens.banana,
  //   isPair: true,
  //   masterchef: {
  //     pid: 2,
  //     address: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
  //     rewardsPerBlock: 'cakePerBlock',
  //     rewardToken: tokens.banana.address[CHAIN_ID.BSC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 0.1,
  //   burning: false,
  // },
  // {
  //   pid: 3,
  //   image: '',
  //   network: CHAIN_ID.BSC,
  //   strat: '0xe1b3485994ecc6c1e0e31ccf61535ae6cdda403b',
  //   stakeTokenAddress: '0x2F3391AeBE27393aBa0a790aa5E1577fEA0361c2',
  //   platform: 'TakoDefi',
  //   token0: tokens.tako,
  //   token1: tokens.tako,
  //   isPair: false,
  //   masterchef: {
  //     pid: 2,
  //     address: '0x4448336BA564bd620bE90d55078e397c26492a43',
  //     rewardsPerBlock: 'takoPerBlock',
  //     rewardToken: tokens.tako.address[CHAIN_ID.BSC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 0.1,
  //   burning: false,
  //   inactive: true,
  // },
  // {
  //   pid: 4,
  //   image: '',
  //   network: CHAIN_ID.BSC,
  //   strat: '0x1a28148fcdb86a7f290bf8d787dbc02131e75cb4',
  //   stakeTokenAddress: '0xDB77fa37766DbF0D74bC9f0ad497F7cC887EA322',
  //   platform: 'TakoDefi',
  //   token0: tokens.wbnb,
  //   token1: tokens.tako,
  //   isPair: true,
  //   masterchef: {
  //     pid: 5,
  //     address: '0x4448336BA564bd620bE90d55078e397c26492a43',
  //     rewardsPerBlock: 'takoPerBlock',
  //     rewardToken: tokens.tako.address[CHAIN_ID.BSC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 0.1,
  //   burning: false,
  //   inactive: true,
  // },
  // {
  //   pid: 5,
  //   image: '',
  //   network: CHAIN_ID.BSC,
  //   strat: '0x1d2485cb0a027d182a38d841670d38b13b373439',
  //   stakeTokenAddress: '0xe4fba63b748175d2775bfe49c106a10800200bb6',
  //   platform: 'TakoDefi',
  //   token0: tokens.busd,
  //   token1: tokens.tako,
  //   isPair: true,
  //   masterchef: {
  //     pid: 6,
  //     address: '0x4448336BA564bd620bE90d55078e397c26492a43',
  //     rewardsPerBlock: 'takoPerBlock',
  //     rewardToken: tokens.tako.address[CHAIN_ID.BSC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 0.1,
  //   burning: false,
  //   inactive: true,
  // },
  // {
  //   pid: 19,
  //   image: '',
  //   network: CHAIN_ID.BSC,
  //   strat: '0xd137d43e2919d0bf7f26afacc191b5ba5a7702d9',
  //   stakeTokenAddress: '0xDB77fa37766DbF0D74bC9f0ad497F7cC887EA322',
  //   platform: 'TakoDefi',
  //   token0: tokens.wbnb,
  //   token1: tokens.tako,
  //   isPair: true,
  //   masterchef: {
  //     pid: 5,
  //     address: '0x4448336BA564bd620bE90d55078e397c26492a43',
  //     rewardsPerBlock: 'takoPerBlock',
  //     rewardToken: tokens.tako.address[CHAIN_ID.BSC],
  //   },
  //   totalFees: 50,
  //   withdrawFee: 0.1,
  //   burning: true,
  //   inactive: true,
  // },
  // {
  //   pid: 23,
  //   image: '',
  //   network: CHAIN_ID.BSC,
  //   strat: '0x402af21344ef92880a8e2b066bafd38f4e3de815',
  //   stakeTokenAddress: '0x2F3391AeBE27393aBa0a790aa5E1577fEA0361c2',
  //   platform: 'TakoDefi',
  //   token0: tokens.tako,
  //   token1: tokens.tako,
  //   isPair: false,
  //   masterchef: {
  //     pid: 0,
  //     address: '0x4448336BA564bd620bE90d55078e397c26492a43',
  //     rewardsPerBlock: 'takoPerBlock',
  //     rewardToken: tokens.tako.address[CHAIN_ID.BSC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 0.1,
  //   burning: false,
  //   inactive: true,
  // },
  // {
  //   pid: 24,
  //   image: '',
  //   network: CHAIN_ID.BSC,
  //   strat: '0x05b4582c52963ed192cc6b419913505c964e702c',
  //   stakeTokenAddress: '0xb37cad62441ef8b866f3e36f12fd42062b6c0f33',
  //   platform: 'TakoDefi',
  //   token0: tokens.inku,
  //   token1: tokens.inku,
  //   isPair: false,
  //   masterchef: {
  //     pid: 21,
  //     address: '0x4448336BA564bd620bE90d55078e397c26492a43',
  //     rewardsPerBlock: 'takoPerBlock',
  //     rewardToken: tokens.tako.address[CHAIN_ID.BSC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 0.1,
  //   burning: false,
  //   inactive: true,
  // },
  // {
  //   pid: 25,
  //   image: '',
  //   network: CHAIN_ID.BSC,
  //   strat: '0x7a874a889098d96ccb0ab0a5c05a21615cd857bf',
  //   stakeTokenAddress: '0xbd229081e5ce7b4ca5a63b65f3b2fea804fce819',
  //   platform: 'TakoDefi',
  //   token0: tokens.wbnb,
  //   token1: tokens.inku,
  //   isPair: true,
  //   masterchef: {
  //     pid: 20,
  //     address: '0x4448336BA564bd620bE90d55078e397c26492a43',
  //     rewardsPerBlock: 'takoPerBlock',
  //     rewardToken: tokens.tako.address[CHAIN_ID.BSC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 0.1,
  //   burning: false,
  //   inactive: true,
  // },
  // {
  //   pid: 26,
  //   image: '',
  //   network: CHAIN_ID.BSC,
  //   strat: '0xee2c7be3e7862fbe280826e3c140d6572a77081d',
  //   stakeTokenAddress: '0x5cd6a02caddf484d758d39f2f4005074c771cca9',
  //   platform: 'TakoDefi',
  //   token0: tokens.busd,
  //   token1: tokens.inku,
  //   isPair: true,
  //   masterchef: {
  //     pid: 22,
  //     address: '0x4448336BA564bd620bE90d55078e397c26492a43',
  //     rewardsPerBlock: 'takoPerBlock',
  //     rewardToken: tokens.tako.address[CHAIN_ID.BSC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 0.1,
  //   burning: false,
  //   inactive: true,
  // },
  // {
  //   pid: 27,
  //   image: 'BBQ.png',
  //   network: CHAIN_ID.BSC,
  //   strat: '0xa141151a455c551df2b3f8a4cf062f80e323dc1f',
  //   stakeTokenAddress: '0xd9a88f9b7101046786490baf433f0f6ab3d753e2',
  //   platform: 'BarbecueFinance',
  //   token0: tokens.bbq,
  //   token1: tokens.bbq,
  //   isPair: false,
  //   masterchef: {
  //     pid: 0,
  //     address: '0x26b2081247222f44d010a1a7ec74fe9ecc1d89ec',
  //     rewardsPerBlock: 'bbqPerBlock',
  //     rewardToken: tokens.bbq.address[CHAIN_ID.BSC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 0.1,
  //   burning: false,
  //   inactive: true,
  // },
  // {
  //   pid: 28,
  //   image: 'BBQ.svg',
  //   network: CHAIN_ID.BSC,
  //   strat: '0x2Fc69f48964160Db0c16bEFf4aDEC417D8994842',
  //   stakeTokenAddress: '0x3d6a067dc8a5b6657749905eeaaa39b43af4f294',
  //   platform: 'BarbecueFinance',
  //   token0: tokens.wbnb,
  //   token1: tokens.bbq,
  //   isPair: true,
  //   masterchef: {
  //     pid: 12,
  //     address: '0x26b2081247222f44d010a1a7ec74fe9ecc1d89ec',
  //     rewardsPerBlock: 'bbqPerBlock',
  //     rewardToken: tokens.bbq.address[CHAIN_ID.BSC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 0.1,
  //   burning: false,
  //   inactive: true,
  // },
  // {
  //   pid: 29,
  //   image: 'BBQ.svg',
  //   network: CHAIN_ID.BSC,
  //   strat: '0x77233cda97df6e9ddc1bd1bbaa938b50b937b391',
  //   stakeTokenAddress: '0x376d38a381919f9d1c61715d34f8163c28bb23e5',
  //   platform: 'BarbecueFinance',
  //   token0: tokens.busd,
  //   token1: tokens.bbq,
  //   isPair: true,
  //   masterchef: {
  //     pid: 13,
  //     address: '0x26b2081247222f44d010a1a7ec74fe9ecc1d89ec',
  //     rewardsPerBlock: 'bbqPerBlock',
  //     rewardToken: tokens.bbq.address[CHAIN_ID.BSC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 0.1,
  //   burning: false,
  //   inactive: true,
  // },
  // {
  //   pid: 30,
  //   image: 'LYPTUS.svg',
  //   network: CHAIN_ID.BSC,
  //   strat: '0xb47db1c6f571943dbfb372ab9838d97dcc2e98b4',
  //   stakeTokenAddress: '0xba26397cdff25f0d26e815d218ef3c77609ae7f1',
  //   platform: 'KoalaDefi',
  //   token0: tokens.lyptus,
  //   token1: tokens.lyptus,
  //   isPair: false,
  //   masterchef: {
  //     pid: 1,
  //     address: '0x7b3ca828e189739660310b47fc89b3a3e8a0e564',
  //     rewardsPerBlock: 'nalisPerBlock',
  //     rewardToken: tokens.nalis.address[CHAIN_ID.BSC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 0.1,
  //   burning: false,
  //   inactive: true,
  // },
  // {
  //   pid: 31,
  //   image: 'LYPTUS.svg',
  //   network: CHAIN_ID.BSC,
  //   strat: '0xc650865d3ead97f5a8e2c94479fade95fe7862a1',
  //   stakeTokenAddress: '0x1ea398a30f0f2a6ce00bebfe08fe11cd9df5afb6',
  //   platform: 'KoalaDefi',
  //   token0: tokens.wbnb,
  //   token1: tokens.lyptus,
  //   isPair: true,
  //   masterchef: {
  //     pid: 9,
  //     address: '0x7b3ca828e189739660310b47fc89b3a3e8a0e564',
  //     rewardsPerBlock: 'nalisPerBlock',
  //     rewardToken: tokens.nalis.address[CHAIN_ID.BSC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 0.1,
  //   burning: false,
  //   inactive: true,
  // },
  // {
  //   pid: 32,
  //   image: 'LYPTUS.svg',
  //   network: CHAIN_ID.BSC,
  //   strat: '0xcdd86cc08c98f8a5a0a89ce74dc678015d7d8fb6',
  //   stakeTokenAddress: '0x744527700ceB261689dF9862FcD0036f5771324C',
  //   platform: 'KoalaDefi',
  //   token0: tokens.busd,
  //   token1: tokens.lyptus,
  //   isPair: true,
  //   masterchef: {
  //     pid: 8,
  //     address: '0x7b3ca828e189739660310b47fc89b3a3e8a0e564',
  //     rewardsPerBlock: 'nalisPerBlock',
  //     rewardToken: tokens.nalis.address[CHAIN_ID.BSC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 0.1,
  //   burning: false,
  //   inactive: true,
  // },
  // {
  //   pid: 36,
  //   image: '',
  //   network: CHAIN_ID.BSC,
  //   strat: '0x4523c6e7e17b859fd6b17731649c5eda78ce4c26',
  //   stakeTokenAddress: '0xb2ebaa0ad65e9c888008bf10646016f7fcdd73c3',
  //   platform: 'KoalaDefi',
  //   token0: tokens.nalis,
  //   token1: tokens.nalis,
  //   isPair: false,
  //   masterchef: {
  //     pid: 0,
  //     address: '0x7b3ca828e189739660310b47fc89b3a3e8a0e564',
  //     rewardsPerBlock: 'nalisPerBlock',
  //     rewardToken: tokens.nalis.address[CHAIN_ID.BSC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 2.1,
  //   burning: false,
  //   inactive: true,
  // },
  // {
  //   pid: 34,
  //   image: '',
  //   network: CHAIN_ID.BSC,
  //   strat: '0x48970adde57d573185ba35e2d353f8e289ab2ac8',
  //   stakeTokenAddress: '0x8c7ef42d68889ef820cae512f43d8c256fdaa1a0',
  //   platform: 'KoalaDefi',
  //   token0: tokens.wbnb,
  //   token1: tokens.nalis,
  //   isPair: true,
  //   masterchef: {
  //     pid: 7,
  //     address: '0x7b3ca828e189739660310b47fc89b3a3e8a0e564',
  //     rewardsPerBlock: 'nalisPerBlock',
  //     rewardToken: tokens.nalis.address[CHAIN_ID.BSC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 0.1,
  //   burning: false,
  //   inactive: true,
  // },

  // {
  //   pid: 35,
  //   image: '',
  //   network: CHAIN_ID.BSC,
  //   strat: '0xec051753ee697ffff2eaf4f146d70e26dd0ff03b',
  //   stakeTokenAddress: '0x138ACb44F9f2e4E7F3bbcB7BBb1a268068dC202C',
  //   platform: 'KoalaDefi',
  //   token0: tokens.busd,
  //   token1: tokens.nalis,
  //   isPair: true,
  //   masterchef: {
  //     pid: 6,
  //     address: '0x7b3ca828e189739660310b47fc89b3a3e8a0e564',
  //     rewardsPerBlock: 'nalisPerBlock',
  //     rewardToken: tokens.nalis.address[CHAIN_ID.BSC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 0.1,
  //   burning: false,
  //   inactive: true,
  // },

  // {
  //   pid: 39,
  //   image: '',
  //   network: CHAIN_ID.BSC,
  //   strat: '0x64e079980a701779c71beab3372cab88236dc536',
  //   stakeTokenAddress: '0xdd5f9a9f05a9680867936c878ae6db4c9dab5c37',
  //   platform: 'Singular.farm',
  //   token0: tokens.wbnb,
  //   token1: tokens.sing,
  //   isPair: true,
  //   masterchef: {
  //     pid: 1,
  //     address: '0x31b05a72037e91b86393a0f935fe7094141ba0a7',
  //     rewardsPerBlock: 'singPerSec',
  //     rewardToken: tokens.sing.address[CHAIN_ID.BSC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 0.1,
  //   burning: false,
  //   rewardsInSeconds: true,
  //   inactive: true,
  // },

  // {
  //   pid: 40,
  //   image: '',
  //   network: CHAIN_ID.BSC,
  //   strat: '0x27b4e72ca589b629e96077e11dfab94fc57b2e29',
  //   stakeTokenAddress: '0xdddc245c62a0aa875893ab53b52455acdcd7f526',
  //   platform: 'Singular.farm',
  //   token0: tokens.busd,
  //   token1: tokens.sing,
  //   isPair: true,
  //   masterchef: {
  //     pid: 0,
  //     address: '0x31b05a72037e91b86393a0f935fe7094141ba0a7',
  //     rewardsPerBlock: 'singPerSec',
  //     rewardToken: tokens.sing.address[CHAIN_ID.BSC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 0.1,
  //   burning: false,
  //   rewardsInSeconds: true,
  //   inactive: true,
  // },

  // // MATIC VAULTS

  // {
  //   pid: 1,
  //   image: '',
  //   network: CHAIN_ID.MATIC,
  //   strat: '0x3a0b5177b7FDC0d306462B19950eeb8b8A2bd8A1',
  //   stakeTokenAddress: tokens.crystl.address[CHAIN_ID.MATIC],
  //   platform: 'CrystlFinance',
  //   token0: tokens.crystl,
  //   token1: tokens.crystl,
  //   isPair: false,
  //   masterchef: {
  //     pid: 0,
  //     address: '0xeBCC84D2A73f0c9E23066089C6C24F4629Ef1e6d',
  //     rewardsPerBlock: 'crystalPerBlock',
  //     rewardToken: tokens.crystl.address[CHAIN_ID.MATIC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 0.1,
  //   burning: false,
  //   inactive: true,
  // },
  // {
  //   pid: 2,
  //   image: '',
  //   network: CHAIN_ID.MATIC,
  //   strat: '0x12c7a5189F482f826e3D1f379078e4802Dd64d61',
  //   stakeTokenAddress: '0xB8e54c9Ea1616beEBe11505a419DD8dF1000E02a',
  //   platform: 'CrystlFinance',
  //   token0: tokens.wmatic,
  //   token1: tokens.crystl,
  //   isPair: true,
  //   masterchef: {
  //     pid: 1,
  //     address: '0xeBCC84D2A73f0c9E23066089C6C24F4629Ef1e6d',
  //     rewardsPerBlock: 'crystalPerBlock',
  //     rewardToken: tokens.crystl.address[CHAIN_ID.MATIC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 0.1,
  //   burning: false,
  //   inactive: true,
  // },
  // {
  //   pid: 10,
  //   image: '',
  //   network: CHAIN_ID.MATIC,
  //   strat: '0x24bedf774266d49ff8a2e0b96371d1681c2a1333',
  //   stakeTokenAddress: '0xB8e54c9Ea1616beEBe11505a419DD8dF1000E02a',
  //   platform: 'CrystlFinance',
  //   token0: tokens.wmatic,
  //   token1: tokens.crystl,
  //   isPair: true,
  //   masterchef: {
  //     pid: 1,
  //     address: '0xeBCC84D2A73f0c9E23066089C6C24F4629Ef1e6d',
  //     rewardsPerBlock: 'crystalPerBlock',
  //     rewardToken: tokens.crystl.address[CHAIN_ID.MATIC],
  //   },
  //   totalFees: 50,
  //   withdrawFee: 0.1,
  //   burning: true,
  //   inactive: true,
  // },
  // {
  //   pid: 3,
  //   image: '',
  //   network: CHAIN_ID.MATIC,
  //   strat: '0xc0c56f3B12366564837902BAEB49912fEadB551A',
  //   stakeTokenAddress: '0x44b82c02F404Ed004201FB23602cC0667B1D011e',
  //   platform: 'CrystlFinance',
  //   token0: tokens.eth,
  //   token1: tokens.banana,
  //   isPair: true,
  //   masterchef: {
  //     pid: 3,
  //     address: '0xeBCC84D2A73f0c9E23066089C6C24F4629Ef1e6d',
  //     rewardsPerBlock: 'crystalPerBlock',
  //     rewardToken: tokens.crystl.address[CHAIN_ID.MATIC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 0.1,
  //   depositFee: 1,
  //   burning: false,
  //   inactive: true,
  // },
  // {
  //   pid: 6,
  //   image: '',
  //   network: CHAIN_ID.MATIC,
  //   strat: '0xb41e9e0b562f1ac790d1d570dfe790b855a46c3f',
  //   stakeTokenAddress: '0xb394009787c2d0cb5b45d06e401a39648e21d681',
  //   platform: 'BarberShop',
  //   token0: tokens.usdc,
  //   token1: tokens.hair,
  //   isPair: true,
  //   masterchef: {
  //     pid: 8,
  //     address: '0xc6ae34172bb4fc40c49c3f53badebce3bb8e6430',
  //     rewardsPerBlock: 'hairPerBlock',
  //     rewardToken: tokens.hair.address[CHAIN_ID.MATIC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 0.1,
  //   burning: false,
  //   inactive: true,
  // },
  // {
  //   pid: 12,
  //   image: '',
  //   network: CHAIN_ID.MATIC,
  //   strat: '0x85037b3abb439a447a93c06e0664043b85ba2f41',
  //   stakeTokenAddress: '0xb394009787c2d0cb5b45d06e401a39648e21d681',
  //   platform: 'BarberShop',
  //   token0: tokens.usdc,
  //   token1: tokens.hair,
  //   isPair: true,
  //   masterchef: {
  //     pid: 8,
  //     address: '0xc6ae34172bb4fc40c49c3f53badebce3bb8e6430',
  //     rewardsPerBlock: 'hairPerBlock',
  //     rewardToken: tokens.hair.address[CHAIN_ID.MATIC],
  //   },
  //   totalFees: 50,
  //   withdrawFee: 0.1,
  //   burning: true,
  //   inactive: true,
  // },
  // {
  //   pid: 4,
  //   image: '',
  //   network: CHAIN_ID.MATIC,
  //   strat: '0x555dcdc52a6be9df8aad954381f0b6a40aba794f',
  //   stakeTokenAddress: '0x100a947f51fa3f1dcdf97f3ae507a72603cae63c',
  //   platform: 'BarberShop',
  //   token0: tokens.hair,
  //   token1: tokens.hair,
  //   isPair: false,
  //   masterchef: {
  //     pid: 0,
  //     address: '0xc6ae34172bb4fc40c49c3f53badebce3bb8e6430',
  //     rewardsPerBlock: 'hairPerBlock',
  //     rewardToken: tokens.hair.address[CHAIN_ID.MATIC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 0.1,
  //   burning: false,
  //   inactive: true,
  // },
  // {
  //   pid: 5,
  //   image: '',
  //   network: CHAIN_ID.MATIC,
  //   strat: '0x6A31e0f9d8aBAB81C3eb36a3630C258202e568E5',
  //   stakeTokenAddress: '0x491c17b1b9aa867f3a7a480baffc0721d59a7393',
  //   platform: 'BarberShop',
  //   token0: tokens.wmatic,
  //   token1: tokens.hair,
  //   isPair: true,
  //   masterchef: {
  //     pid: 1,
  //     address: '0xc6ae34172bb4fc40c49c3f53badebce3bb8e6430',
  //     rewardsPerBlock: 'hairPerBlock',
  //     rewardToken: tokens.hair.address[CHAIN_ID.MATIC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 0.1,
  //   burning: false,
  //   inactive: true,
  // },
  // {
  //   pid: 8,
  //   image: '',
  //   network: CHAIN_ID.MATIC,
  //   strat: '0x838786076dbe610b6f8247f11f4d47e23f10046b',
  //   stakeTokenAddress: '0x6046eb198abc5ea4f17027bc00a2aee0420e84ee',
  //   platform: 'Singular.farm',
  //   token0: tokens.usdc,
  //   token1: tokens.sing,
  //   isPair: true,
  //   masterchef: {
  //     pid: 0,
  //     address: '0x9762fe3ef5502df432de41e7765b0ccc90e02e92',
  //     rewardsPerBlock: 'singPerSec',
  //     rewardToken: tokens.sing.address[CHAIN_ID.MATIC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 0.1,
  //   burning: false,
  //   inactive: true,
  //   rewardsInSeconds: true,
  // },
  // {
  //   pid: 9,
  //   image: '',
  //   network: CHAIN_ID.MATIC,
  //   strat: '0xf661c61b6a49e16baad0755d511124146a1d8acb',
  //   stakeTokenAddress: '0x854d3639f38f65c091664062230091858955ddc2',
  //   platform: 'Singular.farm',
  //   token0: tokens.wmatic,
  //   token1: tokens.sing,
  //   isPair: true,
  //   masterchef: {
  //     pid: 1,
  //     address: '0x9762fe3ef5502df432de41e7765b0ccc90e02e92',
  //     rewardsPerBlock: 'singPerSec',
  //     rewardToken: tokens.sing.address[CHAIN_ID.MATIC],
  //   },
  //   totalFees: 4,
  //   withdrawFee: 0.1,
  //   burning: false,
  //   rewardsInSeconds: true,
  // },
  // {
  //   pid: 11,
  //   image: '',
  //   network: CHAIN_ID.MATIC,
  //   strat: '0xc590280cb9e2c3808eda73866aa951d5a0053ec8',
  //   stakeTokenAddress: '0x854d3639f38f65c091664062230091858955ddc2',
  //   platform: 'Singular.farm',
  //   token0: tokens.wmatic,
  //   token1: tokens.sing,
  //   isPair: true,
  //   masterchef: {
  //     pid: 1,
  //     address: '0x9762fe3ef5502df432de41e7765b0ccc90e02e92',
  //     rewardsPerBlock: 'singPerSec',
  //     rewardToken: tokens.sing.address[CHAIN_ID.MATIC],
  //   },
  //   totalFees: 50,
  //   withdrawFee: 0.1,
  //   burning: true,
  //   rewardsInSeconds: true,
  // },
]

export default vaults
