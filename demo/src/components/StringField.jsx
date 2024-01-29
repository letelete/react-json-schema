import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormLabel, FormControl, FormText } from 'react-bootstrap';

const alphaRegex = /^$|[A-Z]+$/i;

class StringField extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  validateInput(event) {
    if (alphaRegex.test(event.target.value)) {
      this.setState({ value: event.target.value });
    }
  }

  render() {
    const { label, name, help } = this.props;
    return (
      <FormGroup controlId={name}>
        <FormLabel>{label}</FormLabel>
        <FormControl componentClass="input" name={name} />
        {help && <FormText>{help}</FormText>}
      </FormGroup>
    );
  }
}

StringField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  help: PropTypes.string
};

export default StringField;
