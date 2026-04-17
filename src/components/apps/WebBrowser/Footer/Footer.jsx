import "./Footer.css";

import Html from '../../../../assets/icons/WebBrowser/html.png';
import InternetCorner from '../../../../assets/icons/WebBrowser/world.png';

export default function Footer() {
    return (
        <div className="footer">
            <div className="html">
                <img src={Html} alt="HTML" />
            </div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="internet-corner">
                <img src={InternetCorner} alt="World" />
                <p>Internet</p>
            </div>
        </div>
    )
}