import { Ifo } from './types'

const ifos: Ifo[] = [
  {
    id: 'dragonary',
    address: '', // Leave empty for "Coming Soon!"
    isActive: true,
    name: 'Dragonary',
    subTitle: 'Decentralized NFT Gaming',
    description: `Dragonary is a brand new game being developed by CoinaryTV for Desktop, iPhone, and Android, where users can play to earn in-game currency. You can collect, trade, and breed various dragon NFTs and battle against the game or other players to win!`,
    launchDate: 'August 7nd',
    launchTime: '16:00 UTC',
    saleAmount: '60,000,000 CYT',
    raiseAmount: '$600,000',
    vestingTime: '3 Months',
    projectSiteUrl: 'https://dragonary.com/',
    currency: 'BNB',
    currencyAddress: '0x0000000000000000000000000000000000000000',
    tokenDecimals: 18,
    releaseBlockNumber: 9695131, // block to start showing contract details
    vesting: true,
    // burnedTxUrl: '',
  },
  {
    id: 'astronaut',
    address: '0xd7e98ca54e6202fb6237b98c881817ed3e54d2ed',
    isActive: false,
    name: 'Astronaut',
    subTitle: 'Decentralized hybrid yield token platform. Built on the Binance Smart Chain',
    description:
      'Protocol built for token pools and auctions enabling projects to raise capital on a decentralized and interoperable environment. Enabling the way your ideas raise capital.',
    launchDate: 'Mar. 15',
    launchTime: '11PM EDT',
    saleAmount: '2,000,000 NAUT',
    raiseAmount: '$400,000',
    bananaToBurn: '$200,000',
    projectSiteUrl: 'https://astronaut.to/',
    currency: 'BANANA-BNB LP',
    currencyAddress: '0xf65c1c0478efde3c19b49ecbe7acc57bb6b1d713',
    tokenDecimals: 8,
    releaseBlockNumber: 5685490,
    burnedTxUrl: 'https://bscscan.com/tx/0xbcfe28f2552d53f3cb49f37d6001aa7708070d3d17f75652c5096b7ecb4ce8fa',
  },
  {
    id: 'jediyield',
    address: '0xCBe256573185d767EfD4a797CB360880728B8fD8',
    isActive: false,
    name: 'Jedi Yield',
    subTitle: 'The only app you need for all your yield farming needs',
    description:
      'Smart portal built to increase convenience and security for BSC yield farmers. Users can freely stake and/or unstake their funds regardless of the accessibility to their favorite yield farming websites. Moreover, users can monitor their portfolios, look at token graphs, and harvest their farms all in one page',
    launchDate: 'Apr. 2',
    launchTime: '03:00 UTC',
    saleAmount: '7,000,000 JDI',
    raiseAmount: '$700,000',
    bananaToBurn: '$350,000',
    projectSiteUrl: 'https://jdiyield.com/',
    currency: 'BANANA-BNB LP',
    currencyAddress: '0xf65c1c0478efde3c19b49ecbe7acc57bb6b1d713',
    tokenDecimals: 18,
    releaseBlockNumber: 6044304,
    burnedTxUrl: 'https://bscscan.com/tx/0x5f65d5ce713e115be0646c473688aa052c98896f49d9c0c09ecd13aa8d459a1e',
  },
  {
    id: 'bitfresh',
    address: '0x898aaD14CBebA249D4eEdC9bd22D9B533F0DDf73',
    isActive: false,
    name: 'Bitfresh',
    subTitle: 'The first community-driven iGaming platform where everyone wins.',
    description:
      'Bitfresh is a blockchain-based community driven social iGaming experience that pays dividends to players and token holders. The platform is filled with reward systems to give players many ways to win and earn over time.',
    launchDate: 'Apr. 24',
    launchTime: '03:00 UTC',
    saleAmount: '100,000,000 BFT',
    raiseAmount: '$1,000,000',
    bananaToBurn: '$500,000',
    projectSiteUrl: 'https://www.bitfresh.win/public-sale',
    currency: 'BANANA-BNB LP',
    currencyAddress: '0xf65c1c0478efde3c19b49ecbe7acc57bb6b1d713',
    tokenDecimals: 18,
    releaseBlockNumber: 6565331,
    burnedTxUrl: 'https://bscscan.com/tx/0x938454e722fdef0a2f34b16f16bed50f6deb692b942331a9a6e2cf96977e116b',
  },
  {
    id: 'aperocket',
    address: '0x8AC93DC2F83cEf4032FbC71070Dc5Af06fd9D105',
    isActive: false,
    name: 'ApeRocket',
    subTitle: 'DeFi yield farming aggregator and optimizer for Binance Smart Chain.',
    description:
      'ApeRocket Finance is a suite of products in Decentralized Finance (DeFi) that provides yield optimization strategies through the Binance Smart Chain, using ApeSwap liquidity.',
    launchDate: 'May. 25',
    launchTime: '03:00 UTC',
    saleAmount: ' 55,556 SPACE',
    raiseAmount: '$500,000',
    projectSiteUrl: 'https://aperocket.finance',
    currency: 'BNB',
    currencyAddress: '0x0000000000000000000000000000000000000000',
    tokenDecimals: 18,
    releaseBlockNumber: 7378325,
    // burnedTxUrl: 'https://bscscan.com/tx/0x938454e722fdef0a2f34b16f16bed50f6deb692b942331a9a6e2cf96977e116b',
  },
  {
    id: 'hifi',
    // address: '0xF9F1B0945A31FB2Ea429014e58fCA47dAEee4743', // Leave empty for "Coming Soon!"
    address: '0x4D5e1E722e9280d44C564ef3FC14E0B03a50ad47', // IAO Aux contract!"
    isActive: false,
    name: 'Hifi',
    subTitle: 'Decentralized retro gaming ecosystem.',
    description:
      'HiFi is a decentralized retro gaming ecosystem driven by its community. It uses staking and gameplay mining participation rewards to create a completely new DeFi gaming experience.',
    launchDate: 'June 11',
    launchTime: '03:00 UTC',
    saleAmount: '120,000,000 HIFI',
    raiseAmount: '$600,000',
    projectSiteUrl: 'https://hifigamingsociety.com/',
    currency: 'BNB',
    currencyAddress: '0x0000000000000000000000000000000000000000',
    tokenDecimals: 18,
    releaseBlockNumber: 8135430, // block to start showing contract details
    // burnedTxUrl: '',
  },
  {
    id: 'bishares',
    address: '0x5B31A7124A4Abf8CA9B4090532A669783d8E11eE', // Leave empty for "Coming Soon!"
    isActive: false,
    name: 'BiShares',
    subTitle: 'Decentralized Index Funds',
    description: `BiShares is BSC's first Index Funds for safely diversifying across crypto assets. Use BNB to purchase a wide basket of assets and gain exposure to the broader crypto market. Never miss out on another moon again!`,
    launchDate: 'July 9th',
    launchTime: '03:00 UTC',
    saleAmount: '128571 BISON',
    raiseAmount: '$450,000',
    projectSiteUrl: 'https://bishares.finance/',
    currency: 'BNB',
    currencyAddress: '0x0000000000000000000000000000000000000000',
    tokenDecimals: 18,
    releaseBlockNumber: 8993971, // block to start showing contract details
    // burnedTxUrl: '',
  },
]

export default ifos
