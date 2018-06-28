<template>
  <div class="about">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Carboneum Crowdsale stat
          </h1>
          <h2 class="subtitle">
            is not official from Carboneum project
          </h2>
        </div>
      </div>
    </section>

    <section>

        <b-message title="Note" size="is-medium">
            Crowdsale stats come from ethereum smart contract at <a class="link" href='https://etherscan.io/address/0x88b6d8d018118f6da4842Fae44D39E2bc52B75Aa'>0x88b6d8d018118f6da4842Fae44D39E2bc52B75Aa</a>.
            <br />
            Keep in mind that all stats here are not includ private/pre crowdsale.
            <br />
            <br />
            We use <a href='https://infura.io/'>infura</a> public ethereum node with <a href='https://github.com/ethereum/web3.js/'>web3</a> framework for rendering stats in your browser.
        </b-message>

        <b-message title="Open source" size="is-medium">
            <a class="link" href='https://github.com/kulapio/CarboneumCrowdsaleStat'>https://github.com/kulapio/CarboneumCrowdsaleStat</a>
            <br />
            <br />
            ** Please make PR if you're a developer ^_^.
        </b-message>

        <b-message title="Power by" size="is-medium">
            <a href='http://kulap.io'>KULAP.io</a> team, The Best Rate Decentralized Exchange.
        </b-message>

    </section>
  </div>
</template>

<script>

export default {
  name: 'About'
}
</script>

<style>
.media-content {
  width: 100%;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
}
.link {
  display:inline-block;
  width:100%;
  white-space: nowrap;
  overflow:hidden;
  text-overflow: ellipsis;
}
</style>
