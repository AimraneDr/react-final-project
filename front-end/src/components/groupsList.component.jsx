import { useSelector } from "react-redux";
import GroupCard from "./groupCard.component";

export default function GroupsList(props){
    const {branchID} = props;
    const groups = useSelector(state => state.groups.groups)

    return (
        <div className="p-5">
            {/* <h2 className="text-lg font-bold text-teal-800 underline underline-offset-8">
                {branches.find(b => b.id == branchID).name} 
            </h2> */}

            <ul className="flex justify-center gap-12 flex-wrap p-6 ">
                {
                    branchID != undefined ? groups.filter(g => g.branchID == branchID)
                                    .map((g, i) => <GroupCard groupID={g.id}/>)
                            : 'NONE'
                }


                <li className="flex flex-col justify-center items-center
                        bg-white rounded-xl shadow-lg p-4 w-64
                        border-2 border-teal-600 text-teal-600
                        hover:bg-teal-50 cursor-pointer">
                    <span className="text-6xl font-extrabold" role="img" aria-label="add">+</span>
                    <span>Add Group</span>
                </li>
            </ul>
        </div>
    )
} 