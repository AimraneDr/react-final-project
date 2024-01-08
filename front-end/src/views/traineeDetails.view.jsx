import { useParams } from "react-router-dom";

import InfoCard from "../components/infoCard.component";
import { useSelector } from "react-redux";

// localhost/groups/name/details
export default function TraineeDetails(){
    const {id} = useParams();
    const groups = useSelector(state => state.groups.groups)
    const branches = useSelector(state => state.branches.branches)
    const stagiaires = useSelector(state=> state.trainees.trainees)

    const trainee = stagiaires.find(t => t.id === Number(id));

    const branch = branches.find(b => b.id === groups.find(g => g.name === trainee.group).branchID)

    return(
        <div className="w-full flex flex-col  gap-4">
            <section className="flex flex-col gap-4 w-full px-4 py-12 bg-teal-50 justify-center items-center">
                {/* add background image */}
                <img src=""
                     className="w-[25%] max-w-[250px] min-w-[148px] aspect-square rounded-full border-4 border-teal-800 bg-teal-500"/>

                <h1 className="text-4xl font-bold text-teal-800
                            border-t-4 border-b-4 border-teal-800
                            py-3">
                    {trainee.lastname + ' ' + trainee.firstname}
                </h1>
                <div className="flex gap-2 justify-center items-center text-xl text-teal-800">
                    {branch.name} <div className="w-2 h-2 rounded-full bg-teal-900"></div> {trainee.group}
                </div>
            </section>

            {/* general info */}
            <section className="flex flex-col justify-center items-center w-full px-4 py-12">
                <h2 className="text-3xl text-teal-700 font-semibold mb-8">
                    Stagiaire Info
                </h2>
                <div className="grid grid-cols-3 gap-8 w-[90%]">
                    <InfoCard label='Branche' value={branch.name}/>
                    <InfoCard label='Group' value={trainee.group}/>

                </div>

            </section>

            {/* general info */}
            <section className="flex flex-col justify-center items-center w-full px-4 py-12 bg-teal-50">
                <h2 className="text-3xl text-teal-700 font-semibold mb-8">
                    Personal Info
                </h2>
                <div className="grid grid-cols-3 gap-8 w-[90%]">
                    <InfoCard label='Age' value={trainee.age}/>
                    <InfoCard label='Birth Date' value={trainee.birthDate !== undefined ? trainee.birthDate : '- - -'}/>
                    <InfoCard label='Gender' value={trainee.gender}/>
                </div>

            </section>

            {/* general info */}
            <section className="flex flex-col justify-center items-center w-full px-4 py-12">
                <h2 className="text-3xl text-teal-700 font-semibold mb-8">
                    Contact Info
                </h2>
                <div className="grid grid-cols-3 gap-8 w-[90%]">
                    <InfoCard label='personal email' value={''}/>
                    <InfoCard label='Training email' value={''}/>
                    <InfoCard label='phone number' value={''}/>
                </div>

            </section>


        </div>
    )
}