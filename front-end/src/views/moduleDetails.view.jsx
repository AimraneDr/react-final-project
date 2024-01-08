import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import InfoCard from "../components/infoCard.component";
import TimeTable from "../components/timeTable.component";
import EnrolledGroupsList from "../components/enrolledGroupsList.component";
import TrainerCard from "../components/trainerCard.component";

// localhost/groups/name/details
export default function ModuleDetails(){
    const {id} = useParams();

    const modules = useSelector(state => state.modules.modules)

    const module = modules.find(m => m.id === id);

    const mTrainers = findTrainersForModule(id)


    return(
        <div className="w-full flex flex-col  gap-4">
            <section className="h-[500px] w-full flex flex-col gap-4 px-4 py-12 bg-teal-50 justify-center items-center">
                {/* add background image */}

                <h1 className="text-4xl font-bold text-teal-800
                            border-t-4 border-b-4 border-teal-800
                            py-3">
                    {module.name}
                </h1>
                <div className="flex gap-2 justify-center items-center text-xl text-teal-800">
                    {module.id} <div className="w-2 h-2 rounded-full bg-teal-900"></div> {module.nature}
                </div>
            </section>

            {/* general info */}
            <section className="flex flex-col justify-center items-center w-full px-4 py-12">
                <h2 className="text-3xl text-teal-700 font-semibold mb-8">
                    Module Info
                </h2>
                <div className="grid grid-cols-3 gap-8 w-[90%]">
                    <InfoCard label='Nature' value={0}/>
                    <InfoCard label='Group' value={0}/>
                    <InfoCard label='Coef' value={0}/>
                    <InfoCard label='Total Hours' value={0}/>
                    <InfoCard label='Local Controls' value={0}/>
                    <InfoCard label='Regional Control' value={0}/>
                    <InfoCard label='Total branches' value={0}/>
                    <InfoCard label='Total Groups' value={0}/>
                    <InfoCard label='Total Trainers' value={0}/>

                </div>

            </section>

            {/* Time Table */}
            <section className="flex flex-col justify-center items-center w-full px-4 py-12 bg-teal-50">
                <h2 className="text-3xl text-teal-700 font-semibold mb-8">
                    Planning
                </h2>

                <TimeTable />

            </section>

            {/* Branches & Groups */}
            <section className="flex flex-col justify-center items-center w-full px-4 py-12">
                <h2 className="text-3xl text-teal-700 font-semibold mb-8">
                    Branches & Groups
                </h2>

                <EnrolledGroupsList module={module}/>

            </section>

            {/* Trainers */}
            <section className="flex flex-col justify-center items-center w-full px-4 py-12 bg-teal-50">
                <h2 className="text-3xl text-teal-700 font-semibold mb-8">
                    Trainers ({mTrainers.length})
                </h2>

                <div className="w-[90%] flex flex-row flex-wrap justify-center gap-4">
                    {
                        mTrainers.map(t => <TrainerCard trainer={t} />)
                    }
                </div>
            </section>


        </div>
    )
}

// Function to find trainers for a specific module
function findTrainersForModule(moduleID) {
    const trainersForModule = [];

    const groups = useSelector(state => state.groups.groups)
    const trainers = useSelector(state=> state.trainers.trainers)
  
    groups.forEach((group) => {
        const currentModules = group.currentModules || [];
        const finishedModules = group.finishedModules || [];
    
        // Check current modules
        currentModules.forEach((m) => {
            if (m.moduleID === moduleID) {
                const trainer = trainers.find((t) => t.id === m.trainerID);
                if (trainer)    trainersForModule.push(trainer);
            }
        });
    
        // Check finished modules
        finishedModules.forEach((module) => {
            if (module.moduleID === moduleID) {
                const trainer = trainers.find((t) => t.id === module.trainerID);
                if (trainer) {
                    trainersForModule.push(trainer);
                }
            }
        });
    });
  
    return [...new Set(trainersForModule)];
  }