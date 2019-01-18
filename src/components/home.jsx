import React, { Component } from "react";
import "../components/style.css";
import Navbar from "./navbar";
import {Link} from 'react-router-dom'

class Home extends Component {
  state = {
    city: null
  };
  handleCity = e => {
    this.setState({ city: e.target.value });
  };
  render() {
    console.log(this.state);
    return (
      <div class="">
        <div>
          <Navbar />
        </div>
        <div class=" home">
          <span class="txthome">ENTER A CITY AND STATE</span>
          <form>
            <input
              id="city"
              type="text"
              placeholder="Enter City Name"
              class=" inphome"
              onBlur={this.handleCity}
            />
          </form>
          <Link  to={{
              pathname: "/info",
              query: {
                info: this.state.city
              }
            }}><button class="btnhome btn btn-success">Get Weather</button></Link>
        </div>
      </div>
    );
  }
}

export default Home;
