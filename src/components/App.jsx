import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
// require("dotenv").config();



class App extends React.Component {

  state = { images : [] };

    onSearchSubmit = async (term) => {

    const response = await unsplash.get('/search/photos', {
    params: { query: term, per_page: 20}
    
    });

    this.setState({ images: response.data.results });

    // end method of using promises below to extract the reponse
    // .then((response) => {
    //   console.log(response.data.results);
    // });

  }
  
  render(){
    return (
      <div className="ui container" style={{ marginTop : '50px'}}>
        <SearchBar onSubmit={ this.onSearchSubmit } /> 
        <br/>
        Found:  {this.state.images.length} images 
      </div>
    );
  }
}

export default App;