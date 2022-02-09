import { Component } from "react";
import "./Footer.css";
const getCurrentYear = () => {
  return new Date().getFullYear();
};

class Footer extends Component {
  render() {
    return <div className="foottwo">Copyright © {getCurrentYear()} Nelda</div>;
  }
}

export default Footer;
