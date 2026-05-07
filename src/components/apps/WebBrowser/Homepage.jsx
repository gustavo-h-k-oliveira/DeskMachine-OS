import "./WebBrowser.css";
import "./Homepage.css";
import Menu from "./Menu/Menu";
import Footer from "./Footer/Footer";

import Yuhoo from '../../../assets/images/yuhoo!.png';

function HomepageTopics(props) {
  return (
    <li>
      <a href="/topic" onClick={props.onClick}><strong>{props.mainTopic}</strong></a> -- <a href="/subtopic1" onClick={props.onClick}>{props.subTopic1}</a>, <a href="/subtopic2" onClick={props.onClick}>{props.subTopic2}</a>, <a href="/subtopic3" onClick={props.onClick}>{props.subTopic3}</a>, <a href="/more" onClick={props.onClick}>...</a>
    </li>
  );
}

export default function Homepage() {
  const handleMockLinkClick = (event) => {
    event.preventDefault();
  };

  return (
    <div className="frame">
      <Menu link="http://www.yuhoo.com"/>
      <div className="homepage-content">
        <div className="homepage-main">
          <div className="homepage-shortcuts">
            <a href="/new" alt="Sites novos" onClick={handleMockLinkClick}>What's new?</a>
            <a href="/cool" alt="Sites legais" onClick={handleMockLinkClick}>What's cool?</a>
            <a href="/popular" alt="Sites populares" onClick={handleMockLinkClick}>What's popular?</a>
          </div>
          <img src={Yuhoo} alt="Yuhoo Logo" className="homepage-logo" />
          <div className="homepage-shortcuts">
            <a href="/stats" alt="Estatísticas de sites" onClick={handleMockLinkClick}>Stats</a>
            <a href="/random" alt="Site aleatório" onClick={handleMockLinkClick}>Random Link</a>
            <a href="/mail" alt="E-Mail" onClick={handleMockLinkClick}>Mail</a>
          </div>
        </div>
        <div className="homepage-search">
          <input type="text" placeholder="Search the web..." />
          <button>Search</button>
          <a href="/options" alt="Opções de pesquisa">Options</a>
        </div>
        <div className="homepage-favorites">
          <a href="/yellow-pages" alt="Páginas amarelas" onClick={handleMockLinkClick}>Yellow Pages</a>
          <a href="/people" alt="Procurar pessoas" onClick={handleMockLinkClick}>People Search</a>
          <a href="/maps" alt="Mapas" onClick={handleMockLinkClick}>City Maps</a>
          <a href="/news" alt="Notícias" onClick={handleMockLinkClick}>News Headlines</a>
          <a href="/stocks" alt="Bolsa de ações" onClick={handleMockLinkClick}>Stock Quotes</a>
          <a href="/sports" alt="Esportes" onClick={handleMockLinkClick}>Sports Scores</a>
        </div>
        <ul>
          <HomepageTopics mainTopic="Arts" subTopic1="Humanities" subTopic2="Photography" subTopic3="Architecture" onClick={handleMockLinkClick} />
          <HomepageTopics mainTopic="Business and Economy [Xtra!]" subTopic1="Directory" subTopic2="Investments" subTopic3="Classifieds" onClick={handleMockLinkClick} />
          <HomepageTopics mainTopic="Computers and Internet [Xtra!]" subTopic1="WWW" subTopic2="Software" subTopic3="Multimedia" onClick={handleMockLinkClick} />
          <HomepageTopics mainTopic="Education" subTopic1="Universities" subTopic2="K-12" subTopic3="Courses" onClick={handleMockLinkClick} />
          <HomepageTopics mainTopic="Entertainment [Xtra!]" subTopic1="Movies" subTopic2="Music" subTopic3="Magazines" onClick={handleMockLinkClick} />
          <HomepageTopics mainTopic="Government" subTopic1="Politics" subTopic2="Agencies" subTopic3="Military" onClick={handleMockLinkClick} />
          <HomepageTopics mainTopic="Health [Xtra!]" subTopic1="Medicine" subTopic2="Diseases" subTopic3="Fitness" onClick={handleMockLinkClick} />
          <HomepageTopics mainTopic="News [Xtra!]" subTopic1="World" subTopic2="Daily" subTopic3="Current Events" onClick={handleMockLinkClick} />
          <HomepageTopics mainTopic="Recreation and Sports" subTopic1="Travel" subTopic2="Sports" subTopic3="Outdoors" onClick={handleMockLinkClick} />
          <HomepageTopics mainTopic="Reference" subTopic1="Libraries" subTopic2="Dictionaries" subTopic3="Phone Numbers" onClick={handleMockLinkClick} />
          <HomepageTopics mainTopic="Science" subTopic1="Biology" subTopic2="Astronomy" subTopic3="Engineering" onClick={handleMockLinkClick} />
          <HomepageTopics mainTopic="Social Science" subTopic1="Anthropology" subTopic2="Sociology" subTopic3="Economics" onClick={handleMockLinkClick} />
          <HomepageTopics mainTopic="Society and Culture" subTopic1="People" subTopic2="Environment" subTopic3="Religion" onClick={handleMockLinkClick} />
        </ul>
        <p><a href="/us" onClick={handleMockLinkClick}>Yuhoo! US</a> | <a href="/de" onClick={handleMockLinkClick}>Yuhoo! Deutschland</a> | <a href="/jp" onClick={handleMockLinkClick}>ユーフー! 日本</a></p>
        <p><a href="/about" onClick={handleMockLinkClick}>About Yuhoo!</a> | <a href="/shop" onClick={handleMockLinkClick}>Yuhoo! Shop</a> | <a href="/chat" onClick={handleMockLinkClick}>Yuhoo! Chat</a></p>
      </div>
      <Footer />
    </div>
  );
}
