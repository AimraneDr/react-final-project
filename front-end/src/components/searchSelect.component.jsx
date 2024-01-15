import { useState } from "react"


export default function SearchSelect(props){
    const {name, id, options, state} = props
    const multiple = props.multiple !== undefined
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [selectedOptions, setSelectedOptions] = useState([])
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

    const handleSearchValueChange = (e) => {
        setSearchValue(e.target.value)
        if(searchValue.length === 0){
            setSearchResult([...options.sort()])
            return
        }

        const level0 = options.filter(o => {
            const term = searchValue.toUpperCase()
            let oVal = String(o.val).toUpperCase()
            let oLabel = o.label.toUpperCase()
            return oVal.startsWith(term) || oVal === term ||
                oLabel.startsWith(term) || oLabel === term
        })

        const level1 = options.filter(o => !level0.includes(o))
            .filter(o => {
                const term = searchValue.toUpperCase()
                let oVal = String(o.val).toUpperCase()
                let oLabel = o.label.toUpperCase()
                return oVal.includes(term) ||
                    oLabel.includes(term)
            })

        setSearchResult([...level0, ...level1])
    }
    const handleOptionOnClick = (e, r) => {
        e.preventDefault()
        setSearchValue('')
        if(!multiple) {
            setSelectedOptions([r])
            if(state.set) state.set(r.val)
            return
        }

        if(selectedOptions.includes(r)){
            setSelectedOptions(selectedOptions.filter(o => o !== r))
            if(state.set) state.set(selectedOptions.filter(o => o !== r).map(o => o.val))
        } else {
            setSelectedOptions([...selectedOptions, r])
            if(state.set) state.set([...(selectedOptions.map(o => o.val)), r.val])
        }
    }
    return(
        <div className="flex flex-col relative w-full"
        >
            <div className="text-lg text-slate-400">
                {
                    multiple ? 
                        `${selectedOptions.length} item(s) selected`
                        :    
                        selectedOptions.length ? 'item selected' : 'no item selected'
                }
            </div>
            <div className="flex flex-row w-full">
                <input type="text" placeholder="search ..." onChange={handleSearchValueChange}
                        className="flex-1 p-2 outline-teal-700 rounded-lg"
                        onFocus={toggleDropdown}
                        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
                        value={searchValue}
                        />
                <button>
                    <img src="" alt="" />
                </button>
            </div>
            {/* dropdown */}
            {
                isOpen && searchResult.length > 0 ?
                    <ul className={`absolute w-full top-full max-h-56 overflow-y-auto 
                                bg-slate-50 p-1 text-lg flex flex-col gap-1 shadow-lg z-10`}>
                        {
                            searchResult.map(
                                r => {
                                    const selected = selectedOptions.includes(r)
                                    return (
                                        <li value={r.val}
                                            className={`p-1 border-transparent border-2 flex flex-row justify-between items-center
                                                    ${selected ? 'hover:border-red-300 hover:bg-red-50 bg-teal-50' 
                                                    : 'hover:border-teal-300 hover:bg-teal-50'}`}
                                                    onClick={(e) => handleOptionOnClick(e, r)}>
                                            {r.label}

                                            {selected && <span className="text-sm">seleced</span>}
                                        </li>
                                    )
                                }
                            )
                        }
                    </ul>
                    :
                    <></>
            }
        </div>
    )
}