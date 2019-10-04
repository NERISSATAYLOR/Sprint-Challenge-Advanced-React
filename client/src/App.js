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
      .then(res => {
        //console.log(res);
        this.setState({ mates: res.data.mates });

      },
      )
  }
  render() {
    return (
      <div className="App">

        {this.state.mates && this.state.mates.map(mate => {
          return (
            <div key={this.state.mate.id}>
              <PlayersList mate={mate} />

            </div>

          )
        })
        }
      </div>
    );
  }
}



export default App;
