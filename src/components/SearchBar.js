import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = event => {
    event.preventDefault();
    // todo: make sure to we call callback from parent
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label> Video Search </label>
            <input
              type="text"
              value={this.state.term}
              name="term"
              placeholder="Search"
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
