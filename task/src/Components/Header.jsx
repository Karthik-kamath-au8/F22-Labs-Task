import React, { Component } from 'react';
import Omega from '../Assests/omega-copy.png';
import Book  from '../Assests/b-1.png';
import Path from '../Assests/path_2.png';
import Oval from '../Assests/oval.png';
import Headbody from "./Headbody" 


import './Header.css'
import Middlebody from './Middlebody';


export default class Header extends Component {

    render() {
      return (
          <>
        <div className='part1'>  
        <nav className='nav'>
        <img className='image' src={Omega} alt="" />
        <div className= 'list'>
         <p className='active'>Demos</p>
          <p>Pages</p>
          <p>Support</p>
        </div>
        <button>Get this Book</button>
        </nav>
        <div className="bookheader">
            <img className='bookimage' src={Book} alt=''/>
            <div>
            <div></div>    
            <p className='Solve-your-daily-lif'>Solve your daily life problems in 1 minute.</p>
            <div className="ovpath">
              <div className='oval'> 
             <img className='path' src={Path}  alt=''/> 
             </div>   
            <p>12 Chapter with detail illustrations</p>
            </div>
            <div className="ovpath">
              <div className='oval'> 
             <img className='path' src={Path} alt=''/> 
             </div>   
             <p>Learn from the expert with 24 years experience</p>
            </div>
            <div className="ovpath">
              <div className='oval'> 
             <img className='path' src={Path}  alt=''/> 
             </div>   
             <p>Audio version is included with the purchase</p>
            </div>
            <div className='price'>
            <button className='btn'>Get this book - Starts from $29</button>
            </div>
            <p>Interested in a free chapter?<a href="">Get it now</a></p>
            </div>

        </div>
        <div>
            <div className="ovalComment">
            <img className='Ovalimage' src={Oval} alt=""/>
            <div>
            <p className="quote">“OMG! I cannot believe that I have got a brand new landing page<br/> after getting Omega. It was super easy to edit and publish.”</p>
            <p className='taylor'>Jonathan Taylor</p>
            </div>
            </div> 
        </div>
        <Headbody/>
        <Middlebody/>
        </div>
        </>
      )
    }
  
  }
