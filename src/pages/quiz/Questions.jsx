import data from './database/data'


export default function Questions() {

    const question = data[0]

    function onSelect() {
        console.log("pick me!")
    }

    return (
        <>
            {/* display questions */}
            <div className="questions">
                <h2>{question.question}</h2>


                <ul key={question.id}>
                    {
                        question.options.map((q, idx) => (
                            <li key={idx}>
                                <input type="radio" value={true} name="options" id={`q${idx}-option`} onChange={onSelect} />
                                <label htmlFor={`q${idx}-option`}>{q}</label>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )

}