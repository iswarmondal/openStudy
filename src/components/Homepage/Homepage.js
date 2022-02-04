import GetConnected from '../GetConnected/GetConnected';
import HomepageContent from './HomepageContent/HomepageContent';
import classes from './Homepage.module.css';

const Homepage = () => {
    return (
        <div className={classes.container}>
            <div className={classes.content}><HomepageContent /></div>
            <div className={classes.join}><GetConnected /></div>
        </div>
    )
}

export default Homepage;