import React from 'react'
import { Link } from 'react-router-dom'
import {works} from '../data/Work'
import {AiOutlineLink} from 'react-icons/ai'
import {FiGithub} from 'react-icons/fi'


const ListWork = () => {

  return (
    <section className='works'>
        {
          works.map(work => (
            // {console.log(work)}
            <article key={work.id} className='work-item'>
              <h2>{work.name}</h2>
              <div className='map-img'>
                <img src={work.img} />
                <div className='capa'>
                  <p>{work.description}</p>
                </div>
              </div>
              <div className='links'>
                {
                  work.link ? (
                    <a href={work.link}><h3><AiOutlineLink /></h3></a>
                  ) : ''
                }
                - <a href={work.url}><h3><FiGithub /></h3></a> 
              </div>
              <h3>{work.tecnologias}</h3>
              
            </article>
          ))
        }

      </section>
  )
}

export default ListWork