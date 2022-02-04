import classes from './Button.module.css';

const Button = ({ small, textContent, center }) => {
    return (
        <div className={`${classes.btn} ${small ? classes.small : ''}`} style={center ? {"margin": "auto"} : {}}>
            {textContent}
            {console.log(`classes.btn ${small ? 'classes.small' : ''}`)}
        </div>
    )
}

export default Button;