import { useState } from "react"


// module = {
//     id : 'M201',
//     name : 'Culture Technique',
//     description : '',
//     totalHours : 40,
//     nature : 'local', // local || regeaux
// },
export default function ModuleAdd(){

    const [moduleName, setModuleName] = useState('')
    const [moduleDescription, setModuleDescription] = useState('')
    const [moduleTotalHours, setModuleTotalHours] = useState(0)
    const [moduleNature, setModuleNature] = useState('')


    const tryAddNewModule = (e) => {
        
    }
    
    return(
        <div className="w-full h-full flex flex-col justify-center items-center p-12">
            <form action=""
                className="bg-slate-100 shadow-2xl rounded-xl p-5 min-w-[50%]
                            flex gap-4 flex-col">
                <h1 className="text-2xl text-teal-700 font-bold mb-5">Create New Module</h1>
                <div className="flex flex-col gap-2 px-6">

                    <label htmlFor="name"
                        className="text-xl text-teal-700">
                        Name
                    </label>
                    <input type="text" name="name" id="name"
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700"
                            onChange={(e) => setModuleName(e.target.value)}/>
                    <label htmlFor="description"
                        className="text-xl text-teal-700">
                        Description
                    </label>
                    <textarea name="description" id="description"
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700" 
                            onChange={(e) => setModuleDescription(e.target.value)}/>

                    <label htmlFor="totalHours"
                        className="text-xl text-teal-700">
                        Total Hours
                    </label>
                    <input type="number" name="totalHours" id="totalHours" min={0} max={150}
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700" 
                            onChange={(e) => setModuleTotalHours(e.target.value)}/>
                    <label htmlFor="nature"
                        className="text-xl text-teal-700">
                        Nature
                    </label>
                    <select name="nature" id="nature"
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700" 
                            onChange={(e) => setModuleNature(e.target.value)}>
                        <option value="local">Local</option>
                        <option value="regeaux">Regeaux</option>
                    </select>
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
                                onClick={tryAddNewModule}/>
                    </div>
                
            </form>
        </div>
    )
}