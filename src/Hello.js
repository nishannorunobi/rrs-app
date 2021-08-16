import React, { Component } from 'react';
//import React, { Component,useEffect, useState } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
//import axios from 'axios'

export default class Button extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      doc_names : ['Resume-1', 'Resume-2', 'Resume-3','Resume-4', 'Resume-5'],
      overall_rank : [.35,.50,.20,.52,.90],
      similarity_score : [.90,.52,.35,.20,.70],
      years_of_experience : [.05,.10,.95,.62,.81],
      hovering_color : 'rgba(0,0,0,1)',
      base_url : "https://bab05e664b9e.ngrok.io/"
    };
  }

  componentDidMount() {
    fetch(this.state.base_url + "resume-names")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          doc_names: result
        });
      },

      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )

    fetch(this.state.base_url + "overall-ranks")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          overall_rank: result
        });
      },

      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )

    fetch(this.state.base_url + "experience-ranks")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          years_of_experience: result
        });
      },

      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )

    fetch(this.state.base_url + "requirement-matching-scores")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          similarity_score: result
        });
      },

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
      labels: this.state.doc_names,
      datasets: [
        {
          label: 'Overall Rank',
          backgroundColor: '#EC932F',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: this.state.hovering_color,
          hoverBorderColor: this.state.hovering_color,
          data: this.state.overall_rank
        },
        {
          label: 'Similarity Score',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: this.state.hovering_color,
          hoverBorderColor: this.state.hovering_color,
          data: this.state.similarity_score
        },
        {
          label: 'Years of experience',
          backgroundColor: 'rgba(99,255,132,0.2)',
          borderColor: 'rgba(99,255,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: this.state.hovering_color,
          hoverBorderColor: this.state.hovering_color,
          data: this.state.years_of_experience
        }
      ]
    };
    return (
      <div
        style={{
          width: "1000px"
        }}
      >
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
