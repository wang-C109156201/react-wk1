import {Grid} from 'antd';
const { useBreakpoint } = Grid;

export default function Header(props) {
    const {Name} = props;
    const {sm} = useBreakpoint();
    const styles ={
        Header:{
            backgroundColor: '#00979c',
            height: '30vh',
            color: '#fff',
            fontSize: '0.8rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        headerAvatar :{
            width: '10rem',
            height: '10rem',
        },
        headerTitle :{
            fontSize: '2em',
            textTransform: 'uppercase',
            fontWeight: '200',
        },
          
        headerSlogan: {
            fontSize: '1.25em',
            textTransform: 'uppercase',
            margin: 0
        },
        dividerLight,
        dividerDark :{
            width: '250px',
            borderTop: 'solid 5px',
            marginLeft: 'auto',
            marginRight: 'auto',
            opacity: 0.7,
        },
        dividerLight :{
            borderColor: '#fff',
        },

        dividerDark :{
            borderColor: '#2c3e50',
        }
    }

    return (
        <header className="header">
            <div className="container d-flex flex-column align-items-center">
                <img style={styles.headerAvatar} src="./images/avatar.png" alt="avatar"/>
                <h1 style={styles.headerTitle} >{Name}</h1>
                <hr style={styles.dividerLight} />
                <p style={styles.headerSlogan}>Slogan</p>
            </div>
        </header>
    );
}