import React from 'react'

function ContactUs() {
    return (
        <div>
            <form action="">
                <h2>Get in touch with us!</h2>
                <label htmlFor="email">Email</label><br />
                <input className="contact-form" type="email"name="email" placeholder="email address" /><br />
                <label htmlFor="subject">Subject</label><br />
                <input className="contact-form" type="text" name="subject" placeholder="Subject Matter" /><br />
                <label htmlFor="description">Description</label><br />
                <input className="contact-form form-description" type="text" name="description" placeholder="Description" /><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default ContactUs
