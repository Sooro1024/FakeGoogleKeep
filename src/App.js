/*

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ADDITION } from './actions/numberActions'
import { GET_DATA_ACTION } from './actions/getDataAction'

export class App extends Component {  
  render() {
    return (
      <>
      
      <div>
       {this.props.n.number}
      </div>
      <button onClick={()=> this.props.ADDITION('23' )}>Add</button>
      <div>{this.props.getData.data}</div>
      <button onClick={()=> this.props.GET_DATA_ACTION()}>Add</button>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  n: state.mathReducer,
  getData: state.getData
})

const mapDispatchToProps = {
  ADDITION,
  GET_DATA_ACTION
}

export default connect(mapStateToProps, mapDispatchToProps)(App) 

*/

import React, { Component } from "react";
import NavBar from "./conteiners/navBar/NavBar";
import {BrowserRouter as Router, Route , Switch} from "react-router-dom";
import Dashboard from "./conteiners/projects/DashBoard";

export default class App extends Component {
	render() {
		return (
      <Router>
			<div className='app'>
				<NavBar />
				<Switch>
					<Route exact path='/' component={Dashboard} />
				</Switch>
			</div>
      </Router>
		);
	}
}
