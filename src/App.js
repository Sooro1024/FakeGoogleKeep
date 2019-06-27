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


import React from 'react'
import { Navbar } from './conteiners/navBar/Navbar';
import { Route , Switch } from 'react-router-dom'
import SignUp from './conteiners/signUp/SignUp';
import SignIn from './conteiners/signIn/SignIn';



export default function App() {
  return (
    <>
    <Switch>
    <Route  exact  path='/'  component={Navbar}/>
    <Route  path='/sign_up'  component={SignUp}/>
    <Route  path='/sign_in'  component={SignIn}/>


    </Switch>
    </>
  )
}
