import React from 'react';
import axios from 'axios';
import PlayersCard from './components/PlayersCard';
import Input from './components/Input';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(response => {
        //console.log(response.data);
        this.setState({ players: response.data })
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        <h1>Players Club List</h1>
        <Input />
        <PlayersCard key={this.state.players.id} players={this.state.players} />
      </div>
    )
  }
}
export default App;