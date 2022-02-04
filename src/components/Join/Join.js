import Font from '../Font/Font';
import classes from './Join.module.css';
import ButtonSec from '../ButtonSec/ButtonSec';
import Button from '../Button/Button';
import Points from '../Points/Points';

const Join = () => {
    return (
        <div className={classes.container}>
            <div className={classes.joinus}>
                <div className={classes.title}><Points textContent={"Live Study"} /></div>
                <div className={classes.joiningForm}>
                    <input type="text" placeholder='Group Code' />
                    <Button small={true} textContent={"Join"} />
                </div>
                <div className={classes.generateCode}>
                    <Button center={true} small={true} textContent={"GENERATE GROUP CODE"} /></div>
                <ButtonSec textContent="CODE_HERE" />
            </div>
        </div>
    )
}

export default Join;