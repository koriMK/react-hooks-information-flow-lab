import React from "react";

class Filter extends React.Component {
  handleChange = (event) => {
    this.props.onCategoryChange(event.target.value);
  };

  render() {
    return (
      <select name="filter" onChange={this.handleChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    );
  }
}

export default Filter;