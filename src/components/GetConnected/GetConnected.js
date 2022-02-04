import Font from '../Font/Font';
import classes from './GetConnected.module.css';
import Button from '../Button/Button';

const GetConnected = () => {
    return (
        <div className={classes.container}>
            <div className={classes.joinus}>
                <div className={classes.joinElement}>
                    <Font center={true} small={true} textContent={"Join OpenStudy"} />
                    <Button center={true} textContent={"Sign up With Google"} />
                </div>
                <div className={classes.login}>
                    <Font center={true} small={true} textContent={"Login"} />
                    <Button center={true} textContent={"Login With Google"} />
                </div>
            </div>
        </div>
    )
}

export default GetConnected;