const Question = (props) => {
    return(
        <div className={props.style}>
            <div className="w-3/5 m-auto py-10"  >
                <h1 className="font-semibold mb-10">{props.question}</h1>
                    <div className="w-4/5 m-auto">
                        <fieldset id={`question${props.id}`  } >
                            <div className="flex"><input className="" type="radio" id={`questionChoice1${props.id}`}
                            {...props.register(`question${props.id}`)}  value={`2,${props.type}`} onClick={props.onClick}  />
                            <label className="ml-2" for={`questionChoice1${props.id}`}>{props.input1}</label></div>
                            <br/>
                            <div className="flex"><input type="radio" id={`questionChoice2${props.id}`}
                            {...props.register(`question${props.id}`)}  value={`1,${props.type}`} onClick={props.onClick}/>
                            <label className="ml-2" for={`questionChoice2${props.id}`}>{props.input2}</label></div>
                            <br/>
                            <div className="flex"><input type="radio" id={`questionChoice3${props.id}`}
                            {...props.register(`question${props.id}`)}  value={`0,${props.type}`} onClick={props.onClick}/>
                            <label className="ml-2" for={`questionChoice3${props.id}`} >{props.input3}</label>
                            </div>
                        </fieldset >
                    </div>
            </div>
        </div>

)
}

export default Question;

