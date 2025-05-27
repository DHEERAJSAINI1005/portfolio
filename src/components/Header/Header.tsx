import { Container } from './styles'
// import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useEffect, useState } from 'react'
import Resume from '../../assets/dheeraj_kumar_resume.pdf'

export function Header() {
  const [isActive, setActive] = useState(false)
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#home')

  useEffect(() => {
    function onHashChange() {
      setCurrentHash(window.location.hash)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  function checkActive(hash: string) {
    return currentHash === hash
  }

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }

  function closeMenu() {
    setActive(false)
  }

  // New function to handle click and update currentHash instantly
  function handleNavClick(hash: string) {
    setCurrentHash(hash)
    closeMenu()
  }

  return (
    <Container className="header-fixed">
      {/* <Router> */}
        <HashLink smooth to="#home" className="logo" onClick={() => handleNavClick('#home')}>
          <span>{"Dheeraj"}</span>
        </HashLink>

        <nav className={isActive ? 'active' : ''}>
          <NavHashLink
            smooth
            to="#home"
            className={checkActive('#home') ? 'active-link' : ''}
            onClick={() => handleNavClick('#home')}
          >
            Home
          </NavHashLink>
          <NavHashLink
            smooth
            to="#about"
            className={checkActive('#about') ? 'active-link' : ''}
            onClick={() => handleNavClick('#about')}
          >
            About
          </NavHashLink>
          <NavHashLink
            smooth
            to="#skills"
            className={checkActive('#skills') ? 'active-link' : ''}
            onClick={() => handleNavClick('#skills')}
          >
            Skills
          </NavHashLink>
          <NavHashLink
            smooth
            to="#education"
            className={checkActive('#education') ? 'active-link' : ''}
            onClick={() => handleNavClick('#education')}
          >
            Education
          </NavHashLink>
          <NavHashLink
            smooth
            to="#project"
            className={checkActive('#project') ? 'active-link' : ''}
            onClick={() => handleNavClick('#project')}
          >
            Project
          </NavHashLink>
          <NavHashLink
            smooth
            to="#experience"
            className={checkActive('#experience') ? 'active-link' : ''}
            onClick={() => handleNavClick('#experience')}
          >
            Experience
          </NavHashLink>
          <NavHashLink
            smooth
            to="#contact"
            className={checkActive('#contact') ? 'active-link' : ''}
            onClick={() => handleNavClick('#contact')}
          >
            Contact
          </NavHashLink>
          <a href={Resume} download className="button">
            Resume
          </a>
        </nav>

        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      {/* </Router> */}
    </Container>
  )
}
