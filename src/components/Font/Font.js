import classes from './Font.module.css';

const Font = ({ small, textContent, center, big }) => {
    return <div className={`${classes.font} ${small && classes.small} ${center && classes.center} ${big && classes.big}`}>{textContent}</div>
}

export default Font;