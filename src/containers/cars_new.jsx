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
            <Field name="brand" type="text" placeholder="Aston Martin" component="input" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="InputModel">Model</label>
            <Field name="owner" type="text" placeholder="DB Mark III" component="input" classNmae="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="InputOwner">Owner</label>
            <Field name="owner" type="text" placeholder="James Bond" component="input" className="form-control" />
          </div>
          <div className="form-control">
            <label htmlFor="InputPlate">Plate</label>
            <Field name="model" type="text" placeholder="DB Mark III" component="input" className="form-control" />
          </div>
          <button type="submit"> Add car</button>
        </form>
      </div>
    ];
  }
};

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default reduxForm({
  form: 'newCarForm'
})(
  connect(mapStateToProps, {addCar })(CarsNew)
);
