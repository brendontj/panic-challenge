import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Menu from '../../components/Menu'
import CandidateEdit from '../../components/CandidateEdit'

class PageEdit extends Component {
  render () {
    return (
      <>
        <Menu />
        <CandidateEdit />
      </>
    )
  }
}

export default withRouter(PageEdit)
