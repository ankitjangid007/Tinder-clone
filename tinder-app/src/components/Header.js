import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import IconButton from '@material-ui/core/IconButton'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

const Header = ({ backButton }) => {

  const navigate = useNavigate();

  return (
    <div className='header'>
        {backButton ? (
          <IconButton onClick={()=> navigate(backButton)}>
            <ArrowBackIosIcon fontSize='large' className='header__icon' />
          </IconButton>
        ) : (
          <IconButton>
              <PersonIcon className='header__icon' fontSize='large' />
          </IconButton>
        )
      }
        <Link to='/'>
          <img
              className='header__logo'
              src='https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg' 
              alt='tinder__logo' 
          />
        </Link>
        <Link to='/chat'>
          <IconButton>
              <ForumIcon className='header__icon' fontSize='large' />
          </IconButton>
        </Link>
    </div>
  )
}

export default Header