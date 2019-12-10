import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";
import Home from './components/homepage/home'

import GlobalStyle from './styles/Global';
import Coffeelist from './components/Coffeelist';

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <>
			<section>
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />
			</section>
			<Home />
			<Coffeelist />
      </>
    )
  }
}

export default App