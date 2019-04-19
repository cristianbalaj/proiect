import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { IntlProvider, FormattedMessage } from "react-intl";
import messages from "./messages";
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";
import { setLocale } from "./actions/locale";

import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import ScrollableTabsButtonPrevent from "./components/Tabs2";
import Particles from 'react-particles-js';
import Button from "@material-ui/core/Button";
import CardContent from "./components/Home";

const particleOpt={
    particles:{
        number:{
            value:150,
            density: {
                enable:true,
                value_area:800

            }
        }
    }
}

class App extends Component {
  render() {
      const { lang } = this.props;

    return (
        <IntlProvider locale={lang} messages={messages[lang]}>

        <div >

          <div>

          <body>
          <Button
              variant="outline-light"
              onClick={() => this.props.setLocale("en")} className="en_ro_button"
          >
              En
          </Button>
          <Button
              variant="outline-light"
              onClick={() => this.props.setLocale("ro")} className="en_ro_button"
          >
              Ro
          </Button>
          <div ><ScrollableTabsButtonPrevent /></div>
          </body>
          </div>
          <Particles className="particles-js" params={particleOpt}/>
          <div className="watermark">Balaj Cristian</div>
          </div>

        </IntlProvider>

    );
  }
}


App.propTypes = {
    lang: PropTypes.string.isRequired,
    setLocale: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        lang: state.locale.lang
    };
}

export default connect(
    mapStateToProps,
    { setLocale },
    null,
    { pure: false }
)(App);
