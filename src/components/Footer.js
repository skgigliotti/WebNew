import React from 'react';
import './Components.css';
import { SocialIcon } from 'react-social-icons';


class Footer extends React.Component {
    render() {
        return (

            <div className="footer">
                <div className="icons">

                    <SocialIcon url="https://www.linkedin.com/in/sophia-gigliotti/" bgColor="#bbb" />
                    <SocialIcon url="https://github.com/skgigliotti" bgColor="#bbb" />
                    <SocialIcon url="http://twitter.com/sophtwaredev" bgColor="#bbb" />
                </div>
            </div>

        );
    }

}

export default Footer;