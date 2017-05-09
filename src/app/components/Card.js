import React from "react";

export class Card extends React.Component{
  render(){
    console.log(this.props);
    return(
      <div className="col-md-4">
        <div className="panel panel-default">
          <div className="panel-heading">
            {this.props.title}
          </div>
          <div className="panel-body">
            {this.props.content}
          </div>
        </div>
      </div>
    );
  }
}
