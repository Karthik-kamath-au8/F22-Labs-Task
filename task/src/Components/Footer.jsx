import React, { Component } from 'react';
import './Footer.css';


export default class Footer extends Component{
    render(){
        return(
            <>
            <div className="Footer">
                <p className="footername">Omega</p>
                <div className="spt">
                    <p>Support</p>
                    <p>
                    Privacy Policy
                    </p>
                    <p>Terms and Conditions</p>
                    
                </div>
                <p className="cc">© 2020 UXTheme, All Rights Reserved</p>
            </div>
            </>
        )
    }
}