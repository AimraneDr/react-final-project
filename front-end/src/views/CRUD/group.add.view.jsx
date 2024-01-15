import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addGroup } from "../../redux/actions/group.actions"
import SearchSelect from "../../components/searchSelect.component"
import { getBranches } from "../../redux/actions/branch.actions"
import { getModules } from "../../redux/actions/module.actions"
import { getTrainees } from "../../redux/actions/trainee.actions"


// group = {
// {
//     id : 9,
//     branchID : 1,
//     name : 'OWFS 202',
//     numStagaires : 24,
//     totalHours : 0,
//     hoursPreWeek : 0,
//     finishedModules : [{moduleID: 'M201', trainerID : 2}],
//     currentModules : [{moduleID: 'M202', trainerID : 4}],
//     stagaireIDs : [13]
// },
export default function GroupAdd(props){
    const [BranchID, setBranchID] = useState(0)
    const [groupName, setGroupName] = useState('')
    const [groupFinishedModules, setGroupFinishedModules] = useState([])
    const [groupCurrentModules, setGroupCurrentModules] = useState([])
    const [groupStagaireIDs, setGroupStagaireIDs] = useState([])

    const dispatch = useDispatch()
    const branches = useSelector(state => state.branches.branches)
    const modules = useSelector(state => state.modules.modules)
    const trainees = useSelector(state => state.trainees.trainees)

    useEffect(()=>{
        dispatch(getBranches())
        dispatch(getModules())
        dispatch(getTrainees())
    }, [dispatch])

    const tryAddNewGroup = (e) => {
        dispatch(addGroup(
            {
                id : 0,
                branchID : BranchID,
                name : groupName,
                numStagaires : groupStagaireIDs.length,
                finishedModules : groupFinishedModules,
                currentModules : groupCurrentModules,
                stagaireIDs : groupStagaireIDs
            }
        ))
        debugger;

        alert('Group Added')
    }
    
    return(
        <div className="w-full h-full flex flex-col justify-center items-center p-12">
            <form action=""
                className="bg-slate-100 shadow-2xl rounded-xl p-5 min-w-[50%]
                            flex gap-4 flex-col">
                <h1 className="text-2xl text-teal-700 font-bold mb-5">Create New Branch</h1>
                <div className="flex flex-col gap-2 px-6">


                    <label htmlFor="branchName"
                        className="text-xl text-teal-700">
                        Branch Name
                    </label>
                    <SearchSelect id="branchID" state={{val:BranchID, set:setBranchID}}
                                options={branches.map(b => {return {val : b.id, label : b.name}})}/>
                    
                    <label htmlFor="name"
                        className="text-xl text-teal-700">
                        Name
                    </label>
                    <input type="text" id="name"
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700"
                            onChange={(e) => setGroupName(e.target.value)}/>
                    <label htmlFor="description"
                        className="text-xl text-teal-700">
                        Description
                    </label>
                    <textarea id="description"
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700"
                            onChange={(e) => setGroupDescription(e.target.value)}/>
                            
                    <label htmlFor="stagaireIDs"
                        className="text-xl text-teal-700">
                        Stagaire IDs
                    </label>
                    <SearchSelect options={trainees.map(t => {return {val : t.id, label: t.name}})} multiple name='stagaireIDs' id='stagaireIDs'
                                state={{val: groupStagaireIDs, set: setGroupStagaireIDs}}/>
                    
                </div>

                <div className="flex flex-row justify-between">
                        <input type="reset" value="Cancel" 
                                className="p-4 py-2 border-2 border-red-500 rounded-lg
                                        text-lg text-red-700 hover:bg-red-500 hover:text-slate-100 font-semibold
                                        transition-all ease-in-out duration-200"/>
                        <input type="submit" value="Add" 
                                className="p-4 py-2 border-2 border-teal-500 rounded-lg
                                        text-lg text-teal-700 hover:bg-teal-500 hover:text-slate-100 font-bold
                                        transition-all ease-in-out duration-200"
                                onClick={tryAddNewGroup}/>
                    </div>
                
            </form>
        </div>
    )
}