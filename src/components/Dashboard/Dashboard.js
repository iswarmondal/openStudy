import Font from "../Font/Font";
import HomepageContent from "../Homepage/HomepageContent/HomepageContent";
import Join from '../Join/Join'
import classes from './Dashboard.module.css';
import DashboardContent from "./DashboardContent/DashboardContent";

const Dashboard = () => {
    return (
        <div className={classes.container}>
            <div className={classes.join}>
                <Font textContent="Welcome" />
                <div className={classes.description}>
                    "Future is in your hand"
                </div>
                <Join />
            </div>
            <div className={classes.content}><DashboardContent /></div>
        </div>
    )
}

export default Dashboard;