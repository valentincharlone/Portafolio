import React from 'react'

import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3 } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { GrReactjs } from 'react-icons/gr'
import { SiPhp } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'

import { BsGithub } from 'react-icons/bs'
import { DiGit } from 'react-icons/di'

const Technologies = () => {
    return (
        <section id='technologies' className='skills-contain'>
            <h1>Skills</h1>
            <div className='skills'>
                <ul>
                    <li> <AiFillHtml5 />
                        <span>HTML</span> 
                    </li>
                    <li> <FaCss3 />
                        <span>CSS</span>
                    </li>
                    <li> <SiJavascript /> 
                        <span>JavaScript</span>
                    </li>
                    <li> <GrReactjs /> 
                        <span>React</span>
                    </li>
                    <li> <SiPhp />
                        <span>PHP</span>
                    </li>
                    <li> <SiMysql />
                        <span>SQL</span>
                    </li>
                    <li> <BsGithub />
                        <span>GitHub</span>
                    </li>
                    <li> <DiGit />
                        <span>Git</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Technologies