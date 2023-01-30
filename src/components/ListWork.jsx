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
                    <a href={work.link}><h4><AiOutlineLink /></h4></a>
                  ) : ''
                }
                - <a href={work.url}><h4><FiGithub /></h4></a> 
              </div>
              <h3>{work.tecnologias}</h3>
              
            </article>
          ))
        }

      </section>
  )
}

export default ListWork