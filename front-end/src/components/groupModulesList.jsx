import { useState } from "react"
import { useSelector } from "react-redux"

export default function GroupModulesList(props){
    const {group} = props

    const [viewType, setViewType] = useState('list')
    
    const [sortBy, setSortBy] = useState('name') //name || progress || hours 
    const [orderBy, setOrderBy] = useState('asc') //asc || desc 
    const [showSortMenu, setShowSortMenu] = useState(false) 

    const modules = useSelector(state => state.modules.modules)

    const modulesIDs = [...new Set(group.currentModules.map(m => m.moduleID).concat(group.finishedModules.map(m => m.moduleID)))]

    const onSortByClick = (sort) => {
        if (sortBy === sort){
            setOrderBy(orderBy === 'asc' ? 'desc' : 'asc')
        }else{
            setSortBy(sort)
            setOrderBy('asc')
        }
    }


    return (
        <div className="w-[80%] rounded-lg border-2 border-teal-600">
            <div className="flex justify-between items-center px-4 py-2 bg-teal-100
                            rounded-t-lg border-dashed border-b-2 border-teal-400">
                <h2 className="text-2xl text-teal-700 font-bold ">
                    Modules ({modulesIDs.length})
                </h2>

                <div className="flex gap-4">
                    <button className="bg-teal-50 rounded-lg border-2 border-teal-500 hover:bg-teal-200
                                        min-w-12 aspect-square"
                            title={`${viewType === 'list' ? 'grid' : 'list'} view`}
                            onClick={() => setViewType(viewType === 'list' ? 'grid' : 'list')}>
                        <img src={`/${viewType === 'list' ? 'grid' : 'list'}-view.svg`} width={32} />
                    </button>

                    <button className="bg-teal-50 rounded-lg border-2 border-teal-500 hover:bg-teal-200
                                        relative min-w-12 aspect-square"
                            title={`sort by`}
                            onClick={(e) => setShowSortMenu(!showSortMenu)}>
                        <img src={`/sort.svg`} width={32} />
                    
                        <ul id="sort-menu" className={`flex flex-col justify-stretch w-auto gap-1 border-2 border-teal-500 bg-slate-100
                                ${!showSortMenu && 'hidden'} absolute top-[105%] right-0 rounded-md px-2 py-1 text-nowrap`}>
                            <li className={`hover:bg-teal-100 rounded-lg px-2 py-1`}
                                onClick={() => onSortByClick('name') }>
                                Name {sortBy === 'name' && <span className="text-teal-500">✓</span>}
                            </li>
                            <li className={`hover:bg-teal-100 rounded-lg px-4 py-1 `}
                                onClick={() => onSortByClick('hours')}>
                                Total Hours {sortBy === 'hours' && <span className="text-teal-500">✓</span>}
                            </li>
                            <li className={`hover:bg-teal-100 rounded-lg px-4 py-1`}
                                onClick={() => onSortByClick('progress')}>
                                Progress {sortBy === 'progress' && <span className="text-teal-500">✓</span>}
                            </li>
                        </ul>
                    </button>


                </div>

            </div>
            <div className={`flex 
                            ${viewType === 'list' ? 'flex-col justify-stretch divide-y-2 divide-teal-300'
                            : 'justify-start flex-wrap p-2 gap-8'}`}>
                
                {
                    modules.filter(m => modulesIDs.includes(m.id))
                            .sort((a,b) =>{
                                switch(sortBy){
                                    case 'name' :
                                        if(orderBy === 'asc'){
                                            return a.name.localeCompare(b.name)
                                        }else{
                                            return b.name.localeCompare(a.name)
                                        } 
                                    case 'hours' :
                                        if(orderBy === 'asc')
                                            return b.totalHours - a.totalHours
                                        else 
                                            return a.totalHours - b.totalHours
                                    case 'progress' :
                                        return -1
                                }
                            })
                            .map(
                                m => <div className="p-6 border-0 rounded border-teal-500
                                                    ">
                                    {m.name}
                                    </div>
                            )
                }
            </div>
        </div>
    )
}