import React from "react";
import { CardList } from "./CardList";
import { SearchBox } from "./SearchBox";
import { Scroll } from "./Scroll";
import "../styles/App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filterredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return (
        <div className="Loading-box">
          <h1 className="Loading">Loading</h1>
        </div>
      );
    } else {
      return (
        <div className="main">
          <div className="header">
            <h1 id="title">Rolodex</h1>
            <SearchBox searchChange={this.onSearchChange} />
          </div>
          <Scroll>
            <CardList robots={filterredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
