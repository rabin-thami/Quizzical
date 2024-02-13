const Init = () => {

    return (
        <section className="init-container">
            <div className="image-container">
                <img src="./topImg.png" alt="" className="top-img" />
                <img src="./bottomImg.png" alt="" className="bottom-img" />
            </div>
            <div className="start-container">
                <h1 className="init-title">Quizzical</h1>
                <p className="init-description">Engage your mind and challenge your friends with our interactive quiz app!</p>
                <button>Start Quiz</button>
            </div>
        </section>
    )
}

export default Init