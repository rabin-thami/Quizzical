import { useEffect } from "react"

const ShowQuestion = ({resetState}) => {

    return ( 
        <>
            <h1>Question Components</h1>
            <button onClick={resetState}> Reset state</button>
        </>
    )
}

export default ShowQuestion