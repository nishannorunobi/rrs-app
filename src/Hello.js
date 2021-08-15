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
      labels: ['Resume-1', 'Resume-2', 'Resume-3','Resume-4', 'Resume-5'],
      datasets: [
        {
          label: 'Overall Rank',
          backgroundColor: '#EC932F',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [.35,.50,.20,.52,.90]
        },
        {
          label: 'Similarity Score',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [.93,.20,.50,.35,.75]
        },
        {
          label: 'Years of experience',
          backgroundColor: 'rgba(99,255,132,0.2)',
          borderColor: 'rgba(99,255,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [.93,.20,.50,.35,.75]
        },
        {
          label: 'University Ranking',
          backgroundColor: 'rgba(99,255,132,0.2)',
          borderColor: 'rgba(99,255,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [.93,.20,.50,.35,.75]
        }
      ]
    };
    return (
      <div>
        <h2>Resume Ranking System</h2>
        <HorizontalBar 
        data={dataHorBar} 
        options = {{
          scales: {
            xAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }}
        />
      </div>
    );

  }
}
