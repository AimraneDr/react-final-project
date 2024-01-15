import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { updateTrainer } from "../../redux/actions/trainer.actions"


// trainer = {
// { 
//     id: 0, 
//     firstname: 'Omar', 
//     lastname: 'Zitouni', 
//     age: 28, 
//     gender: 'male', 
//     title:'developement digital trainer'
// }

export default function TrainerUpdate(){
    const {id} = useParams()

    //fetxh trainer from database
    const trainer = useSelector(state => state.trainers.find(t => t.id === id))

    const [TrainerFirstName, setTrainerFirstName] = useState(trainer.firstname)
    const [TrainerLastName, setTrainerLastName] = useState(trainer.lastname)
    const [TrainerBirthDate, setTrainerBirthDate] = useState(trainer.birthdate)
    const [TrainerGender, setTrainerGender] = useState(trainer.gender)
    const [TrainerTitle, setTrainerTitle] = useState(trainer.title)


    const tryUpdateTrainer = (e) => {
        const dispatcher = useDispatch()
        dispatcher(updateTrainer(
            trainer.id,
            {
                firstname: TrainerFirstName, 
                lastname: TrainerLastName, 
                birthdate: TrainerBirthDate,
                gender: TrainerGender, 
                title: TrainerTitle
            }
        ))

        alert('Trainer Updated')
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
                            onChange={(e) => setTrainerFirstName(e.target.value)}
                            value={trainer.firstname}/>
                    
                    <label htmlFor="lastname"
                        className="text-xl text-teal-700">
                        Last Name
                    </label>
                    <input type="text" name="lastname" id="lastname"
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700"
                            onChange={(e) => setTrainerLastName(e.target.value)}
                            value={trainer.lastname}/>


                    <label htmlFor="birthdate"
                        className="text-xl text-teal-700">
                        Birth Date
                    </label>

                    <input type="date" name="birthdate" id="birthdate" max={'2002-01-01'} min={"1970-01-01"}
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700"
                            onChange={(e) => setTrainerBirthDate(e.target.value)}
                            value={trainer.birthdate}/>


                    <label htmlFor="gender"
                        className="text-xl text-teal-700">
                        Gender
                    </label>
                    {/* radio */}
                    <div className="flex flex-row gap-6 jsutify-center items-center w-full px-4">
                        <div className="flex flex-row gap-2 jsutify-center items-center">
                            <input type="radio" name="gender" id="male"
                                    className="mb-2 p-4 py-2 rounded-xl text-lg outline-none"
                                    onChange={(e) => setTrainerGender(e.target.value === true ? 'male' : 'female')} 
                                    value={trainer.gender === 'male' ? true : false}/>
                            <label htmlFor="male"
                                className="text-xl text-teal-700">
                                Male
                            </label>
                        </div>
                        <div className="flex flex-row gap-2 jsutify-center items-center">
                            <input type="radio" name="gender" id="female"
                                    className="mb-2 p-4 py-2 text-lg outline-none"
                                    onChange={(e) => setTrainerGender(e.target.value === true ? 'female' : 'male')}
                                    value={trainer.gender === 'female' ? true : false}/>
                            <label htmlFor="female"
                                className="text-xl text-teal-700">
                                Female
                            </label>
                        </div>
                    </div>

                    <label htmlFor="title"
                        className="text-xl text-teal-700">
                        Title
                    </label>
                    <input type="text" name="title" id="title"
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700"
                            onChange={(e) => setTrainerTitle(e.target.value)}
                            value={trainer.title}/> 
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
                                onClick={tryUpdateTrainer}/>
                    </div>
                
            </form>
        </div>
    )
}