import { Link } from "react-router-dom"
import Carte from "./Carte"
import Layout from "./Layout"

const Home = () => {
    return(
        <div>
            <Layout />
            <div className="grid justify-items-center">
                <Link to='/questions' className=""><button className="text-lg text-white bg-premier py-1 px-4 rounded  my-8">Commancer le test</button></Link>
            </div>
            <div className="bg-white py-12 mb-12">
                <div className=" grid grid-rows-9 md:grid-rows-3 md:w-4/5 grid-flow-col gap-8  m-auto ">
                    <Carte title="Perfectionniste" content="Cherche l'idéal dans tous ses choix." />
                    <Carte title="Serviteur" content="Attentif aux besoins de son entourage et aidant les autres." />
                    <Carte title="Gagneur" content="Très efficace pour atteindre ses objectifs." />
                    <Carte title="Original" content="Désire son propre identité et l'expression de soi." />
                    <Carte title="Analysant" content="Se sentir serviable et compétent." />
                    <Carte title="Loyal" content="Travaille dur pour établir des relations solides et stables." />
                    <Carte title="Joueur" content="Fait de grands efforts pour rechercher la joie de nouvelles expériences." />
                    <Carte title="Commandant" content="Cherche à se défendre et à défendre les autres contre l'injustice." />
                    <Carte title="Diplomate" content="S'efforce d'être en harmonie avec lui-même et avec le monde qui l'entoure." />
                </div>
            </div>
        </div>
    )
}

export default Home