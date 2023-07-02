import React from 'react'
import icon2 from '../assets/menu1.svg'
import icon1 from '../assets/menu2.svg'
import useScrollspy from '../hooks/useScroll'

const listPagination = [
  {
    id: 1,
    link: '#home',
    content: 'Home',
    sub: 'home',
  },
  {
    id: 2,
    link: '#about',
    content: 'About Medusa',
    sub: 'about',
  },
  {
    id: 3,
    link: '#tokenomic',
    content: 'Tokenomic',
    sub: 'tokenomic',
  },
  {
    id: 4,
    link: '#benefit',
    content: 'Benefits',
    sub: 'benefit',
  },
  {
    id: 5,
    link: '#roadmap',
    content: 'Roadmap',
    sub: 'roadmap',
  },
]

const Panigation = () => {
  const ids = ['home', 'about', 'tokenomic', 'benefit', 'roadmap']
  const { activeId, setActiveId } = useScrollspy(ids, 54)

  const renderListPagination = () => {
    return listPagination.map((res) => (
      <a
        key={res.id}
        className={`${activeId === res.sub ? 'active' : ''}`}
        href={`${res.link}`}
        onClick={() => {
          setActiveId(res.sub)
        }}
      >
        <img src={icon1} alt="icon" />
        <img src={icon2} alt="icon" />
        <p>{res.content}</p>
      </a>
    ))
  }
  return <div className="panigation">{renderListPagination()}</div>
}

export default Panigation
