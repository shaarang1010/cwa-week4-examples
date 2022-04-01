import React, { Component } from "react";

export class Example2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "Mikasa",
      breed: "Domestic Short Hair",
      type: "Cat",
      features: "Swag",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgQ0OK5P2W0G3XV6MPb51lT5NWWuzKurOqqYgD8vRbbsBsmEcdZDQiOseSTKPuLOpoxM&usqp=CAU",
    };
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "10%",
        }}
      >
        <div style={{ flexDirection: "column" }}>
          <img src={this.state.picture} alt="cat" />
          <p>
            <b>Name:</b> {this.state.name}
          </p>
          <p>
            <b>Breed:</b> {this.state.breed}
          </p>
          <p>
            <b>Type:</b> {this.state.type}
          </p>
          <p>
            <b>Feature:</b> {this.state.features}
          </p>
        </div>
      </div>
    );
  }
}
