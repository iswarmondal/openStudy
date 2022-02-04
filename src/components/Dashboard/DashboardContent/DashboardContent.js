import Font from "../../Font/Font";
import Points from "../../Points/Points";
import GroupMembers from '../../GroupMembers/GroupMembers';
import classes from './DashboardContent.module.css';

const DashboardContent = () => {
    const members = [
        { name: "Iswar", points: "200", },
        { name: "Ayush", points: "100", },
        { name: "Abhishek", points: "40", },
        { name: "Balgobind", points: "80", },
        { name: "Chandra", points: "150", },
        { name: "Kajal", points: "120", },
        { name: "Amit", points: "140", },
        { name: "Dipti", points: "700", }
    ]
    return (
        <div className={classes.container}>
            <Font center={true} textContent={"Your Points"} />
            <Points textContent={12} />
            <Font center={true} textContent={"Your Party"} />
            <div className={classes.memberList} >
                {members.map((member) => <GroupMembers key={member.name} center={true} name={member.name} points={member.points} />)}
            </div>
        </div>
    )
}

export default DashboardContent;