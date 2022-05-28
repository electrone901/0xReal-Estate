# Project name
Apartment Reviewer

# Description
Apartment Reviewer is a platform to review and track real estate prices in a transparent-decentralized way. Whether you want to make sure you are getting a fair price or to keep track  of an apartment price, house, or retail place, Apartment Reviewer is here to help.

Current or previous tenants can  add a new price or create a review about the apartment. This will help to keep track of the prices, apartment conditions, and the rates of increase/decrease.

Apartment Reviewer App is a crowdsourcing app that helps monitor the real state and avoids companies to bumps apartments prices without a reason.


## Inspiration

The inspiration came from my own experience of looking for aparments in New York City.  I spend so much time going back and forth with the agend asking questions, seeing apartments and then I realized the need for a website that guides you with real accure information from previuos tenents such as prices, conditions, hidden fees and rules.

Apartment Reviewer is a platform to review and track real estate prices in a transparent-decentralized way. Whether you want to make sure you are getting a fair price or to keep track  of an apartment price, house, or retail place, Apartment Reviewer is here to help.

Current or previous tenants can  add a new price or create a review about the apartment. This will help to keep track of the prices, apartment conditions, and the rates of increase/decrease.

Apartment Reviewer App is a crowdsourcing app that helps monitor the real state and avoids companies to bumps apartments prices without a reason.



## What it does
Allows users to add reviews for apartments
Users can add new prices for apartments
Allows users to browse and compare apartments prices
It gives users a more accure picture of an apartment
Users can send or receive tips for sharing their reviews
It provides additional information for potential tenants to make a more inform desiction before singning a lease.
Apartments are represented as NFTs
Easily collect accure information that is available to the public using blockchain technology


## How we built it
We use:
IPFS NFTStorage: stores NFT's image, name, location, prices,reviews and metadata. The way it works is whenever the user is registering a project the information get pass to NFTStorage IPFS then the NFTStorage generates a hash called CID that is stored on the smart contract. The CID will be used to retrieve the NFT's data

Polygon, Matic Network: the network we deployed our app.
Address deployed to: 0x71f5338032576962c55c31ED4cF4688D1a1c6b1A

AVAX Network: the network I deployed the app.

Covalent API for a quick way to fetch and retrieve NFTs and contract transaction history in a sealess way.

NFTPort for multi-chain NFT minting, and data transparency such as distributing rewards and minting the NFT.

Solidity: Solidity was used for the smart contract together with OpenZeppelin ERC721 for faster development of the smart contract
Chainlink Oracle to compare  apartment prices with Chainlink prices.

Hardhat: for local blockchain development

Frontend: React Js for the frontend, Material-UI, and Web3 to connect to the blockchain.

## Challenges we ran into
We learned to work with IPFS NFTStorage and hardhat
## Accomplishments that we're proud of
We are proud of the final MVP

## What we learned
We learned to work with IPFS NFTStorage and hardhat


## What's next for Apartment Reviewer
Post updates
Upon registration, get your own token for an apartment


### Website Demo
- https://apartment-reviwer-app.netlify.app/

### Video Demo
- https://youtu.be/p3OLleBtoh8

# How it's made

Apartment Reviewer application makes use of the following softwares:

- `NFTStorage`for data storage on IPFS that generates a transation hash used to create an NFT of a photo.

- `textile/eth-storage`: facilitated a fast way to store matadata for Garden comunities such: names, loocations, description, images, wallet address, and more. It was perfect for Garden comunities problem case to save their needs on the textile storage.

- `NFTPort` smooth the path of minting and donating NFTs for Garden comunities. This is a win win situation for our Garden comunities because they don't have to pay to contribute or mint NFTs.

- `Pocket Portal` smooth the path of deploying and hussle of paying such a big transactions to deploy our Garden comunitie's contract to a node using the Rinkeby network.

- `Solidity` for the smart contract.

- `OpenZeppelin ERC721` we use the ERC721 template for a faster development of the PetGram smart contract.

- `Ganache` for local blockchain development.

- `Rinkeby Network` the network that we deployed our dApp.

- `React Js, Material-ui, Web3` React Js for the frontend, Material-ui and Web3 to connect to blockchain.








# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.



 ## Notes
- npx create-react-app realEstate
- npx hardhat init, basic project, deploy
 `to deploy`
 npx hardhat run scripts/sample-script.js --network matic
 npx hardhat run ./scripts/deploy.ts --network localhost
 - connect fronent to MetaMask wallet

 #  deployed Address
 Greeter deployed to: 0x041F31A5F4BF8e06EC22E36cDE29B22c5c4A4B97

# Basic Sample Hardhat Project
This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
