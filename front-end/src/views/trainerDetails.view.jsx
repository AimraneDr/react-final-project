import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import InfoCard from "../components/infoCard.component";
import TimeTable from "../components/timeTable.component";
import TrainerGroupsList from "../components/trainerGroupsList.component";

// localhost/groups/name/details
export default function TrainerDetails(){
    const {id} = useParams();

    const groups = useSelector(state => state.groups.groups)
    const trainers = useSelector(state => state.trainers.trainers)


    const trainer = trainers.find(t => t.id === Number(id));

    const tGroups = groups.filter(g => g.currentModules.find(m => m.trainerID === trainer.id))

    return(
        <div className="w-full flex flex-col  gap-4">
            <section className="flex flex-col gap-4 w-full px-4 py-12 bg-teal-50 justify-center items-center">
                {/* add background image */}
                <img src=""
                     className="w-[25%] max-w-[250px] min-w-[148px] aspect-square rounded-full border-4 border-teal-800 bg-teal-500"/>

                <h1 className="text-4xl font-bold text-teal-800
                            border-t-4 border-b-4 border-teal-800
                            py-3">
                    {trainer.lastname + ' ' + trainer.firstname}
                </h1>
                <div className="flex gap-2 justify-center items-center text-xl text-teal-800">
                    {trainer.title}
                </div>
            </section>

            {/* general info */}
            <section className="flex flex-col justify-center items-center w-full px-4 py-12">
                <h2 className="text-3xl text-teal-700 font-semibold mb-8">
                    Trainer Info
                </h2>
                <div className="grid grid-cols-3 gap-8 w-[90%]">
                    <InfoCard label='enroll date' value={'0/0/0'}/>
                    <InfoCard label='Groups' value={tGroups.length}/>

                </div>

            </section>

            {/* general info */}
            <section className="flex flex-col justify-center items-center w-full px-4 py-12 bg-teal-50">
                <h2 className="text-3xl text-teal-700 font-semibold mb-8">
                    Personal Info
                </h2>
                <div className="grid grid-cols-3 gap-8 w-[90%]">
                    <InfoCard label='Age' value={trainer.age}/>
                    <InfoCard label='Birth Date' value={trainer.birthDate !== undefined ? trainee.birthDate : '- - -'}/>
                    <InfoCard label='Gender' value={trainer.gender}/>
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

            {/* Time Table */}
            <section className="flex flex-col justify-center items-center w-full px-4 py-12 bg-teal-50">
                <h2 className="text-3xl text-teal-700 font-semibold mb-8">
                    Week Planning
                </h2>
                <TimeTable />

            </section>

            {/* Groups */}
            <section className="flex flex-col justify-center items-center w-full px-4 py-12">
                <h2 className="text-3xl text-teal-700 font-semibold mb-8">
                    Groups
                </h2>
                <TrainerGroupsList  trainerID={trainer.id}/>

            </section>

        </div>
    )
}