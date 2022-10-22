import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Cocktail from './Cocktail';

import { fetchCocktailList } from '../redux/actions';
const cocktailsData = require('../data/cocktails.js');

export class CocktailList extends PureComponent {
  static propTypes = {
    list: PropTypes.array,
    actions: PropTypes.object.isRequired,
  };

  static defaultProps = {
    list: [],
  };

  render(){
    var li = [];
    for(var key in cocktailsData) {
      if(cocktailsData.hasOwnProperty(key)) {
        li.push(<Link key={key} to={"/cocktail/" + (key+1)} ><button className="list-group-item list-group-item-action">{cocktailsData[key]['name']}</button></Link>);
      }
    }
    const {  fetchCocktailList } = this.props.actions;
    return (
      <Router>
        <div>
          <h1>Cocktails</h1>
          <button onClick={fetchCocktailList}>
            {'Fetch cocktails'}
          </button>
          <div className="list-group">
          {li}
          </div>
          <Route path="/cocktail/:id" component={Cocktail} />
        </div>
      </Router>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ fetchCocktailList }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CocktailList);
