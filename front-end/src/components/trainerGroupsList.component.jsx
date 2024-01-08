import GroupCard from "./groupCard.component";
import { branches ,groups } from "../data/data";
import { useState } from "react";

/**
 * Interactive List of branches and groups enrolled in a specific module passed in the props
 * @param {*} props 
 * @returns 
 */
export default function TrainerGroupsList(props){
    const {trainerID} = props;
    const tGroups = groups.filter(g => g.currentModules.find(m => m.trainerID === trainerID))
    const tBranches = branches.filter(b => tGroups.find(g => g.branchID == b.id))
    return (
        <div className="p-5 w-full">
            <ul className="flex justify-center gap-12 flex-wrap p-6 w-full">
                {
                    tBranches.map(
                        b => <BranchGroupsStateDropDownList branch={b} trainerID={trainerID} />
                    )
                }
            </ul>
        </div>
    )
} 


function BranchGroupsStateDropDownList(props){
    const {branch, trainerID} = props


    const [viewType, setViewType] = useState('list')
    const [isCollapsed, setIsCollapsed] = useState(true)
    
    const [sortBy, setSortBy] = useState('name') //name || age || gender || average 
    const [orderBy, setOrderBy] = useState('asc') //asc || desc 
    const [showSortMenu, setShowSortMenu] = useState(false) 

    const onSortByClick = (sort) => {
        if (sortBy === sort){
            setOrderBy(orderBy === 'asc' ? 'desc' : 'asc')
        }else{
            setSortBy(sort)
            setOrderBy('asc')
        }
    }

    const groupsList = groups.filter(g => g.branchID === branch.id && g.currentModules.find(m => m.trainerID === trainerID))
    return(
        <div className="w-[80%] rounded-lg border-2 border-teal-600">
            <div className="flex justify-between px-4 py-2 bg-teal-100
                            rounded-t-lg border-dashed border-b-2 border-teal-400">
                <h2 className="text-2xl text-teal-700 font-bold ">
                    {branch.name} ({groupsList.length})
                </h2>

                <div className="flex items-center gap-4">

                    <button className="bg-teal-50 rounded-lg border-2 border-teal-500 hover:bg-teal-200
                                        relative min-w-10 aspect-square flex justify-center items-center"
                            title={`sort by`}
                            onClick={() => setShowSortMenu(!showSortMenu)}>
                        <img src={`/sort.svg`} width={32} />
                    
                        <ul id="sort-menu" className={`flex flex-col justify-stretch w-auto gap-1 border-2 border-teal-500 bg-slate-100
                                ${!showSortMenu && 'hidden'} absolute top-[105%] right-0 rounded-md px-2 py-1 text-nowrap`}>
                            <li className={`hover:bg-teal-100 rounded-lg px-2 py-1`}
                                onClick={() => onSortByClick('name') }>
                                Name {sortBy === 'name' && <span className="text-teal-500">✓</span>}
                            </li>
                            <li className={`hover:bg-teal-100 rounded-lg px-4 py-1`}
                                onClick={() => onSortByClick('progress')}>
                                Progress {sortBy === 'progress' && <span className="text-teal-500">✓</span>}
                            </li>
                        </ul>
                    </button>

                    <button className="bg-teal-50 rounded-lg border-2 border-teal-500 hover:bg-teal-200
                                        min-w-10 aspect-square flex justify-center items-center"
                            title={`${viewType === 'list' ? 'grid' : 'list'} view`}
                            onClick={() => setViewType(viewType === 'list' ? 'grid' : 'list')}>
                        <img src={`/${viewType === 'list' ? 'grid' : 'list'}-view.svg`} width={32} />
                    </button>

                    <button className="bg-teal-50 rounded-lg border-2 border-teal-500 hover:bg-teal-200
                                        min-w-10 aspect-square flex justify-center items-center"
                            title={`${isCollapsed ? 'expand' : 'collapse'} list`}
                            onClick={() => setIsCollapsed(!isCollapsed)}>
                        <img src={`/${isCollapsed ? 'expand' : 'collapse'}-list.svg`} width={32} />
                    </button>

                </div>

            </div>
            <div className={`flex p-2 transition-all ease-in duration-300
                            ${isCollapsed ? 'h-0 overflow-clip' : 'overflow-y-auto max-h-[500px] h-fit min-h-[15px]'}
                            ${viewType === 'list' ? 'flex-col justify-stretch divide-y-2 divide-teal-300'
                            : 'justify-around flex-wrap p-2 gap-8'}`}>
                
                {
                    groupsList.length === 0 ?
                        <div className="w-full flex justify-center items-center m-4
                                text-teal-950 text-xl">
                             this branch has no groups 
                        </div>
                        :
                    groupsList.sort((a,b) =>{
                                switch(sortBy){
                                    case 'name' :
                                        return orderBy === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
                                    case 'progress' :
                                        return orderBy === 'asc' ? b.age - a.age : a.age - b.age
                                    default :
                                        return 0
                                }
                            })
                            .map(
                                g => <div className="p-6 border-0 rounded border-teal-500
                                                    ">
                                    {g.name}
                                </div>
                            )
                }
            </div>
        </div>
    )
}