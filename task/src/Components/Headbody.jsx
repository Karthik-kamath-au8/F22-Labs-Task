import React, { Component } from 'react';
import Layout from '../Assests/layout-11.png';
import Layer from '../Assests/layers-3.png';
import Responsive from '../Assests/responsive.png';
import './Headbody.css';



export default class Headbody extends Component {

    render(){
        return(
            <>
            <div>
                <p className='titled'>
                Chapters we’ve covered
                </p>
                <p>Create custom landing pages with Omega that converts <br/> more visitors than any website.</p>
            </div>
            <div className='titledbody'>
                <div className='Rectangle'>
                    <p className='one'>1</p>
                </div>
                <div className='chapterbody'>
                <p className='chapter1'>Chapter 1</p>
                <p className='problem'>What is problem solving?</p>
                <p className='problemans'>Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</p>
                </div>

            </div>
            <div className="laydisplay">
                <div className='laysolv'>
                    <img className='layout-11' src={Layout} alt=''/>
                    <p className="solve">Solve Daily Problems</p>
                    <p className="solveans">With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.</p>
                </div>
                <div className='laysolv'>
                    <img className='layout-11' src={Layer} alt=''/>
                    <p className="solve">Key Notes on Each Chapter</p>
                    <p className="solveans">With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.</p>
                </div>
                <div className='laysolv'>
                    <img className='layout-11' src={Responsive} alt=''/>
                    <p className="solve">Audio Book Available</p>
                    <p className="solveans">With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.</p>
                </div>
            </div>
            </>
        )
    }
}    