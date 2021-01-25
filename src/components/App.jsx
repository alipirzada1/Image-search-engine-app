import React from "react";
import unsplash from "../api/unsplash.jsx";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
// require("dotenv").config();

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 50 },
    });

    this.setState({ images: response.data.results });

    // end method of using promises below to extract the reponse
    // .then((response) => {
    //   console.log(response.data.results);
    // });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "50px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <br />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
