import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function GroupCard(props){
    const {groupID} = props;
    const groups = useSelector(state => state.groups.groups)
    const group = groups.find(g => g.id ==groupID)
    return (
        <Link className="flex flex-col justify-center items-center
                        bg-white rounded-xl shadow-lg p-4 w-64
                        border-2 border-teal-600
                        hover:bg-teal-50 cursor-pointer"
                to={`/groups/details/${group.name.toLowerCase().replace(/ /g, '-')}/`}>
            <h1 className="text-2xl font-bold">{group.name}</h1>
            <span>developement digital</span>
            <span>{group.numStagaires} stagaires</span>
        </Link>
    )
}