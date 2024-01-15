import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GroupsList from "../components/groupsList.component";
import { useEffect } from "react";
import { getBranches } from "../redux/actions/branch.actions";


// localhost/branches/branchname/details
export default function BranchDetails(){
    const {name} = useParams();
    const dispatch = useDispatch();
    const branches = useSelector((state) => state.branches.branches);
    const branch = branches.find((b) => b.name === name.replace(/-/g, " "));

    useEffect(() => {
        dispatch(getBranches())
    }, [dispatch])

    if(!branch){
        return (
            <div className=" w-full flex flex-col items-stretch gap-8">
                <div className="h-[500px] bg-teal-50 flex justify-center items-center">
                    <h1 className="text-6xl font-bold text-teal-800
                                border-t-4 border-b-4 border-teal-800
                                py-3">
                        The Branch you specified does not exist.
                    </h1>
                </div>
            </div>
        )
    }    
    return(
        <div className=" w-full flex flex-col items-stretch gap-8">
            <div className="h-[500px] bg-teal-50 flex justify-center items-center">
                {/* add background image */}

                <h1 className="text-6xl font-bold text-teal-800 text-center
                            border-t-4 border-b-4 border-teal-800
                            py-3">
                    {branch.name.toUpperCase()}
                </h1>
            </div>

            <div className="grid grid-cols-2 gap-4 p-6">
                <div className="flex flex-col">
                    <h2 className="text-3xl text-teal-700 font-semibold text-center mb-6">Over View</h2>
                    <p className="text-lg text-pretty">
                        {branch.description}
                    </p>
                </div>
                <div className="flex flex-col items-center h-60">
                    <h2 className="text-3xl text-teal-700 font-semibold">Modules</h2>
                    {/* add modules list */}
                </div>
            </div>

            <div>
                <h2 className="text-3xl text-teal-700 font-semibold text-center mb-6">Groups</h2>
                <GroupsList branchID={branch.id}/>
            </div>
        </div>
    )
}