import React from 'react';


class SearchBar extends React.Component{

  state = { term: '' };


  render(){
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label style={{ textAlign : 'center'}}>Image Search Engine</label>
            <input type="text" placeholder="Type your search here..." 
            value={this.state.term} 
            onChange={e => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
      );
  }

}

export default SearchBar;