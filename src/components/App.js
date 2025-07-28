import React from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false
    };
  }

  onDarkModeClick = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode
    }));
  };

  render() {
    return (
      <div className={"App " + (this.state.isDarkMode ? "dark" : "light")}>
        <Header 
          isDarkMode={this.state.isDarkMode} 
          onDarkModeClick={this.onDarkModeClick} 
        />
        <ShoppingList items={itemData} />
      </div>
    );
  }
}

export default App;