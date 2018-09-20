import React from "react";
import Adcard from "./Adcard";

// 1 Mounting
class Adlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: [] };
  }

  //3
  componentDidMount() {
    const leboncoin = require("leboncoin-api");
    const search = new leboncoin.Search().setPage(1).setRegion("ile_de_france");
    // Please check into categories & sub categories constants to know which are the sub categories to add into "addSearchExtra"

    search.run().then(
      data => {
        console.log(data.results); // the array of results
        this.setState({ product: data.results });
        console.log("je suis là");
      },
      err => {
        console.error(err);
      }
    );
  }

  //2 Render
  render() {
    if (this.state.product.length === 0) {
      return <p>"Données en cours de chargement"</p>;
    }
    //4 (Render le retour, après avoir été dans componentDidMount
    return (
      <div className="adlist">
        {this.state.product.map(adcardData => (
          <Adcard key={adcardData.id} adcardData={adcardData} />
        ))}
      </div>
    );
  }
}

export default Adlist;
