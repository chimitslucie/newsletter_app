function Form() {
    

    return (
        <form className="form">
            <div className="formContentText">
                <label className="formText" htmlFor="email">Email address</label>
                <p className="formTextError">Valid email required</p>
            </div>
            <input
                type="text"
                id="email"
                className="formEmail"
                placeholder="email@company.com"
            />
            <button className="formBtn" type="submit">
                Subscribe to monthly newsletter
            </button>
        </form>
    )
}

export default Form;