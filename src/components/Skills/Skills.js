import React, { Component } from 'react'
import './Skills.css'
import c from './icons/c.png'
import cPlusPlus from './icons/c++.png'
import css from './icons/css.png'
import html from './icons/html.png'
import java from './icons/java.png'
import javaScript from './icons/javascript.png'
import mySql from './icons/sql.png'
import react from './icons/react.png'
import node from './icons/node.png'
import mongoDB from './icons/mongoDB.png'

class Skills extends Component{

    state={icons:[[c,'C'],
                  [cPlusPlus,'C++'],
                  [css,'Css'],
                  [html,'Html'],
                  [java,'Java'],
                  [javaScript,'Javascript'],
                  [mySql,'MySQL'],
                  [react,'React.js'],
                  [node,'Node.js'],
                  [mongoDB,'MongoDB']]
        }

    renderIcons=()=>{
       return this.state.icons.map((icon,index)=>{
            return(
                <div className='skill-icon-warp' key={index} >
                    <img className='skill-icon' alt='error' src={icon[0]}/>
                    <h1 className='skill-text'>{icon[1]}</h1>
                </div>
            )
       })
    }

    render(){
        return(
            <div className='skills-container' id='skills' data-aos='fade-right'>
                <h1 className='skills-title'><span>My</span> Skills</h1>
                <div className='skill-list'>
                    {this.renderIcons()}
                </div>
            </div>
        )
    }

}

export default Skills;

