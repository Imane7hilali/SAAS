const Carte = (props) => {
    return( 
        <div className="bg-premier text-white mx-12 text-center px-16 py-10 flex items-center justify-center	 ">
            <div>
                <h1 className="mb-3 font-semibold text-lg">{props.title}</h1>
                <p>{props.content}</p>
            </div>

        </div>
    )
}
export default Carte