import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormCheck } from 'react-bootstrap';

class CheckboxField extends React.Component {

  constructor(props) {
    super(props);
  }

  renderCheckboxes() {
    const checkboxes = [];
    this.props.checkboxes.forEach(function loop(checkbox, index) {
      checkboxes.push(
        <FormCheck key={index} {...checkbox}>{checkbox.label}</FormCheck>
      );
    });
    return checkboxes;
  }

  render() {
    const checkboxes = this.renderCheckboxes();
    return (
      <FormGroup className="checkboxes">
        {checkboxes}
      </FormGroup>
    );
  }
}

CheckboxField.propTypes = {
  checkboxes: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default CheckboxField;
