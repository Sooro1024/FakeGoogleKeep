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
import NavBar from "./conteiners/navBar/Navbar";
import {Route , Switch ,Link} from "react-router-dom";
import Dashboard from "./conteiners/projects/DashBoard";
import { SignIn } from "./conteiners/signIn/SignIn";
import { SignUp } from "./conteiners/signUp/SignUp";
import { connect } from 'react-redux'

 class App extends Component {
	render() {
		return (
			<>
				<div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">signIn</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/nav">Topasdics</Link>
          </li>
        </ul>

        <hr />
        <Route path='/nav' component={NavBar} />
        <Route exact path="/" component={Dashboard} />
        <Route path="/about" component={SignIn} />
        <Route path="/topics" component={SignUp} />
      </div>
			</>
		);
	}
}

export default connect()(App) 
