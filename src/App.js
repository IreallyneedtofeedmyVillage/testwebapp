import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Web3 from 'web3'
import Navbar from './Navbar'


class App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '600px' }}>
              <div className="content mr-auto ml-auto">
                <a
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                </a>

                new mseagge

              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
