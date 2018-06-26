<template>
  <div class="crowdsale_stat">

    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          ETH Buy Stats
        </h1>
        <h2 class="subtitle">
          
        </h2>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Participants</p>
          <p class="subtitle">{{ ethBuyParticipants }}</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">ETH</p>
          <p class="subtitle">{{ ethBuyEthTotal }}</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">USD</p>
          <p class="subtitle">{{ ethBuyUsdTotal }}</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">C8</p>
          <p class="subtitle">{{ ethBuyC8Total }}</p>
        </article>
      </div>
    </div>



    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          ICON Buy Stats
        </h1>
        <h2 class="subtitle">
          
        </h2>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Participants</p>
          <p class="subtitle">{{ iconBuyParticipants }}</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">ICON</p>
          <p class="subtitle">{{ iconBuyIconTotal }}</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">USD</p>
          <p class="subtitle">{{ iconBuyUsdTotal }}</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">C8</p>
          <p class="subtitle">{{ iconBuyC8Total }}</p>
        </article>
      </div>
    </div>

    <div class="container">
      <div class="notification">
        power by <strong><a href='https://kulap.io/'>kulap.io</a></strong>
      </div>
    </div>

  </div>
</template>

<script>
import Web3 from 'web3'
import formatCurrency from 'format-currency'

export default {
  name: 'CrowdsaleStat',
  data () {
    return {
      msg: 'Carboneum Crowdsale Stat',
      propText: 'Hello',
      web3: '',

      // Usd Rate
      ethUsdRate: 452.50,
      iconUsdRate: 1.62,

      // Carbonium ETH Buy
      ethBuyParticipants: '-',
      ethBuyEthTotal: '-',
      ethBuyUsdTotal: '-',
      ethBuyC8Total: '-',

      // Carbonium ICON Buy
      iconBuyParticipants: '-',
      iconBuyIconTotal: '-',
      iconBuyUsdTotal: '-',
      iconBuyC8Total: '-',

      crowdsaleAbi: [
        {
          'constant': true,
          'inputs': [],
          'name': 'hasClosed',
          'outputs': [
            {
              'name': '',
              'type': 'bool'
            }
          ],
          'payable': false,
          'stateMutability': 'view',
          'type': 'function'
        },
        {
          'constant': true,
          'inputs': [],
          'name': 'rate',
          'outputs': [
            {
              'name': '',
              'type': 'uint256'
            }
          ],
          'payable': false,
          'stateMutability': 'view',
          'type': 'function'
        },
        {
          'constant': false,
          'inputs': [
            {
              'name': '_rate',
              'type': 'uint256'
            }
          ],
          'name': 'setRate',
          'outputs': [],
          'payable': false,
          'stateMutability': 'nonpayable',
          'type': 'function'
        },
        {
          'constant': true,
          'inputs': [],
          'name': 'cap',
          'outputs': [
            {
              'name': '',
              'type': 'uint256'
            }
          ],
          'payable': false,
          'stateMutability': 'view',
          'type': 'function'
        },
        {
          'constant': true,
          'inputs': [],
          'name': 'weiRaised',
          'outputs': [
            {
              'name': '',
              'type': 'uint256'
            }
          ],
          'payable': false,
          'stateMutability': 'view',
          'type': 'function'
        },
        {
          'constant': true,
          'inputs': [
            {
              'name': '',
              'type': 'address'
            }
          ],
          'name': 'contributions',
          'outputs': [
            {
              'name': '',
              'type': 'uint256'
            }
          ],
          'payable': false,
          'stateMutability': 'view',
          'type': 'function'
        },
        {
          'constant': true,
          'inputs': [],
          'name': 'closingTime',
          'outputs': [
            {
              'name': '',
              'type': 'uint256'
            }
          ],
          'payable': false,
          'stateMutability': 'view',
          'type': 'function'
        },
        {
          'constant': true,
          'inputs': [],
          'name': 'capReached',
          'outputs': [
            {
              'name': '',
              'type': 'bool'
            }
          ],
          'payable': false,
          'stateMutability': 'view',
          'type': 'function'
        },
        {
          'constant': true,
          'inputs': [],
          'name': 'wallet',
          'outputs': [
            {
              'name': '',
              'type': 'address'
            }
          ],
          'payable': false,
          'stateMutability': 'view',
          'type': 'function'
        },
        {
          'constant': true,
          'inputs': [
            {
              'name': '',
              'type': 'address'
            }
          ],
          'name': 'caps',
          'outputs': [
            {
              'name': '',
              'type': 'uint256'
            }
          ],
          'payable': false,
          'stateMutability': 'view',
          'type': 'function'
        },
        {
          'constant': true,
          'inputs': [],
          'name': 'iconToken',
          'outputs': [
            {
              'name': '',
              'type': 'address'
            }
          ],
          'payable': false,
          'stateMutability': 'view',
          'type': 'function'
        },
        {
          'constant': false,
          'inputs': [
            {
              'name': '_beneficiary',
              'type': 'address'
            },
            {
              'name': '_iconAmount',
              'type': 'uint256'
            }
          ],
          'name': 'buyTokensWithIcon',
          'outputs': [],
          'payable': false,
          'stateMutability': 'nonpayable',
          'type': 'function'
        },
        {
          'constant': false,
          'inputs': [
            {
              'name': '_iconRate',
              'type': 'uint256'
            }
          ],
          'name': 'setIconRate',
          'outputs': [],
          'payable': false,
          'stateMutability': 'nonpayable',
          'type': 'function'
        },
        {
          'constant': true,
          'inputs': [
            {
              'name': '_beneficiary',
              'type': 'address'
            }
          ],
          'name': 'getUserCap',
          'outputs': [
            {
              'name': '',
              'type': 'uint256'
            }
          ],
          'payable': false,
          'stateMutability': 'view',
          'type': 'function'
        },
        {
          'constant': true,
          'inputs': [],
          'name': 'owner',
          'outputs': [
            {
              'name': '',
              'type': 'address'
            }
          ],
          'payable': false,
          'stateMutability': 'view',
          'type': 'function'
        },
        {
          'constant': false,
          'inputs': [
            {
              'name': '_beneficiaries',
              'type': 'address[]'
            },
            {
              'name': '_cap',
              'type': 'uint256'
            }
          ],
          'name': 'setGroupCap',
          'outputs': [],
          'payable': false,
          'stateMutability': 'nonpayable',
          'type': 'function'
        },
        {
          'constant': true,
          'inputs': [],
          'name': 'openingTime',
          'outputs': [
            {
              'name': '',
              'type': 'uint256'
            }
          ],
          'payable': false,
          'stateMutability': 'view',
          'type': 'function'
        },
        {
          'constant': true,
          'inputs': [
            {
              'name': '_beneficiary',
              'type': 'address'
            }
          ],
          'name': 'getUserContribution',
          'outputs': [
            {
              'name': '',
              'type': 'uint256'
            }
          ],
          'payable': false,
          'stateMutability': 'view',
          'type': 'function'
        },
        {
          'constant': true,
          'inputs': [],
          'name': 'remainingTokens',
          'outputs': [
            {
              'name': '',
              'type': 'uint256'
            }
          ],
          'payable': false,
          'stateMutability': 'view',
          'type': 'function'
        },
        {
          'constant': true,
          'inputs': [],
          'name': 'tokenWallet',
          'outputs': [
            {
              'name': '',
              'type': 'address'
            }
          ],
          'payable': false,
          'stateMutability': 'view',
          'type': 'function'
        },
        {
          'constant': true,
          'inputs': [],
          'name': 'iconRate',
          'outputs': [
            {
              'name': '',
              'type': 'uint256'
            }
          ],
          'payable': false,
          'stateMutability': 'view',
          'type': 'function'
        },
        {
          'constant': false,
          'inputs': [
            {
              'name': '_beneficiary',
              'type': 'address'
            },
            {
              'name': '_cap',
              'type': 'uint256'
            }
          ],
          'name': 'setUserCap',
          'outputs': [],
          'payable': false,
          'stateMutability': 'nonpayable',
          'type': 'function'
        },
        {
          'constant': false,
          'inputs': [
            {
              'name': '_beneficiary',
              'type': 'address'
            }
          ],
          'name': 'buyTokens',
          'outputs': [],
          'payable': true,
          'stateMutability': 'payable',
          'type': 'function'
        },
        {
          'constant': false,
          'inputs': [
            {
              'name': 'newOwner',
              'type': 'address'
            }
          ],
          'name': 'transferOwnership',
          'outputs': [],
          'payable': false,
          'stateMutability': 'nonpayable',
          'type': 'function'
        },
        {
          'constant': true,
          'inputs': [],
          'name': 'token',
          'outputs': [
            {
              'name': '',
              'type': 'address'
            }
          ],
          'payable': false,
          'stateMutability': 'view',
          'type': 'function'
        },
        {
          'inputs': [
            {
              'name': '_openingTime',
              'type': 'uint256'
            },
            {
              'name': '_closingTime',
              'type': 'uint256'
            },
            {
              'name': '_rate',
              'type': 'uint256'
            },
            {
              'name': '_iconRate',
              'type': 'uint256'
            },
            {
              'name': '_tokenWallet',
              'type': 'address'
            },
            {
              'name': '_fundWallet',
              'type': 'address'
            },
            {
              'name': '_cap',
              'type': 'uint256'
            },
            {
              'name': '_token',
              'type': 'address'
            },
            {
              'name': '_iconToken',
              'type': 'address'
            }
          ],
          'payable': false,
          'stateMutability': 'nonpayable',
          'type': 'constructor'
        },
        {
          'payable': true,
          'stateMutability': 'payable',
          'type': 'fallback'
        },
        {
          'anonymous': false,
          'inputs': [
            {
              'indexed': true,
              'name': 'purchaser',
              'type': 'address'
            },
            {
              'indexed': true,
              'name': 'beneficiary',
              'type': 'address'
            },
            {
              'indexed': false,
              'name': 'value',
              'type': 'uint256'
            },
            {
              'indexed': false,
              'name': 'amount',
              'type': 'uint256'
            }
          ],
          'name': 'TokenPurchaseWithIcon',
          'type': 'event'
        },
        {
          'anonymous': false,
          'inputs': [
            {
              'indexed': true,
              'name': 'previousOwner',
              'type': 'address'
            },
            {
              'indexed': true,
              'name': 'newOwner',
              'type': 'address'
            }
          ],
          'name': 'OwnershipTransferred',
          'type': 'event'
        },
        {
          'anonymous': false,
          'inputs': [
            {
              'indexed': true,
              'name': 'purchaser',
              'type': 'address'
            },
            {
              'indexed': true,
              'name': 'beneficiary',
              'type': 'address'
            },
            {
              'indexed': false,
              'name': 'value',
              'type': 'uint256'
            },
            {
              'indexed': false,
              'name': 'amount',
              'type': 'uint256'
            }
          ],
          'name': 'TokenPurchase',
          'type': 'event'
        }
      ],
      crowdsaleContractAddr: '0x88b6d8d018118f6da4842Fae44D39E2bc52B75Aa'
    }
  },
  created: function () {
    this.initWeb3()
    this.getEthBuyHistory()
    this.getIconBuyHistory()
  },
  methods: {
    printobj (result) {
      const util = require('util')
      return util.inspect(result, false, null)
    },
    updateProp () {
      fetch('https://swapi.co/api/people/1').then(data => {
        // console.log(data)
        this.propText = this.printobj(data.text())
      })
    },
    initWeb3 () {
      this.web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/8kkr6X3gKuB8cURFQsfa'))
    },
    getVersion () {
      // console.log(this.web3.version)
    },
    getCarboniumCrowdsaleContract () {
      let contract = new this.web3.eth.Contract(this.crowdsaleAbi, this.crowdsaleContractAddr)
      return contract
    },
    // getCarboniumRate () {
    //   let contract = this.getCarboniumCrowdsaleContract()
    //   contract.methods.rate().call().then(console.log)
    // },
    getEthBuyHistory () {
      let fromBlockHeight = 5816274
      let toBlock = 'latest'
      let contract = this.getCarboniumCrowdsaleContract()
      contract.getPastEvents('TokenPurchase', {
        // filter: {_trader: userAddress},
        filter: {}, // Using an array means OR: e.g. 20 or 23
        fromBlock: fromBlockHeight,
        toBlock: toBlock
        // toBlock: 'latest'
      })
        .then(function (events) {
          let outputs = []

          for (var i = 0; i < events.length; i++) {
            let event = events[i]

            // let purchaser = event.returnValues.purchaser
            // let beneficiary = event.returnValues.beneficiary
            // let value = event.returnValues.value
            // let amount = event.returnValues.amount

            // console.log('purchaser: ' + purchaser)
            // console.log('beneficiary: ' + beneficiary)
            // console.log('value: ' + value)
            // console.log('amount: ' + amount)

            // let address = event.address;
            // let blockHash = event.blockHash;
            // let blockNumber = event.blockNumber;
            // let transactionHash = event.transactionHash;
            outputs.push(event.returnValues)
          }

          return outputs
        })
        .then(buyers => {
          this.ethBuyParticipants = buyers.length

          // Total Ether
          let totalEth = buyers.reduce((accumulator, buyer) => {
            return accumulator + parseInt(buyer.value)
          }, 0)
          let totalEthHumanAmount = totalEth / 10 ** 18
          let opts = { format: '%v %c', code: '', maxFraction: 2 }

          this.ethBuyEthTotal = formatCurrency(totalEthHumanAmount, opts)
          // Usd
          this.ethBuyUsdTotal = formatCurrency(totalEthHumanAmount * this.ethUsdRate, opts)

          // Total C8
          let totalC8 = buyers.reduce((accumulator, buyer) => {
            return accumulator + parseInt(buyer.amount)
          }, 0)
          this.ethBuyC8Total = formatCurrency(totalC8 / 10 ** 18, opts)
        })
    },
    getIconBuyHistory () {
      let fromBlockHeight = 5816274
      let toBlock = 'latest'
      let contract = this.getCarboniumCrowdsaleContract()
      contract.getPastEvents('TokenPurchaseWithIcon', {
        // filter: {_trader: userAddress},
        filter: {}, // Using an array means OR: e.g. 20 or 23
        fromBlock: fromBlockHeight,
        toBlock: toBlock
        // toBlock: 'latest'
      })
        .then(function (events) {
          let outputs = []

          for (var i = 0; i < events.length; i++) {
            let event = events[i]

            // let purchaser = event.returnValues.purchaser
            // let beneficiary = event.returnValues.beneficiary
            // let value = event.returnValues.value
            // let amount = event.returnValues.amount

            // console.log('purchaser: ' + purchaser)
            // console.log('beneficiary: ' + beneficiary)
            // console.log('value: ' + value)
            // console.log('amount: ' + amount)

            // let address = event.address;
            // let blockHash = event.blockHash;
            // let blockNumber = event.blockNumber;
            // let transactionHash = event.transacionHash;
            outputs.push(event.returnValues)
          }

          return outputs
        })
        .then(buyers => {
          this.iconBuyParticipants = buyers.length

          // Total Icon
          let totalIcon = buyers.reduce((accumulator, buyer) => {
            return accumulator + parseInt(buyer.value)
          }, 0)
          let totalIconHumanAmount = totalIcon / 10 ** 18
          let opts = { format: '%v %c', code: '', maxFraction: 2 }

          this.iconBuyIconTotal = formatCurrency(totalIconHumanAmount, opts)
          // Usd
          this.iconBuyUsdTotal = formatCurrency(totalIconHumanAmount * this.iconUsdRate, opts)

          // Total C8
          let totalC8 = buyers.reduce((accumulator, buyer) => {
            return accumulator + parseInt(buyer.amount)
          }, 0)
          this.iconBuyC8Total = formatCurrency(totalC8 / 10 ** 18, opts)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
