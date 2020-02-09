import React, { Component } from 'react';
import { Container } from '@material-ui/core'
import api from '../../services/api'
import { Link } from 'react-router-dom';

export default class CandidateInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
        
    }
  }

componentDidMount () {
    this.loadCandidate()
  }

  async loadCandidate () {
    const response = await api.get('/candidate')

    this.setState(response.data)
  }

render(){
    return (
        <Container maxWidth='md'>
         <Link to="/lista_candidatos" className="btn btn-primary" >Voltar</Link>
            

        </Container>
        )
    }
}

