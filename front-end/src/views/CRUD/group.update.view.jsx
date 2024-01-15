import { useState } from "react"
import { useParams } from "react-router-dom"
import { updateGroup } from "../../redux/actions/group.actions"
import { useDispatch, useSelector } from "react-redux"


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
export default function GroupUpdate(props){
    const {id} = useParams()

    // fetch current group from database
    const group = useSelector(state => state.groups.find(g => g.id === id))
    const branches = useSelector(state => state.branches)


    const [BranchID, setBranchID] = useState(group.BranchID)
    const [groupName, setGroupName] = useState(group.name)
    const [groupFinishedModules, setGroupFinishedModules] = useState(group.finishedModules)
    const [groupCurrentModules, setGroupCurrentModules] = useState(group.currentModules)
    const [groupStagaireIDs, setGroupStagaireIDs] = useState(group.stagaireIDs)


    const tryUpdateGroup = (e) => {
        const dispatcher = useDispatch()
        dispatcher(updateGroup(
            group.id,
            {
                branchID : BranchID,
                name : groupName,
                numStagaires : groupStagaireIDs.length,
                finishedModules : groupFinishedModules,
                currentModules : groupCurrentModules,
                stagaireIDs : groupStagaireIDs
            }
        ))

        alert('Group Updated')

        //rerender the component
        window.location.reload()
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

                    <select name="branchID" id="branchID"
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700"
                            onChange={(e) => setBranchID(e.target.value)}
                            value={group.BranchID}>
                        {
                            branches.map(b => {
                                <option value={b.BranchID}>{b.name}</option>
                            })
                        }
                    </select>
                    
                    <label htmlFor="name"
                        className="text-xl text-teal-700">
                        Name
                    </label>
                    <input type="text" name="name" id="name"
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700"
                            onChange={(e) => setGroupName(e.target.value)}
                            value={group.name}/>

                    <label htmlFor="finishedModules"
                        className="text-xl text-teal-700">
                        Finished Modules
                    </label>
                    <textarea name="finishedModules" id="finishedModules"
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700"
                            onChange={(e) => setGroupFinishedModules(e.target.value)}/>
                    <select name="finishedModules" id="finishedModules"
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700"
                            onChange={(e) => setGroupFinishedModules(e.target.value)}
                            value={group.finishedModules} multiple
                            >
                            {
                                useSelector(state => state.modules)
                                .filter(m => branches.find(b => b.branchID === BranchID && b.modules.includes(m.id)))
                                .map(m => {
                                    <option value={m.id}>{m.name}</option>
                                })
                            }
                    </select>

                    <label htmlFor="currentModules"
                        className="text-xl text-teal-700">
                        Current Modules
                    </label>

                    <select name="currentModules" id="currentModules"
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700"
                            onChange={(e) => setGroupCurrentModules(e.target.value)}
                            value={group.currentModules} multiple
                            >
                            {
                                useSelector(state => state.modules)
                                .filter(m => branches.find(b => b.branchID === BranchID && b.modules.includes(m.id)))
                                .map(m => {
                                    <option value={m.id}>{m.name}</option>
                                })
                            }
                    </select>

                    <label htmlFor="stagaireIDs"
                        className="text-xl text-teal-700">
                        Stagiaires
                    </label>
                    {/* add a SelectSearchBox */}

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
                                onClick={tryUpdateGroup}/>
                    </div>
                
            </form>
        </div>
    )
}