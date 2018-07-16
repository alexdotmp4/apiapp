import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Routes, Navbar } from './components'
import { withRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='f1 avenir center pt4'>Keeping Up through the World Cup</div>
        <div className='f3 avenir center pa3'>Explore the news in each of the top eight countries in the World Cup.</div>
        <Navbar />
        <Routes />
      </div>
    );
  }
}

const mapState = (state) => ({ articles: state.articles })

export default withRouter(connect(mapState)(App));

// Maybe refactor this to be functional?
