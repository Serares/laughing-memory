
import React, { Component } from "react";
import { Grid } from '../Inputs/InputImage/node_modules/react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Company</a>
              </li>
              <li>
                <a href="/">Portfolio</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
