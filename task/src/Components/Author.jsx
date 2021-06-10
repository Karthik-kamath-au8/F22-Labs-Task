import React, { Component } from 'react';
import Oval5 from "../Assests/oval_5.png";
import './Author.css'



export default class Authur extends Component{
    render(){
        return(
            <div className="part4">
                <div>
                    <p className='Author'>About the author</p>
                </div>
                <div className="authurintro">
                    <img src={Oval5} alt=""/>
                    <div className='authurcomment'>
                        <p className="authurname">Joseph Williams</p>
                        <div>
                        <p className="authurbio">Hey! My name is Joseph Williams and I'm a product designer based in Berlin. Most recently I led the design of multiple products at WeWork and prior to that I worked with startups building their products and design culture.

                        Previous products I built for the design community are used by tens of thousands of designers working at companies like Google, Airbnb, Netflix and Boeing. Products I built or designed are featured in Wired, TechCrunch, Forbes, Quartz, Smashing Magazine, Awwwards and more.

                        Reach me on Twitter or Email.</p>
                            </div>
                    </div>
                </div>
            </div>

            )
        }
}