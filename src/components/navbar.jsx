import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div class="">
        <nav class="navbar navbar-expand-md bar navbar-dark navbar-fixed-top  ">
          <a class="navbar-brand" href="#">
            Weatherly
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse bar" id="collapsibleNavbar">
            <ul class="navbar-nav ml-auto float-right ">
              <li class="nav-item navbar   ">
                <a class="nav-link" href="#">
                  {" "}
                  <form class="form-inline bar" action="/action_page.php">
                    <input
                      class="form-control mr-sm-2 "
                      type="text"
                      placeholder="Search"
                    />
                    <button class="btn btn-success float-right  " type="submit">
                      Get Weather
                    </button>
                  </form>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
