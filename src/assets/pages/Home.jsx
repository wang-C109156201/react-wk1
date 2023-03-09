import Header from '../components/Header';
import Footer from '../components/Footer';
import Article from '../components/Article';

function Home(params) {
    return(
        <div className="container main-layout">
            <Header
                Name = "Name"
                className="layout-header"
            />
            <Article className="layout-content"></Article>
            <Footer className="layout-footer"></Footer>
        </div>
    );
}
export default Home;