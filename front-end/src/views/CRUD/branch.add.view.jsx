import { useState } from "react"


// branch = {
//     id : 0,
//     name : 'Development Digital',
//     description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis error dolore illo architecto. Veritatis repellat sequi saepe eos ab ullam similique, animi omnis tempore debitis tempora quo voluptatem reiciendis recusandae?',
//     numGroups : 1,
//     modules : ['M201','M202','M203'],
// },
export default function BranchAdd(){

    const [branchNmae, setBranchName] = useState('')
    const [branchDescription, setBranchDescription] = useState('')
    const [branchGroups, setBranchGroups] = useState([])
    const [branchModules, setBranchModules] = useState([])


    const tryAddNewBranch = (e) => {
        
    }
    
    return(
        <div className="w-full h-full flex flex-col justify-center items-center p-12">
            <form action=""
                className="bg-slate-100 shadow-2xl rounded-xl p-5 min-w-[50%]
                            flex gap-4 flex-col">
                <h1 className="text-2xl text-teal-700 font-bold mb-5">Create New Branch</h1>
                <div className="flex flex-col gap-2 px-6">

                    <label htmlFor="name"
                        className="text-xl text-teal-700">
                        Name
                    </label>
                    <input type="text" name="name" id="name"
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700"
                            onChange={(e) => setBranchName(e.target.value)}/>
                    <label htmlFor="description"
                        className="text-xl text-teal-700">
                        Description
                    </label>
                    <textarea name="description" id="description"
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700" onChange={(e) => setBranchDescription(e.target.value)}/>
                    <label htmlFor="groups"
                        className="text-xl text-teal-700">
                        Groups
                    </label>
                    {/* MultiSelection box */}
                    <label htmlFor="modules"
                        className="text-xl text-teal-700">
                        Modules
                    </label>
                    {/* MultiSelection box */}
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
                                onClick={tryAddNewBranch}/>
                    </div>
                
            </form>
        </div>
    )
}