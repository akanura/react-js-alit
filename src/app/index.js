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
          <Card title={"Web Development"} content={"This is my web development card"}/>
          <Card title={"Art Content"} content={"This is my art content card"}/>
          <Card title={"Social Media Marketing"} content={"This is my social media marketing card"}/>
        </div>
      </div>
    )
  }
}

render(<App/>, window.document.getElementById('app'));
