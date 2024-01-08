import { useState } from "react"


// trainee = {
// { 
//     id: 0, 
//     firstname: 'Omar', 
//     lastname: 'Alaoui', 
//     birthdate: '2000-01-01', 
//     age: 22, 
//     gender: 'male', 
//     group: 'DEV 101', 
//     num: 3, 
//     average: 80 
// },


export default function TrainerAdd(){

    const [TraineeFirstName, setTraineeFirstName] = useState('')
    const [TraineeLastName, setTraineeLastName] = useState('')
    const [TraineeBirthDate, setTraineeBirthDate] = useState('')
    const [TraineeGender, setTraineeGender] = useState('')
    const [TraineeGroup, setTraineeGroup] = useState('')


    const tryAddNewTrainer = (e) => {
        
    }
    
    return(
        <div className="w-full h-full flex flex-col justify-center items-center p-12">
            <form action=""
                className="bg-slate-100 shadow-2xl rounded-xl p-5 min-w-[50%]
                            flex gap-4 flex-col">
                <h1 className="text-2xl text-teal-700 font-bold mb-5">Create New Branch</h1>
                <div className="flex flex-col gap-2 px-6">

                    <label htmlFor="firstname"
                        className="text-xl text-teal-700">
                        First Name
                    </label>
                    <input type="text" name="firstname" id="firstname"
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700"
                            onChange={(e) => setTraineeFirstName(e.target.value)}/>
                    
                    <label htmlFor="lastname"
                        className="text-xl text-teal-700">
                        Last Name
                    </label>
                    <input type="text" name="lastname" id="lastname"
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700"
                            onChange={(e) => setTraineeLastName(e.target.value)}/>


                    <label htmlFor="birthdate"
                        className="text-xl text-teal-700">
                        Birth Date
                    </label>

                    <input type="date" name="birthdate" id="birthdate" max={'2002-01-01'} min={"1970-01-01"}
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700"
                            onChange={(e) => setTraineeBirthDate(e.target.value)}/>


                    <label htmlFor="gender"
                        className="text-xl text-teal-700">
                        Gender
                    </label>
                    {/* radio */}
                    <div className="flex flex-row gap-6 jsutify-center items-center w-full px-4">
                        <div className="flex flex-row gap-2 jsutify-center items-center">
                            <input type="radio" name="gender" id="male"
                                    className="mb-2 p-4 py-2 rounded-xl text-lg outline-none"
                                    onChange={(e) => setTraineeGender(e.target.value)}/>
                            <label htmlFor="male"
                                className="text-xl text-teal-700">
                                Male
                            </label>
                        </div>
                        <div className="flex flex-row gap-2 jsutify-center items-center">
                            <input type="radio" name="gender" id="female"
                                    className="mb-2 p-4 py-2 text-lg outline-none"
                                    onChange={(e) => setTraineeGender(e.target.value)}/>
                            <label htmlFor="female"
                                className="text-xl text-teal-700">
                                Female
                            </label>
                        </div>
                    </div>

                    <label htmlFor="group"
                        className="text-xl text-teal-700">
                        Group
                    </label>

                    <input type="text" name="group" id="group"
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700"
                            onChange={(e) => setTraineeGroup(e.target.value)}/>


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
                                onClick={tryAddNewTrainer}/>
                    </div>
                
            </form>
        </div>
    )
}