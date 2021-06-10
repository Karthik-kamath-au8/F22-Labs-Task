import React, { Component } from 'react';
import TailRight from '../Assests/tail-right.png';
import "./Price.css"



export default class Price extends Component{
    render(){
        return(
            <div className="part6">
            <div>
                <p className="price">Pricing & Plans</p>
                <p className="pricevalue">Create custom landing pages with Omega that converts <br/> more visitors than any website.</p>
            </div>
            <div className="pricecard">
                <div className="pricerectangle">
                    <p className="limited">Limited</p>
                    <p className="pricefree">FREE</p>
                    <p className="pricechapter">Get a free chapter of our book right now.</p>
                    <p className="email">Email address</p>
                    <button className="pricebutton">Send free chapter</button>

                </div>
                <div className="pricerectangle">
                <p className="limited">Only eBook</p>
                <p className="pricefree">$29</p>
                <p className="pricepur">One time purchase</p>
                <p className="pricechapter">Get the eBook version + Audio version of the book.</p>
                <div className="btn4">
                <button className="pricebutton1">Buy from Amazon</button>
                </div>

                </div>
                <div className="pricerectangle">
                <p className="limited">Everything</p>
                <p className="pricefree">$49</p>
                <p className="pricepur">One time purchase</p>
                <p className="pricechapter">Hardcover + eBook version + Audio version of the book..</p>
                <div className="btn4">
                <button className="pricebutton1">Buy from Amazon</button>
                </div>

                </div>
            </div>
            <div className="tailarrow">
                <div className="tailaction">
                <div className="tailprice">
                    <img src={TailRight} alt=""/>
                </div>
                <div className="taillast">
                <p className="tailvl">Can I use Omega for my clients?</p>
                
                <p className="tailans">Absolutely. The Envato Theme license allows you to build a websites <br/> for personal use or for a client. User Omega for your clients.</p>
                </div>
                </div>
                <div className="tailaction">
                <div className="tailprice">
                    <img src={TailRight} alt=""/>
                </div>
                <div className="taillast">
                <p className="tailvl">Do I get free updates?</p>
                
                <p className="tailans">Yes. We update all of our themes regularly, plus are constantly <br/> adding new components, pages, and features to our themes.<br/> Purchase once and get lifetime updates.</p>
                </div>
                </div>
            </div>
            <div className="tailarrow">
                <div className="tailaction">
                <div className="tailprice">
                    <img src={TailRight} alt=""/>
                </div>
                <div className="taillast">
                <p className="tailvl">Does it work with WordPress?</p>
                
                <p className="tailans">Create custom landing pages with Omega that converts more <br/> visitors than any website. With lots of unique blocks, you can easily <br/> build a page without any design or custom coding. </p>
                </div>
                </div>
                <div className="tailaction">
                <div className="tailprice">
                    <img src={TailRight} alt=""/>
                </div>
                <div className="taillast">
                <p className="tailvl">Will you provide support?</p>
                
                <p className="tailans">With lots of unique blocks, you can easily build a page without any <br/> design or custom coding. with Omega that converts more visitors <br/> than any website.</p>
                </div>
                </div>
            </div>

            </div>

        )
    }
}