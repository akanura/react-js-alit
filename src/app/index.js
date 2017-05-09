import React from "react";
import {render} from "react-dom";

// import your component
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Card} from "./components/Card";

class App extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <div className="container">
          <Home />
          <hr />
          <p>These is my card</p>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    )
  }
}

render(<App/>, window.document.getElementById('app'));
