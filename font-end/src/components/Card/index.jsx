import React, { Component } from "react";
import "./Card.scss";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "ádasdasdas",
      text: "",
    };
  }
  render() {
    const link =
      "https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/117753399_1173142786392210_5499084787834854940_n.jpg?_nc_cat=109&_nc_sid=07e735&_nc_ohc=0KHrb2H9WYkAX95qz6i&_nc_ht=scontent.fsgn2-4.fna&oh=69eeb1b1d541b7e7364e7e69b8df4fd0&oe=5F65DB2E";
    const { title, text } = this.state;
    return (
      <div className="card">
        <img src={link} alt="link" className="image-edit" />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{text}</p>
          <a href="_" className="btn btn-primary stretched-link">
            Name
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
