import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions';
import Aside from '../components/aside';

class CarsIndex extends Component {
  componentWillMount() {
    componentWillMount() {
      this.props.fetchCars(this.props.garage);
    }

    render () {
      if (this.props.cars.length === 0) {
        return [
          <Aside key="aside" garage={this.props.garage}>
            <Link to="/cars/new"> Add a car</Link>
          </Aside>,
          <div className="no-car" key="nocar"> No car yet</div>
        ];
      }
      return [
      <Aside key="aside" garage={this.props.garage}>
        <Link to="/cars/new">Add a car</Link>
      </Aside>,
      <div className="list-container" key="cars">
        <Link to={`/cars/${car.id}`} key={car.id} />

      ]
    }
  }
}

