import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const config = require('../data/config.js');
const pumps = config['pumps'];

function handleClickPump(e) {
    e.preventDefault();

    var pumpKey = e.target.dataset.pumpKey;
    var actionId = e.target.dataset.actionId;

    var payload = {};

    switch(actionId){
      case config['constantes']['EMPTYING']:
        payload = {
          "pumpId": pumps[pumpKey]['id'],
          "during": pumps[pumpKey][actionId]
        };
      break;
      case config['constantes']['PRIMING']:
        payload = {
          "pumpId": pumps[pumpKey]['id'],
          "during": pumps[pumpKey][actionId]
        };
      break;
      default:

    }

    callApi(payload);

}


function callApi(params){

    var data = JSON.stringify( params );

    let header = new Headers({
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        'Content-Type': 'application/json'
    });

    console.log(data);

    console.log(config['constantes']['GPIO_ENDPOINT']);

    fetch(
      config['constantes']['GPIO_ENDPOINT'],
      {
        method: "POST",
        mode: 'cors',
        headers: header,
        body: data
      }
    )
    .then(response => response.json())
    .then(jsondata => console.log(jsondata));

}

export default class Settings extends PureComponent {

  static propTypes = {
    list: PropTypes.array,
  };

  static defaultProps = {
    list: [],
  };
  
  render(){

    const pumpsComponent = pumps.map((pump,i) => {
      return <div key={pump.id} className="list-group-item list-group-item-action"> {pump.name} <button className="ml-2 btn btn-primary" data-action-id="priming" data-pump-key={i} onClick={handleClickPump}>Amorcage</button>
      <button className="ml-2 btn btn-danger" data-action-id="emptying" data-pump-key={i} onClick={handleClickPump}>Nettoyage</button></div>
    })
    return <div><h1>Settings</h1><div className="list-group">{ pumpsComponent }</div></div>
  }
}
