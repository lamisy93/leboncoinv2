import React from "react";
import { Link } from "react-router-dom";

class Adview extends React.Component {
  render() {
    const { adData } = this.props.location.state;
    console.log(this.props.location.state);
    return (
      <div>
        <p> {adData.category} </p>
        <p> {adData.title} </p>
        <p> {adData.description} </p>
        <img src={adData.images} />
        <p> {adData.price}€ </p>
        <Link to="/">Revenir à la liste d'annonces</Link>
      </div>
    );
  }
}

export default Adview;
