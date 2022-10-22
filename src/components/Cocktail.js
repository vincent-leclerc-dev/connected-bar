import React from 'react'

var Component = React.Component;

function handleClick(e) {
  alert('click');
}

export default class Cocktail extends Component {


  render(){
  return (
  <div className="card">
    <img className="card-img-top rounded mx-auto d-block" src={require('../images/default.png')} alt="Card cap" width="50" height="50" />
    <div className="card-body">
      <h5 className="card-title">ID: {this.props.match.params.id}</h5>
      <p className="card-text"><b id="status"></b></p>
      <button data-cocktail-id={this.props.match.params.id} onClick={handleClick} className="btn btn-primary" >Commander</button>
    </div>
  </div>)
  }
//);

}
