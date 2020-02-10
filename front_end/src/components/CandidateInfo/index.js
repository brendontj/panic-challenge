import React, { Component } from 'react'
import { Container } from '@material-ui/core'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Utils from '../../Utils/calculateYears'

export default class CandidateInfo extends Component {
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
      github_avatar: '',
      github_bio: ''
    }
  }

  async componentDidMount () {
    const { id } = this.props.match.params
    const response = await api.get(`/candidate/${id}`)
    this.setState({
      full_name: response.data.full_name,
      email: response.data.email,
      birthdate: response.data.birthdate,
      cpf: response.data.cpf,
      state_candidate: response.data.state_candidate,
      city: response.data.city,
      github_username: response.data.git.username,
      github_avatar: response.data.git.avatar_url,
      github_bio: response.data.git.git_bio
    })
  }

  useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 345,
      backgroundColor: 'transparent'
    }
  }))

  render () {
    const classes = this.useStyles

    return (
      <Container maxWidth='sm'>
        <Link to='/lista_candidatos' className='btn btn-primary'>
          Voltar
        </Link>

        <Card
          className={classes.root}
          style={{ background: 'transparent', boxShadow: 'none' }}
        >
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant='h4'
                component='h2'
                style={{ color: '#FFFFFF' }}
              >
                {this.state.full_name}
              </Typography>

              <Typography
                variant='body2'
                color='textSecondary'
                component='p'
                style={{ color: '#FFFFFF' }}
              >
                {this.state.github_bio}
              </Typography>
            </CardContent>

            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='h2'
                style={{ color: '#FFFFFF' }}
              >
                Informações do candidato
              </Typography>
              <Typography
                variant='body2'
                color='textSecondary'
                component='p'
                style={{ color: '#FFFFFF' }}
              >
                <strong>Email:</strong> {this.state.email}
              </Typography>

              <Typography
                variant='body2'
                color='textSecondary'
                component='p'
                style={{ color: '#FFFFFF' }}
              >
                <strong>Idade:</strong>{' '}
                {Utils.calculateYears(this.state.birthdate)} anos
              </Typography>

              <Typography
                variant='body2'
                color='textSecondary'
                component='p'
                style={{ color: '#FFFFFF' }}
              >
                <strong>Username no GitHub:</strong>{' '}
                {this.state.github_username}
              </Typography>

              <Typography
                variant='body2'
                color='textSecondary'
                component='p'
                style={{ color: '#FFFFFF' }}
              >
                <strong>CPF:</strong> {this.state.cpf}
              </Typography>

              <Typography
                variant='body2'
                color='textSecondary'
                component='p'
                style={{ color: '#FFFFFF' }}
              >
                <strong>Estado:</strong> {this.state.state_candidate}
              </Typography>

              <Typography
                variant='body2'
                color='textSecondary'
                component='p'
                style={{ color: '#FFFFFF' }}
              >
                <strong>Cidade:</strong> {this.state.city}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    )
  }
}
