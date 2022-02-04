import classes from './Members.module.css';

const Members = ({value}) => {
    return (
        <div className={classes.container}>{value}</div>
    )
}

export default Members;