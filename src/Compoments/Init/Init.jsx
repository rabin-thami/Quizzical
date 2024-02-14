const Init = () => {

    return (
        <section className="init-container">
            <div className="image-container">
                <img src="./topImg.png" alt="top-image" className="top-image" />
                <img src="./bottomImg.png" alt="bottom-image" className="bottom-image"/>
            </div>
            <div className="init-main-container">
                <h1>Quizzical</h1>
                <p>Engage your mind and challenge your friends with our interactive quiz app!</p>
                <button>Start</button>
            </div>
        </section>
    )
}

export default Init