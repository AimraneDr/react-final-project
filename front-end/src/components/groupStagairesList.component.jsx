import { useState } from "react"
import { useSelector } from "react-redux"

export default function GroupStagairesList(props){
    const {group} = props

    const [viewType, setViewType] = useState('list')
    
    const [sortBy, setSortBy] = useState('name') //name || age || gender || average 
    const [orderBy, setOrderBy] = useState('asc') //asc || desc 
    const [showSortMenu, setShowSortMenu] = useState(false) 

    const stagiaires = useSelector(state => state.trainees.trainees)
    const stagiairesList = group.stagaireIDs.map(i => stagiaires.find(s => s.id === i))

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
                    Stagiaires ({stagiairesList.length})
                </h2>

                <div className="flex gap-4">
                    <button className="bg-teal-50 rounded-lg border-2 border-teal-500 hover:bg-teal-200"
                            title={`${viewType === 'list' ? 'grid' : 'list'} view`}
                            onClick={() => setViewType(viewType === 'list' ? 'grid' : 'list')}>
                        <img src={`/${viewType === 'list' ? 'grid' : 'list'}-view.svg`} width={32} />
                    </button>

                    <button className="bg-teal-50 rounded-lg border-2 border-teal-500 hover:bg-teal-200
                                        relative"
                            title={`sort by`}
                            onClick={() => setShowSortMenu(!showSortMenu)}>
                        <img src={`/sort.svg`} width={32} />
                    
                        <ul id="sort-menu" className={`flex flex-col justify-stretch w-auto gap-1 border-2 border-teal-500 bg-slate-100
                                ${!showSortMenu && 'hidden'} absolute top-[105%] right-0 rounded-md px-2 py-1 text-nowrap`}>
                            <li className={`hover:bg-teal-100 rounded-lg px-2 py-1`}
                                onClick={() => onSortByClick('name') }>
                                Name {sortBy === 'name' && <span className="text-teal-500">✓</span>}
                            </li>
                            <li className={`hover:bg-teal-100 rounded-lg px-4 py-1 `}
                                onClick={() => onSortByClick('age')}>
                                Age {sortBy === 'age' && <span className="text-teal-500">✓</span>}
                            </li>
                            <li className={`hover:bg-teal-100 rounded-lg px-4 py-1`}
                                onClick={() => onSortByClick('gender')}>
                                Gender {sortBy === 'gender' && <span className="text-teal-500">✓</span>}
                            </li>
                            <li className={`hover:bg-teal-100 rounded-lg px-4 py-1`}
                                onClick={() => onSortByClick('average')}>
                                Average {sortBy === 'average' && <span className="text-teal-500">✓</span>}
                            </li>
                            <li className={`hover:bg-teal-100 rounded-lg px-4 py-1`}
                                onClick={() => onSortByClick('number')}>
                                Number {sortBy === 'number' && <span className="text-teal-500">✓</span>}
                            </li>
                        </ul>
                    </button>


                </div>

            </div>
            <div className={`flex 
                            ${viewType === 'list' ? 'flex-col justify-stretch divide-y-2 divide-teal-300'
                            : 'justify-start flex-wrap p-2 gap-8'}`}>
                
                {
                    stagiairesList.sort((a,b) =>{
                                switch(sortBy){
                                    case 'name' :
                                        if(orderBy === 'asc'){
                                            return (a.lastname + ' ' + a.firstname).localeCompare((b.lastname + ' ' + b.firstname))
                                        }else{
                                            return (b.lastname + ' ' + b.firstname).localeCompare((a.lastname + ' ' + a.firstname))
                                        } 
                                    case 'gender' :
                                        if(orderBy === 'asc')
                                            return a.gender === b.gender ? 0 : a.gender > b.gender ? 1 : -1
                                        else 
                                            return a.gender === b.gender ? 0 : a.gender < b.gender ? 1 : -1
                                    case 'age' :
                                        return orderBy === 'asc' ? b.age - a.age : a.age - b.age
                                    case 'average' :
                                        return orderBy === 'asc' ? b.average - a.average : a.average - b.average
                                    case 'number' :
                                        return orderBy === 'asc' ? b.num - a.num : a.num - b.num
                                    default :
                                        return 0
                                }
                            })
                            .map(
                                s => <div className="p-6 border-0 rounded border-teal-500
                                                    ">
                                    {s.lastname + ' ' + s.firstname}
                                </div>
                            )
                }
            </div>
        </div>
    )
}