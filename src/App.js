import React, { Component } from 'react'
import { connect } from 'react-redux'

const userLogin = (pyaload) => ({type: "LOG_IN", pyaload})



export class App extends Component {

  render() {
    return (
      <div>
        Plesase sine in
        <input value={'enter username'} onChange={{}}  ></input>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  userLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
