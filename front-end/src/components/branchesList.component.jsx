import { useSelector } from "react-redux";
import BranchCard from "./branchCard.component";


export default function BranchesList(){
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