import React, { Component } from "react";
import CardList from './CardList';
// import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from "./Scroll";
import Footer from './Footer.js'

class App extends Component{
constructor(){
    super();
    this.state={
        robots:[],
        searchfield:''
    }
}
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({robots:users}));

}
onSearchChange=(event)=>{
    this.setState({searchfield:event.target.value})

}

    render(){
    
    const {robots, searchfield}=this.state;
    const filteredRobots=robots.filter(robots=>{
        return robots.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    if(!robots.length){
        return <h1>loading</h1>
    }
    else{
    return(
        <div className="tc"><h1 className="f1">Terminators</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
    <CardList robots={filteredRobots} />
    </Scroll>
    <Footer/>
    </div>
    );
    }
}
}
export default App;