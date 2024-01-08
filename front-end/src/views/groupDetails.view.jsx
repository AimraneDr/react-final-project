import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import InfoCard from "../components/infoCard.component";
import GroupModulesList from "../components/groupModulesList";
import TimeTable from "../components/timeTable.component";
import GroupStagairesList from "../components/groupStagairesList.component";
import GroupAttendanceRegister from "../components/groupAttendanceRegister.component";

// localhost/groups/name/details
export default function GroupDetails(){
    const {name} = useParams();

    const group = useSelector(state => state.groups.groups).find(g => g.name.toLowerCase() === name.replace(/-/g, ' ').toLowerCase())
    const branch = useSelector(state => state.branches.branches).find(b => b.id == group.branchID)

    return(
        <div className=" w-full flex flex-col items-stretch gap-8">
            <section className="h-[500px] bg-teal-50 flex justify-center items-center">
                {/* add background image */}

                <h1 className="text-6xl font-bold text-teal-800
                            border-t-4 border-b-4 border-teal-800
                            py-3">
                    {group.name.toUpperCase()}
                </h1>
            </section>
            {/* Group Over View */}
            <section className="flex flex-col p-4 items-center">
                <h2 className="text-3xl text-teal-700 font-semibold text-center mb-6">Over View</h2>
                <div className="grid grid-cols-3 gap-4 w-[90%]">

                        <InfoCard label='Group Name' value={group.name} />
                        <InfoCard label='Branch Name' value={branch.name} />
                        <InfoCard label='Stagaires Number' value={group.numStagaires} />
                        <InfoCard label='Cours Progress' value={'NaN'} />
                        <InfoCard label='Total Hours' value={ group.totalHours !== undefined && group.totalHours !== null ? group.totalHours : '- - -'}/>
                        <InfoCard label='Hours per Week' value={group.hoursPreWeek !== undefined && group.hoursPreWeek !== null ? group.hoursPreWeek : '- - -'} />
                        <InfoCard label='Total Moduls Number' value={
                                                                    (group.currentModules !== undefined && group.currentModules !== null) 
                                                                    ?
                                                                        group.finishedModules !== undefined && group.finishedModules !== null 
                                                                        ?
                                                                            group.currentModules.length + group.finishedModules.length
                                                                        :
                                                                            group.currentModules.length
                                                                    :
                                                                        group.finishedModules !== undefined && group.finishedModules !== null 
                                                                        ?
                                                                            group.finishedModules.length
                                                                        :
                                                                            '- - -'
                                                                } />
                        <InfoCard label='Current Moduls Number' value={group.currentModules !== undefined && group.currentModules !== null ? group.currentModules.length : '- - -'} />
                        <InfoCard label='Finished Moduls Number' value={group.finishedModules !== undefined && group.finishedModules !== null ? group.finishedModules.length : '- - -'} />

                </div>
            </section>

            {/* Group Time Table */}
            <section className="flex flex-col px-12 py-4 w-full items-center justify-center bg-teal-50">
                <h2 className="text-3xl text-teal-700 font-semibold mb-6">Time Table</h2>                
                <TimeTable />
            </section>

            {/* Group Module */}
            <section className="flex flex-col px-12 py-4 w-full justify-center items-center gap-4">
                <h2 className="text-3xl text-teal-700 font-semibold">Modules List</h2>
                <GroupModulesList group={group}/>
            </section>

            {/* Group's Students */}
            <section className="flex flex-col justify-center items-center w-full bg-teal-50
                                gap-4 p-4 px-12">
                <h2 className="text-3xl text-teal-700 font-semibold">Stagaires List</h2>
                <GroupStagairesList group={group}/>
            </section>

            {/* Group's Attendance Register */}
            <section className="flex flex-col justify-center items-center w-full
                    gap-4 p-4 px-12">
                <h2 className="text-3xl text-teal-700 font-semibold">Attendance Register</h2>
                <GroupAttendanceRegister group={group}/>
            </section>

        </div>
    )
}