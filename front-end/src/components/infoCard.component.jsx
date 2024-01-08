

export default function InfoCard(props){
    const {label, value} = props
    return (
        <div className="grid grid-cols-2 gap-4 border-2 border-teal-500 rounded-lg">
            <div className="col-span-1 text-teal-600 text-xl font-semibold flex text-center justify-center items-center
                            bg-teal-100 rounded-l-lg p-2">
                {label}
            </div>
            <div className="col-span-1 text-xl flex text-center justify-center items-center p-2">
                {value}
            </div>
        </div>
    )
}