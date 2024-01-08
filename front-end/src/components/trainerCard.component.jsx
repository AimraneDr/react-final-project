import { Link } from "react-router-dom"


export default function TrainerCard(param){
    const {trainer} = param
    return(
        <Link className="flex flex-col justify-center items-center
                        bg-white rounded-xl shadow-lg p-4 w-64
                        border-2 border-teal-600
                        hover:bg-teal-50 cursor-pointer"
                to={`/trainers/details/${trainer.id}/`}>
            <img src="" alt="" 
                className="w-1/2 aspect-square rounded-full border-4 border-teal-800 bg-teal-500"/>

            <h1 className="text-2xl font-bold">{trainer.lastname + ' ' + trainer.firstname}</h1>
            <span>total modules</span>
            <span>total number of groups</span>
        </Link>
    )
} 