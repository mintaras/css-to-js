import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Header from './Header';
import Hero from './Hero';
import Editor from './Editor';

class MainLayout extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Header />
        <div className={classes.mainLayout}>
          <Editor name={'CSS'} border={true} />
          <Editor name={'JS'} />
        </div>
      </div>
    );
  }
}

MainLayout.propTypes = {
};

const styles = {
  mainLayout: {
    margin: '0',
    backgroundColor: '#333',
    display: 'flex',
  },
};

export default injectSheet(styles)(MainLayout);
