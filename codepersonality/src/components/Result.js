import Layout from "./Layout"
import data2 from "../data2"
import { Link } from "react-router-dom"

const Result = () => {
    const index  = localStorage.getItem("index")
    return(
        <div>
            <Layout /> 
            <div className="grid justify-items-center py-7 font-semibold ">
                <h1 >Résultat : </h1>
            </div>
            <div className=" bg-white text-base	">
                {data2.map(element => {
                    if (element.typeN == index) {
                        return (
                            
                            <div className="grid justify-items-center w-3/5 m-auto py-10">
                                <h1 className="mb-3 ">Votre type est : <span className="font-bold bg text-premier text-lg">{element.type}   </span></h1>
                                <p>{element.text}</p>
                            </div>
                        )
                    }
                })}
                <div className="text-center">
                    <Link to='/'><button className="bg-premier px-5 py-1 rounded text-white mb-5">Refaire le test</button></Link>
                </div>
            </div>
        </div>
    )
}
export default Result;