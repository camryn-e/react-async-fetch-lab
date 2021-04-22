// create your App component here
import React, { Component } from 'react'

export default class App extends Component {

  state = {
    currInSpace: []
  }

  render() {
    return (
      <div>
        {this.state.currInSpace.map(astro => astro.name)}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          currInSpace: data.people
        })
      })
  }
}
