import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

class Editor extends Component {
  onChange(event) {
    console.log('onChange event', event);
  }

  render() {
    const { classes, name, border } = this.props;

    return (
      <div className={classes.editorWrap}>
        <form>
          <textarea 
            className={`${classes.textarea} ${border && classes.border}`}
            placeholder={`Enter ${name}`}
            onChange={this.onChange}
          ></textarea>
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
    backgroundColor: '#333',
    border: 'none',
    padding: '20px',
    resize: 'none',
    height: '100vh',
    width: '50vw',
    color: '#fff',
    '&::-webkit-input-placeholder': { 
      color: '#fff', 
    },
  },
  border: {
    borderRight: '1px solid #F3DF59',
  },
};

export default injectSheet(styles)(Editor);
