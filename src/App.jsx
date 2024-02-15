
import { useEffect, useState } from "react"
import Init from "./Components/Init"
import TopBottomImage from "./Components/TopBottomImage"

const App = () => {
    const [isQuize, setIsQuize] = useState(false)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        if(!isQuize) {
            return;
        }

        setLoading(true)
        async function fetchAndLogQuestion() {
            const res = await fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy');
            const data = await res.json();
            console.log(data);
        }
    

        fetchAndLogQuestion();
    })

    
    

    const quizStartHandler = () => {
        
    }
    return (
        <main>
            <TopBottomImage/>
            <Init startGame ={quizStartHandler}/>
        </main>
    )
}

export default App