const Equiry = () => {
    return (
        <section className="enquiry text-center">
            <h3 className="services-highlight-text">Enquiry Form</h3>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="inputField">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className="inputField">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="inputField">
                    <label htmlFor="phoneno">PhoneNo</label>
                    <input type="text" id="phoneno" name="phoneno" />
                </div>
                <div className="inputField">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message"></textarea>
                </div>
                <button type="sumbit">Send Enquiry</button>
            </form>
        </section>
    )
}

export default Equiry;