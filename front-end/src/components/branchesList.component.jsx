import { useDispatch, useSelector } from "react-redux";
import BranchCard from "./branchCard.component";
import { useEffect } from "react";
import { getBranches } from "../redux/actions/branch.actions";


export default function BranchesList(){
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBranches())
    }, [])
    const branches = useSelector(state => state.branches.branches)
    return (
        <div className="">
            <h2 className="text-2xl text-teal-500 font-bold mb-5">
                Our Branches
            </h2>
            <div className="flex gap-12 flex-wrap justify-center ">
                {
                    branches.map((b) => {
                        return (
                            <>
                                <BranchCard branch={b}/>
                            </>
                        )
                    })
                }
            </div>
        </div>

    )
}