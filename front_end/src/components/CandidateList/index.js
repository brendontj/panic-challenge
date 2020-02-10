import React, { Component } from 'react'

import api from '../../services/api'
import './styles.css'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { Container } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import GitHubIcon from '@material-ui/icons/GitHub'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import InfoIcon from '@material-ui/icons/Info'

export default class CandidateList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      candidates: []
    }
  }

  componentDidMount () {
    this.loadCandidates()
  }

  async loadCandidates () {
    const response = await api.get('/candidate')

    this.setState({ candidates: response.data })
  }

  async deleteCandidate (cpf) {
    await api.delete(`/candidate/${cpf}`)
    const response = await api.get('/candidate')

    this.setState({ candidates: response.data })
  }

  useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    inline: {
      display: 'inline',
      color: '#FFF'
    },

    textCity: {
      align: 'right'
    },
    textState: {
      display: 'left',
      marginTop: '5px'
    }
  }))

  render () {
    return (
      <Container maxWidth='md'>
        <List className={this.useStyles.root}>
          {this.state.candidates.map(candidate => (
            <ListItem key={candidate._id} alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar do git ${candidate.git.username}`}
                  src={candidate.git.avatar_url}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography style={{ color: '#FFFFFF' }}>
                      {candidate.full_name}
                    </Typography>
                  </React.Fragment>
                }
                secondary={
                  <>
                    <Typography
                      component='span'
                      variant='body2'
                      className={this.useStyles.inline}
                      style={{ color: '#FFFFFF' }}
                    >
                      {candidate.email}
                    </Typography>

                    <Link
                      className='delete_link'
                      to={'/lista_candidatos'}
                      onClick={() => this.deleteCandidate(candidate.cpf)}
                    >
                      <DeleteIcon color='primary' />
                    </Link>

                    <Link
                      className='edit_link'
                      to={`/editar_candidato/${candidate.cpf}`}
                    >
                      <EditIcon color='primary' />
                    </Link>
                    <Link
                      className='info_link'
                      to={`/info_candidato/${candidate._id}`}
                    >
                      <InfoIcon color='primary' />
                    </Link>

                    <a
                      className='github_link'
                      href={`https://github.com/${candidate.git.username}`}
                    >
                      <GitHubIcon color='primary' />
                    </a>

                    <Typography
                      component='span'
                      variant='body2'
                      style={{
                        color: '#FFFFFF',
                        float: 'right',
                        marginRight: '20px'
                      }}
                    >
                      {candidate.state}
                    </Typography>

                    <Typography
                      component='span'
                      variant='body2'
                      style={{
                        color: '#FFFFFF',
                        float: 'right',
                        marginRight: '7px'
                      }}
                    >
                      {`${candidate.city} /`}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </Container>
    )
  }
}
