import "./styles/contact.css"

export const Contact = () => {
return (
    <> 
    <div className="hero">
        <h1>Contact Us!</h1>
        <p className="herotexto">If you have any trouble with you purchase, please contact us so we can resolve your problem ASAP!</p>
    </div>
    <div className="contactContainer">
        <div className="location">
            <h3>Our place</h3>
            <p><span>Direction:</span> <br /> Alcina 956, Trinidad, San isidro</p>
            <p><span>Cellphone:</span> <br /> +23 3544-8346</p>
            <p><span>Schedules:</span> <br />  Monday to Friday: 8am to 7pm, Saturday and Sunday: closed </p>
            <div className="mapaInfo">
            <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989272.0052939514!2d-110.19962168586514!3d42.97382993501063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875ee23448e12e69%3A0x26b02279d27d382f!2sWyoming%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1694631175690!5m2!1ses-419!2sar"
        width="100%"
        height="200"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
            </div>  
        </div>
        <div className="contactForm">
        <h3>Contact Us!</h3>
        <form> 
            <label>Name</label>
            <input type="text"/>
            <label>Email</label>
            <input type="email" name="" id="" />
            <label>Message</label>
            <textarea cols="30" rows="10"></textarea>
        </form>
        <div className='buttons'> 
        <button>Send</button>
        <button>Cancel</button>
        </div>
        </div>
    </div>
    </>
)
}
