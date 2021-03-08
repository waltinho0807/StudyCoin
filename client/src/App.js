import React, { Component } from "react";
import StudyCoin from "./contracts/StudyCoin.json";
import getWeb3 from "./getWeb3";
import { Container } from "semantic-ui-react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from './components/Footer/Footer';


import HomeScreen from "./screens/HomeScreen";
import SobreScreen from "./screens/SobreScreen";
import SellScreen from "./screens/SellScreen";


import "./App.css";

class App extends Component {
  state = { loaded: false };

  componentDidMount = async () => {
    try {
      
      this.web3 = await getWeb3();

     
      this.accounts = await this.web3.eth.getAccounts();

      
      this.networkId = await this.web3.eth.net.getId();
      console.log(this.networkId)
      this.instance = new this.web3.eth.Contract(
        StudyCoin.abi,
        StudyCoin.networks[this.networkId] && StudyCoin.networks[this.networkId].address,
      );
      
      this.listSeller = await this.instance.methods.completList().call();
      console.log(this.listSeller)
      
      this.setState({ loaded: true });
    } catch (error) {
      
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };





  render() {
    if (!this.state.loaded) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <Header />
        <Container>
          <BrowserRouter>
            <Banner />

            <main>

              <Route
                path="/"
                render={(props) => <HomeScreen {...props}
                  web3={this.web3}
                  accounts={this.accounts}
                  instance={this.instance} />}
                exact />

              <Route
                path="/vender"
                render={(props) => <SellScreen {...props}
                  web3={this.web3}
                  accounts={this.accounts}
                  instance={this.instance}
                  listSeller={this.listSeller}
                  />}
                exact />

              <Route path="/sobre" component={SobreScreen} />
              

            </main>
          </BrowserRouter>


        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
