import React, { Component } from 'react'

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
			<Coffeelist />
      </>
    )
  }
}

export default App