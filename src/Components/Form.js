function Form () {
    return (
        <section>
            <div>
                <h2>PLACE YOUR ORDER</h2>
            </div>
            <form>
                <input type="text" placeholder="Enter Name"/>
                <input type="password" placeholder="Enter Password"/>
                <input type="email" placeholder="Enter Email"/>
                <input type="text" placeholder="Enter Contact"/>
                <textarea type="message" placeholder="Describe message"></textarea>
                <button>SUBMIT</button>
            </form>
        </section>
    )
}
export default Form;