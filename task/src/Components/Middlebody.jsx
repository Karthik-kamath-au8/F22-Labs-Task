import React, { Component } from 'react';
import Path from '../Assests/path_2.png';
import Book from '../Assests/b-1_2.png';
import './Middlebody.css';


export default class Middlebody extends Component{
    render(){
        return(
            <div className="part2">
            <div className='thingsheader'>
                <p className='things'>Things you’ll learn</p>
                <p className='thingsvalue'>Create custom landing pages with Omega that converts more visitors than any website.</p>
            </div>
            <div>
                <div className="wholegrid">
                <div className="rectangle1">
                    <div className="rectanglepath">
                       <img src={Path} alt=""/>
                    </div>
                    <p className='wholep'>How to improve yourself with small tasks.</p>
                </div>
                <div className="rectangle1">
                <div className="rectanglepath">
                       <img src={Path} alt=""/>
                    </div>
                    <p className='wholep'>How to utilize your time while working hard.</p>

                </div>
                <div className="rectangle1">
                <div className="rectanglepath">
                       <img src={Path} alt=""/>
                    </div>
                    <p className='wholep'>How to think creatively.</p>

                </div>
                </div>
                <div className="wholegrid">
                <div className="rectangle1">
                <div className="rectanglepath">
                       <img src={Path} alt=""/>
                    </div>
                    <p className='wholep'>Solving your problems without hurting yourself.</p>
                </div>
                <div className="rectangle1">
                <div className="rectanglepath">
                       <img src={Path} alt=""/>
                    </div>
                    <p className='wholep'>Making money smartly.</p>
                </div>
                <div className="rectangle1">
                <div className="rectanglepath">
                       <img src={Path} alt=""/>
                    </div>
                    <p className='wholep'>Developing new skills fast and furious!.</p>
                </div>
                </div>
                <div className="wholegrid">
                <div className="rectangle1">
                <div className="rectanglepath">
                       <img src={Path} alt=""/>
                    </div>
                    <p className='wholep'>Understanding People 101.</p>
                </div>
                <div className="rectangle1">
                <div className="rectanglepath">
                       <img src={Path} alt=""/>
                    </div>
                    <p className='wholep'>10 secrects to solve any problem easily.</p>
                </div>
                <div className="rectangle1">
                <div className="rectanglepath">
                       <img src={Path} alt=""/>
                    </div>
                    <p className='wholep'>Creating valuable goal for next 5 years.</p>
                </div>
                </div>
                <div className="freerectangle">
                    <img className='freebook' src={Book} alt= ""/>
                    <div className='displayfree'>
                    <p className='getbook'>Get a free chapter of this book</p>
                    <p className='getbookvalue'>Create custom landing pages with Omega that converts more visitors than any website.</p>
                    </div>
                    <button className="btnbook">Get a free chapter</button>
                </div>
                <div className="peoplelast">
                    <div className="indi">
                        <p className="peoplenumb">50K+</p>
                        <p className="peoplevalue">People are already reading this book and improving!</p>
                    </div>
                    <div className="indi">
                        <p className="peoplenumb">96%</p>
                        <p className="peoplevalue">Satisfaction rate comes from our awesome customers.</p>
                    </div>
                    <div className="indi">
                        <p className="peoplenumb">4.9/5.0</p>
                        <p className="peoplevalue">Average customer ratings we have got from Amazon users.</p>
                    </div>
                </div>
            </div>

            </div>
        )
    }
}