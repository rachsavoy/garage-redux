import React, { Component } from 'react';
import { connect } from 'raect-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import Aside from '../components/aside';
import { addCar } from '../actions';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.pros.addCar(this.props.garage, values, () => {
      this.props.history.push('/');
    });
  }

  render () {
    return [
      <Aside key="aside" garage={this.props.garage}>
        <Link to="/"> Back to list </List>
      </Aside>,
      <div key="add" className="form-container" style={{ backgroundImage: "url('/assets/images/form.jpg')"}}>
        <div className="overlay"></div>
        <form onSubmit={this.props.handleSubmit(this.onSumbit)}>
          <div className="form-group">
            <label htmlFor="InputBrand">Brand</label>
            <Field name="brand" type="text"
    ]
  }
}
