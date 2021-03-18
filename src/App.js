import NavBar from "./Components/NavBar"
import Hero from "./Components/Hero"
import Counter from "./Components/Counter"
import Products from "./Components/Products"
import Form from "./Components/Form"
import ButtonContainer from "./Components/ButtonContainer"
import Footer from "./Components/Footer"
function App() {
  return (
      <>
      <NavBar />
      <main>
        <Hero />
        <Counter />
        <Products />
        <Form />
        <ButtonContainer />
        <Footer/>
      </main>
      </>
  );
}

export default App;
