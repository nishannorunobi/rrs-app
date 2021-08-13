import React, { Component } from 'react';
//import React, { Component,useEffect, useState } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
//import axios from 'axios'

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://3968eb9a432d.ngrok.io/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.freq
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const dataHorBar = {
      labels: ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69','70-79','80-89','90-99'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#EC932F',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: this.state.items
        },
        {
          label: 'My First dataset 2',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
    return (
      <div>
        <h2>Horizontal Bar Example</h2>
        <HorizontalBar data={dataHorBar} />
      </div>
    );

  }
}
