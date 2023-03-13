import Header from '../components/Header';
import Footer from '../components/Footer';
import Article from '../components/Article';

function Home() {
    const styles={
        mainLayout:{
            display:'grid',
            minHeight: '100vh',
            gridTemplateAreas:`
                'header'
                'content'
                'footer'        
            `, 
            gridTemplateRows: 'auto 1fr auto',
            gap: '1rem',
        },
          
        layoutHeader:{
            gridArea:'header'
        },
          
        layoutContent:{
            gridArea: 'content',
        },
          
        layoutFooter:{
            gridArea: 'footer'
        }
    }
    return(
        
        <div className="container" style={styles.mainLayout} >
            <Header 
                style={styles.layoutHeader}
                Name = "Name"
            />
            <Article style={styles.layoutContent} ></Article>
            <Footer style={styles.layoutFooter}></Footer>
        </div>
    );
}
export default Home;