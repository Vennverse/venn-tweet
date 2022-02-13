import React, { Component } from 'react';
import Identicon from 'identicon.js';


class Navbar extends Component {

  render() {
    return (
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
      <a class="navbar-brand" href="/">
      <img src="https://bafybeiettcgogfvc64d7d7kssxu7sng6wezxtfblljcnwtmgq6ewmika2a.ipfs.infura-ipfs.io/" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
      Vennverse
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="btn btn-primary" href="https://sdubb.github.io/metareels/">Reels</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">NFTs</a>
            </li>
            <li class="nav-item">
              <a class="btn btn-primary" href="https://sdubb.github.io/meta/">Feeds</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="/">Chat</a>
            </li>
            <li class="nav-item">
              <a class="btn btn-primary" href="/">Games</a>
            </li>
            
            
          </ul>
          
        </div>
      </div>
    </nav>
    
    );
  }
}

export default Navbar;