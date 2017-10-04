![Wishcoin on Github](https://wishcoin.io/uploads/ext/services/github/wishcoin-github-header.jpg "Wishcoin on Github")

# Wishcoin Smart Contract

Wishcoin's Ethereum ERC20-compliant Smart Contract

## Getting Started

This introduction and set of instructions will allow you to clone the project onto your local machine in order to assist with development, and running tests on the contract. Wishcoin is based and built on the foundations of credibility and transparency. We aim to provide excellent support and communication, for more information please visit: http://wishcoin.io
The Wishcoin Smart Contract has been developed and distributed in order to meet the needs of the Whitepaper, located at http://wishcoin.io
 

### Prerequisites

These are the steps you need to take before cloning this project, in order to be able to test and run the Wishcoin smart contract on your own lcoal system.

##### Install NPM (RedHat)
`sudo apt-get install npm`

##### or Install NPM (Debian)
`sudo yum instsall npm`

##### Install Truffle
`sudo npm install -g truffle`

##### Install TestRPC
`sudo npm install -g ethereumjs-testrpc`

##### Update NodeJS (RedHat)
`sudo apt-get node update`

##### Update NodeJS (Debian)
`sudo yum node update`

### Cloning Wishcoin
Simply clone Wishcoin to your local environment using:
`git clone https://github.com/wishcoinio/wishcoin-contract.git`

Simply run `npm install` within your chosen directory in order to install the required Wishcoin dependencies into your project folder.

## Running the tests
Wishcoin is shipped ready to be tested. Simply add ERC20-standard .JS or .SOL tests into the **./tests** directory then run `npm test`. The tests will run and output to the console.

## Deployment
In order to deploy a contract similar to this one, feel free to reach out to us on Twitter for help and support: https://twitter.com/wishcoinio

## Interacting with Wishcoin - Functions
##### name()
 > A call to retrieve the name of the currency (Wishcoin)

##### approve()
 > A transaction which approves a third party spender an allowance

##### totalSupply()
 > A call to retrieve the current total supply of Wishcoin's in circulation

##### transferFrom()
 > A transaction which moves Wishcoin's from one balance to another [with approval via approve()]

##### decimals()
 > A call to retrieve the decimal formatting of Wishcoin (8 decimals)

##### decreaseApproval()
 > A transaction which reduces the allowance of an approved third party spender

##### balanceOf()
 > A call to retrieve the balance of the specified Wishcoin wallet address

##### owner()
 > A call to retrieve the address of the current owner of the Wishcoin smart contract (this will be the Wishcoin Foundation)

##### symbol()
 > A call to retrieve the symbol of the currency (WCN)

##### getLastYearOfInflation()
 > A call to retrieve the last year in which inflation was run on the currency

##### transfer()
 > A transaction which sends Wishcoin's to another address

##### runAnnualInflation()
 > A transaction which runs the annual inflation of the coin - this can only be run once a year after 10 years

##### increaseApproval()
 > A transaction which increases the allowance of an approved third party spender

##### allowance()
 > A call to retrieve the current allowance of an approved third party spender

##### transferOwnership()
 > A transaction which can only be run by the owner, to transfer ownership of the Wishcoin contract to another owner

## Built With

* [Truffle](http://truffleframework.com/) - Development framework for Ethereum
* [Node](https://nodejs.org/) - JavaScript runtime
* [Ethereum](https://ethereum.org/) - Blockchain App Platform
* [OpenZeppelin](https://openzeppelin.org/) - Secure Smart Contract Framework

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
