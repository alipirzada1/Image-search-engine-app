import React from "react";

class SearchBar extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.onFormSubmit = this.onFormSubmit.bind(this);  // one way of fixing the value of this by binding this to function
  // }

  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    // Below we call the parent method (onSearchSubmit of App component) and pass a parameter to it with this.state.term
    // Basically we are communicating Child to Parent
    this.props.onSubmit(this.state.term);

    // console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label style={{ textAlign: "center" }}>Image Search Engine</label>
            <input
              type="text"
              placeholder="Type your search here..."
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
