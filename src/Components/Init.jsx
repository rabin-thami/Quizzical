
const Init = ({startGame}) => {
    return (
      <section className="init-section">
            <h1>Quizzical</h1>
            <p>Let's Test you General Knowladge</p>
            <button onClick={startGame}> Lets Start</button>
      </section>
    )
}

export default Init