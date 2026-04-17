import "./Menu.css";

import X from '../../../../assets/icons/WebBrowser/X.png';
import Refresh from '../../../../assets/icons/WebBrowser/refresh-page.png';
import Homepage from '../../../../assets/icons/WebBrowser/homepage.png';
import Search from '../../../../assets/icons/WebBrowser/search_web.png';
import Favorites from '../../../../assets/icons/WebBrowser/directory_favorites.png';
import History from '../../../../assets/icons/WebBrowser/history.png';
import Envelope from '../../../../assets/icons/WebBrowser/envelope.png';
import Print from '../../../../assets/icons/WebBrowser/printer.png';
import Page from '../../../../assets/icons/WebBrowser/html.png';

export default function Menu(props) {
    return (
        <div className="menu">
            <div className="menu-box">
                <div className="menu-options">  
                    <div className="lateral-block"></div>
                    <button>File</button>
                    <button>Edit</button>
                    <button>View</button>
                    <button>Favorites</button>
                    <button>Tools</button>
                    <button>Help</button>
                </div>
                <div className="menu-navigation">
                    <div className="lateral-block"></div>
                    <button className="menu-navigation__button">⇦ Back ⏷</button>
                    <button className="menu-navigation__button">➡ ⏷</button>
                    <button className="menu-navigation__button">
                        <img src={X} alt="Cancel" className="menu-icon" />
                    </button>
                    <button className="menu-navigation__button">
                        <img src={Refresh} alt="Refresh" className="menu-icon" />
                    </button>
                    <button className="menu-navigation__button">
                        <img src={Homepage} alt="Homepage" className="menu-icon" />
                    </button>
                    <div className="divisor"></div>
                    <button className="menu-navigation__button">
                        <img src={Search} alt="Search" className="menu-icon" />
                        <p>Search</p>
                    </button>
                    <button className="menu-navigation__button">
                        <img src={Favorites} alt="Favorites" className="menu-icon" />
                        <p>Favorites</p>
                    </button>
                    <button className="menu-navigation__button">
                        <img src={History} alt="History" className="menu-icon" />
                        <p>History</p>
                    </button>
                    <div className="divisor"></div>
                    <button className="menu-navigation__button">
                        <img src={Envelope} alt="Email" className="menu-icon" />
                        ⏷
                    </button>
                    <button className="menu-navigation__button">
                        <img src={Print} alt="Print" className="menu-icon" />
                    </button>
                </div>
                <div className="menu-search">
                    <div className="lateral-block"></div>
                    <p style={{ paddingRight: '0.2rem' }}>Address</p>
                    <div className="search-box">
                        <div className="search-box__input">
                            <img src={Page} alt="Page" className="menu-icon" />
                            <p>{props.link}</p>
                        </div>
                        <button className="search-box__button">⏷</button>
                    </div>
                    <button className="menu-navigation__button">
                        <p>Go</p>
                    </button>
                    <div className="divisor"></div>
                    <div className="lateral-block"></div>
                    <button className="menu-navigation__button">Links »</button>
                </div>
            </div>
        </div>
    )
}