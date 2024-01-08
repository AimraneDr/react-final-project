import { useState } from "react"


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
export default function GroupAdd(){

    const [BranchID, setBranchID] = useState(0)
    const [groupName, setGroupName] = useState('')
    const [groupDescription, setGroupDescription] = useState('')
    const [groupFinishedModules, setGroupFinishedModules] = useState([])
    const [groupCurrentModules, setGroupCurrentModules] = useState([])
    const [groupStagaireIDs, setGroupStagaireIDs] = useState([])


    const tryAddNewGroup = (e) => {
        
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
                    <input type="" name="branchID" id="branchID"
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700"
                            onChange={(e) => setBranchID(e.target.value)}/>
                    
                    <label htmlFor="name"
                        className="text-xl text-teal-700">
                        Name
                    </label>
                    <input type="text" name="name" id="name"
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700"
                            onChange={(e) => setGroupName(e.target.value)}/>
                    <label htmlFor="description"
                        className="text-xl text-teal-700">
                        Description
                    </label>
                    <textarea name="description" id="description"
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700"
                            onChange={(e) => setGroupDescription(e.target.value)}/>
                    <label htmlFor="finishedModules"
                        className="text-xl text-teal-700">
                        Finished Modules
                    </label>
                    <textarea name="finishedModules" id="finishedModules"
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700"
                            onChange={(e) => setGroupFinishedModules(e.target.value)}/>
                    <label htmlFor="currentModules"
                        className="text-xl text-teal-700">
                        Current Modules
                    </label>
                    <textarea name="currentModules" id="currentModules"
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700"
                            onChange={(e) => setGroupCurrentModules(e.target.value)}/>
                    <label htmlFor="stagaireIDs"
                        className="text-xl text-teal-700">
                        Stagaire IDs
                    </label>
                    <textarea name="stagaireIDs" id="stagaireIDs"
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700"
                            onChange={(e) => setGroupStagaireIDs(e.target.value)}/>
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