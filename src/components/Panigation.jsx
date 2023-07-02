import React, { useEffect, useState } from 'react'
import icon1 from '../assets/menu2.svg'
import icon2 from '../assets/menu1.svg'
import { useSearchParams } from 'react-router-dom'

const listPagination = [
  {
    id: 1,
    link: '#home',
    content: 'Home',
  },
  {
    id: 2,
    link: '#about',
    content: 'About Medusa',
  },
  {
    id: 3,
    link: '#tokenomic',
    content: 'Tokenomic',
  },
  {
    id: 4,
    link: '#benefit',
    content: 'Benefits',
  },
  {
    id: 5,
    link: '#roadmap',
    content: 'roadmap',
  },
]

const Panigation = () => {
  const [option, setOption] = useState()
  const [searchParams, setSearchParams] = useSearchParams()
  useEffect(() => {
    let id = searchParams.get('link')
    if (id) {
      window.location.href = '#' + id
    }
  }, [searchParams])
  const renderListPagination = () => {
    return listPagination.map((res, item) => {
      return (
        <a
          key={item.id}
          className={`${option === res.id ? 'active' : ''}`}
          href={`${res.link}`}
          onClick={() => {
            setOption(res.id)
          }}
        >
          <img src={icon1} alt="icon" />
          <img src={icon2} alt="icon" />
          <p>{item.content}</p>
        </a>
      )
    })
  }
  return <div className="panigation">{renderListPagination()}</div>
}

export default Panigation
