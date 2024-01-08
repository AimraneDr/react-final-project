import { Link } from "react-router-dom";

export default function BranchCard(props){
    const {branch} = props;
    return (
        <Link className="flex flex-col justify-center items-center
                        bg-white rounded-xl shadow-lg p-4 w-64
                        border-2 border-teal-600
                        hover:bg-teal-50 cursor-pointer"
            to={`branches/details/${branch.name.replace(/ /g, '-')}/`}>
            <h1 className="text-2xl font-bold">{branch.name}</h1>
            <span>{branch.brief}</span>
        </Link>
    )
}