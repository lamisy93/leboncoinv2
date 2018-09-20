import React from "react";
import "./Adcard.css";
import { Link } from "react-router-dom";

class Adcard extends React.Component {
  render() {
    console.log(this.props.adcardData);
    const {
      images,
      category,
      title,
      location,
      price,
      date
    } = this.props.adcardData;

    return (
      <Link
        to={{
          pathname: "/adview",
          state: { adData: this.props.adcardData }
        }}
      >
        <div className="adcard">
          <img alt="" src={images && images.length > 0 && images[0]} />
          <div className="adcard_content">
            <span style={{ color: "blue" }}>{title}</span>
            <span>{category}</span>
            <span>{location.city_label}</span>
            <div className="adcard_row">
              <span style={{ color: "orange", fontWeight: "bold" }}>
                {price}€
              </span>
              <span>{date.toString()}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Adcard;
