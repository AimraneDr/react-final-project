

export default function TimeTable(param){
    const {base, groupID, trainerID} = param;

    return (
        <div className="w-[80%]">
            <div>{/* explaination */}</div>
            <table className="w-full table-fixed border-collapse border-2 border-teal-600
                            text-center text-teal-800">
                <thead className="border-2 border-teal-600">
                    <RowHead><sub>days</sub>\<sup>hours</sup></RowHead>
                    <HeadCell start='8:30' end='9:00' />
                    <HeadCell start='9:00' end='9:30' />
                    <HeadCell start='9:30' end='10:00' />
                    <HeadCell start='10:00' end='10:30' />
                    <HeadCell start='10:30' end='11:00' />
                    <HeadCell start='11:00' end='11:30' />
                    <HeadCell start='11:30' end='12:00' />
                    <HeadCell start='12:00' end='12:30' />
                    <HeadCell start='12:30' end='13:00' />
                    <HeadCell start='13:00' end='13:30' />
                    <HeadCell start='13:30' end='14:00' />
                    <HeadCell start='14:00' end='14:30' />
                    <HeadCell start='14:30' end='15:00' />
                    <HeadCell start='15:00' end='15:30' />
                    <HeadCell start='15:30' end='16:00' />
                    <HeadCell start='16:00' end='16:30' />
                    <HeadCell start='16:30' end='17:00' />
                    <HeadCell start='17:00' end='17:30' />
                    <HeadCell start='17:30' end='18:00' />
                    <HeadCell start='18:00' end='18:30' />
                </thead>
                <tbody>
                    <tr className="border-t-2 border-teal-300">
                        <RowHead>Monday</RowHead>
                        <td colSpan={8}></td>
                        <ClassSessionCell className='Math' trainerName='Adams Winliam' moduleId='MD105' period={2} beginAt={12.5}/> 
                        <ClassSessionCell className='Math' trainerName='Adams Winliam' moduleId='MD105' period={4} beginAt={14.5}/> 
                    </tr>
                    <tr className="border-t-2 border-teal-300">
                        <RowHead>Tuesday</RowHead>
                        <ClassSessionCell className='Math' trainerName='Adams Winliam' moduleId='MD105' period={5} beginAt={14.5}/> 
                    </tr>
                    <tr className="border-t-2 border-teal-300">
                        <RowHead>Wednesday</RowHead>
                        <ClassSessionCell className='Math' trainerName='Adams Winliam' moduleId='MD105' period={4} beginAt={14.5}/> 
                    </tr>
                    <tr className="border-t-2 border-teal-300">
                        <RowHead>Thursday</RowHead>
                        <td colSpan={10}></td>
                        <ClassSessionCell className='Math' trainerName='Adams Winliam' moduleId='MD105' period={5} beginAt={14.5}/> 
                    </tr>
                    <tr className="border-t-2 border-teal-300">
                        <RowHead>Friday</RowHead>
                    </tr>
                    <tr className="border-t-2 border-teal-300">
                        <RowHead>Saturday</RowHead>
                    </tr>
                    <tr className="border-t-2 border-teal-300">
                        <RowHead>Sunday</RowHead>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function HeadCell(param){
    const {start, end} = param
    const setColor = param.colored !== undefined

    return(
        <td className={`w-full h-full border-2 border-teal-600 ${setColor && 'bg-teal-300'}`}>
            <div className="w-full h-full flex flex-col gap-0 p-1">
                <span className="m-0 p-0" style={{ lineHeight: '1' }}>{start}</span>
                <span className="m-0 p-0" style={{ lineHeight: '1' }}>~</span>
                <span className="m-0 p-0" style={{ lineHeight: '1' }}>{end}</span>
            </div>
        </td>

    )
}
function RowHead(param){
    const {value} = param
    return(
        <td className="w-28 p-2 border-2 border-teal-600 bg-teal-100">
            {value ? value : param.children}
        </td>
    )
}

function ClassSessionCell(param){
    const {className, moduleId, trainerName, period, beginAt} = param
    const isExam = param.exam !== undefined
    const isLesson = param.lesson !== undefined

    return(
        <td className="border-2 border-teal-600 bg-teal-200" 
            colSpan={period * 2} >
            <div className="w-full h-full flex flex-col justify-center items-center">
                <span>{className}</span> 
                <span>{moduleId}</span> 
                <span>{trainerName}</span> 
            </div>
        </td>
    )
}