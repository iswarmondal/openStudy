import classes from './AllMembers.module.css';
import Button from '../Button/Button';
import Members from '../Members/Members'

const AllMembers = () => {
    const memebersValue = ["","","","","","","","",""];
    const buttons = ['Present', 'Leave', 'Share']
    return (
        <div>
            <div className={classes.container}>
                {memebersValue.map((memeberValue) => <Members value={memeberValue} />)}
            </div>
            <div className={classes.action}>
                {buttons.map((button) => <Button small={true} textContent={button} />)}
            </div>
        </div>
    )
}

export default AllMembers;