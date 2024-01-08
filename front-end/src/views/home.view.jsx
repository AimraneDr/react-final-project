import BranchesList from "../components/branchesList.component";

export default function Home(){
    return (
        <div className="flex flex-col items-center justify-start w-full h-full">
            <h1>Home</h1>
            
            <BranchesList/>
            
        </div>
    )
}