<template>
  <div>
    <div class="list-wrapper">
      <div class="repo-img">
        <a
          href="https://github.com/servosdesign/servos-marketplace"
          target="_blank"
          rel="noopener noreferrer"
        ><img
          class="design2"
          src="../assets/images/nft-marketplace.png"
          alt=""
        ></a>
      </div>

      <div class="list-description">
        <h2>Servos Marketplace</h2>
        <p>
          An Ethereum based NFT marketplace application (dApp) made with React, Solidity, Truffle, and web3.js which allows the user to view and / or purchase ERC721 NFTs from among the marketplace items. User log in with their ether wallet address and have access to purchase Solidty / Truffle generated ERC721 NFT s made on the Rinkeby's development network. Featuring custom artwork made by yours truly.
        </p>
        <h3>Solidity, Truffle, web3.js, React</h3>
        <div class="repo-button">
          <a
            class="example_c"
            href="https://github.com/servosdesign/servos-marketplace"
            target="_blank"
            rel="nofollow noopener"
          > <h4>GitHub</h4></a>
        </div>
      </div>
    </div>

    <div class="list-wrapper">
      <div class="list-description">
        <h2>Servos Clothing</h2>
        <p>
          Servos Clothing is a fully functional E-commerce app with Redux, Hooks, Stripe, and Firebase which utilizes user authentication,persistence + session storage, back-end shop data, cart management, payments, and more. Add items to cart, sign into a database, save session items per user, etc. This was my first full stack project.
        </p>
        <h3>React, Redux, Stripe, Firebase</h3>
        <div class="repo-button">
          <a
            class="example_c"
            href="https://github.com/servosdesign/servos-clothing"
            target="_blank"
            rel="nofollow noopener"
          > <h4>GitHub</h4></a>
        </div>
      </div>
      <div class="repo-img">
        <a
          href="https://github.com/servosdesign/servos-clothing"
          target="_blank"
          rel="noopener noreferrer"
        ><img
          class="design2"
          src="../assets/images/servclothing.png"
          alt=""
        ></a>
      </div>
    </div>

    <div class="list-wrapper">
      <div class="repo-img">
        <a
          href="https://github.com/servosdesign/crypto-watchlist"
          target="_blank"
          rel="noopener noreferrer"
        ><img
          class="design2"
          src="../assets/images/cryptowatchlist.png"
          alt=""
        ></a>
      </div>

      <div class="list-description">
        <h2>Crypto Watchlist</h2>
        <p>
          Crypto Watchlist is a Cryptocurrency App, powered by RapidAPI, Chart.js, and Redux, which shows top cryptocurrencies, news updates, and exchange data. This app takes use of thing like fetching data from an api, changing chart data, and updated news feeds for highlighted values. Users can search from top 100 coins and filter through results to find their choice.
        </p>
        <h3>React, Redux, Chart.js, RapidAPI</h3>
        <div class="repo-button">
          <a
            class="example_c"
            href="https://github.com/servosdesign/crypto-watchlist"
            target="_blank"
            rel="nofollow noopener"
          > <h4>GitHub</h4></a>
        </div>
      </div>
    </div>

    <div class="list-wrapper">
      <div class="list-description">
        <h2>SERV ORDER</h2>
        <p>
          A food ordering app, powered by Context API, Hooks, and Styled Components, which allows the user to add, remove, and checkout food orders. This app focuses on lean component building, minimalist styling, and the use of reducer hooks. Serv Order is a look into the management  of cart objects.
        </p>
        <h3>REACT, CONTEXT API, STYLED COMPONENTS, HOOKS</h3>
        <div class="repo-button">
          <a
            class="example_c"
            href="https://github.com/servosdesign/serv-order"
            target="_blank"
            rel="nofollow noopener"
          > <h4>GitHub</h4></a>
        </div>
      </div>
      <div class="repo-img">
        <a
          href="https://github.com/servosdesign/serv-order"
          target="_blank"
          rel="noopener noreferrer"
        ><img
          class="design2"
          src="../assets/images/servorder.png"
          alt=""
        ></a>
      </div>
    </div>

    <div class="list-wrapper">
      <div class="repo-img">
        <a
          href="https://github.com/servosdesign/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        ><img
          class="design2"
          src="../assets/images/portfolio.png"
          alt=""
        ></a>
      </div>

      <div class="list-description">
        <h2>PORTFOLIO</h2>
        <p>
          A custom create portfolio made and updating periodically with new projects, music, and designs. The portfolio has a minimal look and feel. I wanted majority of information to be availiable within one page. The design is entirely unique to my personal tastes in web design.
        </p>
        <h3>HTML, CSS, JAVASCRIPT, PHP, PORTFOLIO</h3>
        <div class="repo-button">
          <a
            class="example_c"
            href="https://github.com/servosdesign/portfolio"
            target="_blank"
            rel="nofollow noopener"
          > <h4>GitHub</h4></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-wrapper {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}

.repo-img{
  box-shadow: 0px 3px 4px -3px #000000;
  width: 562px;
}

.repo-img img{
  height: 100%;
  width: 100%;
  padding: 0px 0px 0px 0px;
}

.repo-img:hover{
  box-shadow: 0px 3px 8px -3px #000000;
  transition: .5s ease;
}

.list-description{
  width: 562px;
  height: 562px;
  padding-top: 0;
}

.list-description h2 {
  text-align: left;
  width: 50%;
  font-family: Wan;
  height: 10px;
  letter-spacing: 4px;
  color: black;
  line-height: 10px;
  font-size: 9px;
  text-transform: uppercase;
  padding: 200px 0px 0px 50px;
  margin: 0;
}

.list-description h3 {
  text-align: left;
  order: 0;
  width: 100%;
  font-family: Wan;
  height: 10px;
  letter-spacing: 4px;
  color: black;
  line-height: 10px;
  font-size: 5px;
  text-transform: uppercase;
  text-transform: bold;
  padding: 10px 0px 0px 50px;
}

.list-description p {
  text-align: left;
  margin: 0;
  width: 80%;
  font-family: Play-Regular;
  letter-spacing: 0px;
  color: black;
  line-height: 20px;
  font-size: 10px;
  text-transform: none;
  padding: 15px 0px 0px 50px;
}

.repo-button{
  position: left;
  display: inline-block;
  padding-top: 12px;
  padding-left: 50px;
}

h4 {
  margin: 0;
}

.example_c {
    font-family: Wan;
    letter-spacing: 1px;
    color: black;
    line-height: 7px;
    font-size: 9px;
    height: 7px;
    text-transform: none;
    text-decoration: none;
    background: #ffffff;
    padding: 4px;
    border: 1px solid #000000 !important;
    display: inline-block;
    transition: all 0.4s ease 0s;
  }

  .example_c:hover {
    color: #ffffff !important;
    background: #d64343;
    border-color: #d64343 !important;
    transition: all 0.4s ease 0s;
  }
</style>
