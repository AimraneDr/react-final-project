

export default function GroupAttendanceRegister(props){
    const {group} = props
    return (
        <div className="w-[80%]">
            {/* Parameters & Info */}
            <div>

            </div>
            {/* Register */}
            <table className="w-full table-fixed border-collapse border-2 border-teal-600
                            text-center text-teal-800">
                <thead className="border-2 border-teal-600">
                    <tr>
                        <RowHead value='days' rowSpan={2}/>
                        <DayCell weekDay={1}/>
                        <DayCell weekDay={3}/>
                        <DayCell weekDay={2}/>
                    </tr>
                    <tr>
                        <PeriodCell index={0}/>
                        <PeriodCell index={1}/>
                        <PeriodCell index={2}/>
                        <PeriodCell index={3}/>

                        <PeriodCell index={0}/>
                        <PeriodCell index={1}/>
                        <PeriodCell index={2}/>
                        <PeriodCell index={3}/>

                        <PeriodCell index={0}/>
                        <PeriodCell index={1}/>
                        <PeriodCell index={2}/>
                        <PeriodCell index={3}/>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <StudentCell studentNum={0} studentName={'Ahmed ALAOUI'}/>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}


function DayCell(param){
    const {weekDay} = param
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const setColor = param.colored !== undefined
    return(
    <td className={`w-full h-full border-2 border-teal-600 ${setColor ? color ? color : 'bg-teal-300' : ''}`}
        colSpan={4}>
        <div className="w-full h-full flex flex-col gap-0 p-1">
            <span className="m-0 p-0">{weekdays[weekDay]}</span>
        </div>
    </td>
    )
}

function PeriodCell(param){
    const {index,color} = param
    const periods = ['q1', 'q2', 'q3', 'q4'];
    const setColor = param.colored !== undefined
    return(
    <td className={`w-full h-full border-2 border-teal-600 ${setColor ? color ? color : 'bg-teal-300' : ''}`}>
        <div className="w-full h-full flex flex-col gap-0 p-1">
            <span className="m-0 p-0">{periods[index]}</span>
        </div>
    </td>
    )
}

function StudentCell(param){
    const {studentNum, studentName} = param
    return(
        <RowHead color='bg-teal-200'> 
            <div className="grid grid-cols-4 items-center">
                <span className="col-span-1">{studentNum}</span>
                <span className="col-span-3">{studentName}</span>
            </div> 
        </RowHead>
    )
}
function RowHead(param){
    const {value, rowSpan, color} = param
    return(
        <td className={`w-28 p-2 border-2 border-teal-600 ${color ? color : 'bg-teal-100'}`}
            rowSpan={rowSpan ? rowSpan : 1}>
            {value ? value : param.children}
        </td>
    )
}