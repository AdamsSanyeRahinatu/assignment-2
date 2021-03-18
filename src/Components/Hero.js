import ButtonContainer from "./ButtonContainer"

function Hero() {
    const styles = {
        background: "black",
        height: 40,
        width: 150,
        color: "white",
    }
    return(
        <header>
            <div className="hero">
                <h2>Rammy's </h2>
                <h4>Come for the best learning experience</h4>
            <ButtonContainer styles={styles} title="BUY"/>
            </div>
        </header>
    )
}
export default Hero;