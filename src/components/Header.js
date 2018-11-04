import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <header className={classes.header}>
        <h1>CSS to JS converter</h1>
      </header>
    );
  }
}

Header.propTypes = {
};

const styles = {
  header: {
    backgroundColor: '#F3DF59',
    color: '#333',
    padding: '20px',
    '& h1': {
      margin: '0',
    }
  },
};

export default injectSheet(styles)(Header);
