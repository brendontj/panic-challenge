import React, { Component } from 'react'

import api from '../../services/api';
import { Container } from '@material-ui/core';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';

import './styles.css';


class CandidateForm extends Component {


constructor (props) {
    super(props)
    this.state = {
      full_name: '',
      email: '',
      birthdate: '',
      cpf: '',
      state_candidate: '',
      city: '',
      github_username: '',
    }
  }


async handleSubmit() {

    await api.post('/candidate', this.state);

  }

  render () {
    return (
      <Container maxWidth='md'>
        <Link to="/lista_candidatos" className="btn btn-primary" >Voltar</Link>
        <form >
          
          <div className='input-block'>
            <label htmlFor='full_name'>Nome Completo</label>
            <input
              name='full_name'
              id='full_name'
              required
              value={this.full_name}
              onChange={e => this.setState({full_name: e.target.value})}
            />
          </div>

          <div className='input-block'>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              id='email'
              required
              value={this.email}
              onChange={e => this.setState({email: e.target.value})}
            />
          </div>

          <div className='input-block'>
            <label htmlFor='github_username'>Usuário do GitHub</label>
            <input
              name='github_username'
              id='github_username'
              required
              value={this.github_username}
              onChange={e => this.setState({github_username: e.target.value})}
            />
          </div>
        <div className='input-group'>
          <div className='input-block'>
            <label htmlFor='birthdate'>Data de nascimento</label>
            <input
              name='birthdate'
              id='birthdate'
              type='date'
              required
              value={this.birthdate}
              onChange={e => this.setState({birthdate: e.target.value})}
            />
          </div>
          
          <div className='input-block'>
            <label htmlFor='cpf'>CPF</label>
            <input
              name='cpf'
              id='cpf'
              required
              value={this.cpf}
              onChange={e => this.setState({cpf: e.target.value})}
            />
          </div>
          </div>

          <div className='input-group'>
          <div className='input-block'>
            <label htmlFor='state_candidate'>Estado</label>
            <input
              name='state_candidate'
              id='state_candidate'
              required
              value={this.state_candidate}
              onChange={e => this.setState({state_candidate: e.target.value})}
            />
          </div>
          
          <div className='input-block'>
            <label htmlFor='city'>Cidade</label>
            <input
              name='city'
              id='city'
              required
              value={this.city}
              onChange={e => this.setState({city: e.target.value})}
            />
          </div>
          </div>
          <button type="submit">
          <Link to="/lista_candidatos" className="btn btn-primary" onClick={ () => this.handleSubmit()}>Salvar</Link>
          </button>
        </form>
      </Container>
    )
  }
}
export default withRouter(CandidateForm);