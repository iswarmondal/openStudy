import classes from './ButtonSec.module.css';

const ButtonSec = ({icon, textContent}) => {
    return (
        <div className={classes.btn}>
            <div>{textContent}</div>
            <div>Icon</div>
        </div>
    )
}

export default ButtonSec;