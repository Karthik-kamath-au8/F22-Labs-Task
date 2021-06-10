import React, { Component } from 'react';
import star from "../Assests/path-copy_2.png";
import ovall from '../Assests/oval_2.png';
import Blankstar from '../Assests/path-copy-4_2.png';
import oval3 from "../Assests/oval_3.png";
import oval4 from "../Assests/oval_4.png";
import './Tailbody.css';


export default class Tailbody extends Component{
    render(){
        return(
            <>
            <div className="part3">
                <div>
                    <p className='Reviews'>Reviews from readers</p>
                    <p className="Reviewsvalue">
                    Create custom landing pages with Omega that converts<br/> more visitors than any website.
                    </p>
                </div>
                <div className="card">
                <div className="reviewcard">
                    <div>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    </div>
                    <p className="reviewvalue">“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.”</p>
                    <div className="reviewlast">
                    <img src={ovall} alt=''/>
                    <div>
                    <p className="Reviewname">Darika Samak</p>
                    <p className="Reviewcomp">From Amazon.com</p>
                    </div>
                    </div>
                </div>
                <div className="reviewcard">
                <div>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={Blankstar} alt=""/>
                    </div>
                    <p className="reviewvalue">“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</p>
                    <div className="reviewlast1">
                    <img src={oval3} alt=''/>
                    <div>
                    <p className="Reviewname">Elsie Curtis</p>
                    <p className="Reviewcomp">From Amazon.com</p>
                    </div>
                    </div>

                </div>
                <div className="reviewcard">
                <div>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    </div>
                    <p className="reviewvalue">Must have book for students, who want to be Product Designer, UX Designer, or Interaction Designer.</p>
                    <div className="reviewlast1">
                    <img src={oval4} alt=''/>
                    <div>
                    <p className="Reviewname">Trashae Hubbard</p>
                    <p className="Reviewcomp">From Amazon.com</p>
                    </div>
                    </div>

                </div>
                </div>
            <a className="linkss" href="">Check all 3,583 reviews on Amazon.com</a>
            </div>
            </>
        )
    }
}