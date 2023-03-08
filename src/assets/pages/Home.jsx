import Header from '../components/Header';
import Footer from '../components/Footer';
import Article from '../components/Article';

function Home(params) {
    return(
        <div>
            <Header
                Name = "Name"
                Slogan = "Slogan"
            />
            <Article></Article>
            <Footer></Footer>
        </div>
    );
}
export default Home;