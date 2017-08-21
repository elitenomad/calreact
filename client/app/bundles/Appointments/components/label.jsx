import React from 'react';

export default class Label extends React.Component {
  render () {
    return (
      <div>
          <h5><i>{this.props.label}</i></h5>
      </div>
    );
  }
}

Label.propTypes = {
  label: React.PropTypes.string
};

