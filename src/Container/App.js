import React, { Component } from "react";
import CardList from "../Component/CardList";
import Searchbox from "../Component/Searchbox";
import Scroll from "../Component/Scroll";
import { setSearchField, requestRobots } from "../actions.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    //console.log("robots render ", robots );
    const { searchField, onSearchChange, robots } = this.props;
    //const {robots}=this.state;
    const filterRobot = robots.filter((robots) => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>RoboFriends</h1>

        <Searchbox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filterRobot} />
        </Scroll>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
