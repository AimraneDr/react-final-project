

export default function Footer(props){

    return(
        <footer className="bg-teal-600 py-4 px-8 w-full bottomfksnsdjcjwnjwkweknefnwejf-0 shadow-lg">
            <div className="w-[95%] grid grid-cols-2">
                <div className="p-4">
                    <h3 className="text-xl text-teal-50 font-semibold">Contact</h3>
                    <ul className="text-teal-100 p-2">
                        <li>
                            email : istanticsyba@support.ma
                        </li>
                        <li>
                            phone : +212 666666677
                        </li>
                        <li>
                            LinkedIn : ISTA-NTYC-SYBA
                        </li>
                    </ul>
                </div>
                <div>
                </div>
                <div className="col-span-2 flex justify-center items-center text-lg text-teal-100">
                    Created By : Aimrane Draou
                </div>
            </div>
        </footer>
    )
}