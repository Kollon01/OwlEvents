import React from 'react';
import './App.css';
import httpInstance from "./services/http.service";


class App extends React.Component {
  state = {
    personas: []
  }; 
  componentDidMount() {
    httpInstance.get(`http://localhost:8001/api/services/all`)
      .then(res => {
        const personas = res.data;
        console.log(personas);
        this.setState({ personas });
      })
  }
  render() {
    return (
      <div className="App">
        hola
        
      </div>
    );
  }
}

export default App;
