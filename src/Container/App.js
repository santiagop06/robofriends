import React, { Component }  from "react";
import CardList from "../Component/CardList";
//import {robots} from "./robots";
import Searchbox from "../Component/Searchbox"
import Scroll from "../Component/Scroll";



class App extends Component{
	constructor(){
		super()
		this.state = {
			robots:[],
			searchField:""
		}
		


	}

	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response=>{
				return response.json();
			})
			.then(users=>{
				this.setState({robots:users})
			});
	}

	onSearchChange = (event) =>{
		this.setState({searchField: event.target.value});
	}



	render(){
		//console.log("robots render ", robots );
	
		const filterRobot = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		});
		return(
			<div className="tc">
				<h1>RoboFriends</h1>

				<Searchbox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filterRobot}/>
				</Scroll>
			</div>
		);
	}
}
export default App;