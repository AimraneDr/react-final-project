

export default function LogInView(props){

    const tryLogin = (e) => {
        e.preventDefault()
        alert('login')
    }

    return (
        <div className="w-full flex justify-center items-center p-12">
            <div className="flex flex-col justify-center items-center gap-12">
                <h1 className="text-6xl font-bold text-teal-700">
                    Login
                </h1>
                <form className="flex flex-col gap-2">
                    <label htmlFor="username" 
                            className="text-xl font-semibold text-teal-700">
                        Username :
                    </label>
                    <input type="text" name="username"
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700"/>
                    
                    <label htmlFor="password" 
                            className="text-xl font-semibold text-teal-700">
                        Password
                    </label>
                    <input type="password" name="password" id="" 
                            className="mb-2 p-4 py-2 rounded-xl text-lg outline-teal-700"/>
                    <div className="flex flex-row justify-between">
                        <input type="reset" value="Cancel" 
                                className="p-4 py-2 border-2 border-red-500 rounded-lg
                                        text-lg text-red-700 hover:bg-red-500 hover:text-slate-100 font-semibold
                                        transition-all ease-in-out duration-200"/>
                        <input type="submit" value="Login" 
                                className="p-4 py-2 border-2 border-teal-500 rounded-lg
                                        text-lg text-teal-700 hover:bg-teal-500 hover:text-slate-100 font-bold
                                        transition-all ease-in-out duration-200"
                                onClick={tryLogin}/>
                    </div>
                </form>
            </div>
        </div>
    )
}