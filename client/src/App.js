import React from 'react';
import PlayersList from './components/PlayersList';
import './App.css';
import NavBar from './components/NavBar';

class App extends React.Component {

  constructor() {
    super();
    this.state = {

      mates: []

    }
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        this.setState({ mates: data });
        //console.log(data);

      },
      )
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <PlayersList key={this.state.mates.id} mates={this.state.mates} />
      </div>
    )

  }

}
export default App;
