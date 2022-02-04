import Font from '../../Font/Font';
import Tagline from '../../Tagline.js/Tagline';
import classes from './HomepageContent.module.css';

const HomepageContent = () => {
    return (
        <div className={classes.container}>
            <Font big={true} textContent={"Study More efficiently using video chat"} />
            <Tagline big={true} textContent={"Bring your friends to study with you"} />
            {/* Logo Here */}
        </div>
    )
}

export default HomepageContent;