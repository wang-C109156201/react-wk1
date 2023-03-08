import Header from '../components/Header';
import Footer from './assets/components/Footer';
import Article from './assets/components/Article';

function Home(params) {
    return(
        <div>
            <Header
                Home = "Home"
                Slogan = "Slogan"
            />
            <Article></Article>
            <Footer></Footer>
        </div>
    );
}
export default Home;