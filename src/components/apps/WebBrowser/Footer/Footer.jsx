import "./Footer.css";

import Html from '../../../../assets/icons/WebBrowser/html.png';
import InternetCorner from '../../../../assets/icons/WebBrowser/world.png';

export default function Footer() {
    return (
        <div className="footer">
            <div className="html">
                <img src={Html} alt="HTML" />
            </div>
            <div className="square" />
            <div className="square" />
            <div className="internet-corner">
                <span className="internet-corner-text">
                    <img src={InternetCorner} alt="World" />
                    <p>Internet</p>
                </span>
                <div className='resize-handle' />
            </div>
        </div>
    )
}