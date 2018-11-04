import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

class Editor extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.editorWrap}>
        <form>
          <textarea className={classes.textarea}></textarea>
        </form>
      </div>
    );
  }
}

Editor.propTypes = {
};

const styles = {
  editorWrap: {
    margin: '0',
  },
  textarea: {
    backgroundColor: '#ccc',
    border: 'none',
    height: '100vh',
    width: '50vw',
  },
};

export default injectSheet(styles)(Editor);
