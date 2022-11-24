import React, { Component } from 'react'
import ReactForm from './ReactForm'
import Reactlist from './Reactlist'

export default class ReactFormMain extends Component {
  render() {
    return (
      <div>
        <ReactForm/>
        <Reactlist/>
      </div>
    )
  }
}
