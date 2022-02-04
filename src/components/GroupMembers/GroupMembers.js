import classes from './GroupMembers.module.css';

const GroupMembers = ({name, points, center}) => {
    return (
        <div className={classes.container} style={center && {"marginLeft": "auto", "marginRight": "auto"}}>
            <div>{name}</div>
            <div>({points})</div>
        </div>
    )
}

export default GroupMembers;