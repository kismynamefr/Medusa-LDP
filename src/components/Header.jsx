import React, { useState } from 'react'
import logo from '../assets/logo.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import menu from '../assets/menu.svg'
import xmark from '../assets/x.svg'
import btnsm from '../assets/btn-sm.png'

const listNav = [
  {
    name: 'About Medusa',
    link: '#about',
  },
  {
    name: 'Tokenomic',
    link: '#tokenomic',
  },
  {
    name: 'Benefits',
    link: '#benefit',
  },
  {
    name: 'Roadmap',
    link: '#roadmap',
  },
]

const renderListNav = () => {
  return listNav.map((item, index) => {
    return (
      <a key={`${item}: ${index}`} href={item.link}>
        {item.name}
      </a>
    )
  })
}

const listSocial = [
  {
    image: facebook,
    link: 'https://t.me/medusatoken',
  },
  {
    image: twitter,
    link: 'https://twitter.com/Medusatokentw',
  },
]

const renderListSocial = () => {
  return listSocial.map((item, index) => {
    return (
      <a key={`${item}: ${index}`} href={item.link} className="btn header-btn">
        <img src={item.image} alt="social" />
      </a>
    )
  })
}

function Modal({ shown, close }) {
  return shown ? (
    <div
      className="modal-backdrop"
      onClick={() => {
        close()
      }}
    >
      <div
        className={shown ? 'modal-content open' : 'modal-content close'}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <div className="x-icon" onClick={close}>
          <img src={xmark} alt="x-icon" />
        </div>
        <div className="modal-content-link">{renderListNav()}</div>
        <div className="modal-btn justify-between">
          {renderListSocial()}
          <a href="#" className="btn">
            <img src={btnsm} alt="button" />
          </a>
        </div>
      </div>
    </div>
  ) : null
}

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="header flex justify-end items-center px-8">
      <div className="header-logo pointer-events-none">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-between w-full header-container">
        <div className="header-left"></div>
        <div className="flex gap-6 header-link">{renderListNav()}</div>
        <div className="flex gap-3">
          {renderListSocial()}
          <a href="#" className="btn header-btn">
            <img src={btnsm} alt="button" />
          </a>
          <div
            className="header-menu btn"
            onClick={() => {
              setOpen(!open)
            }}
          >
            <img src={menu} alt="menu" />
          </div>
        </div>
      </div>
      <Modal
        shown={open}
        close={() => {
          setOpen(false)
        }}
      />
    </div>
  )
}

export default Header
