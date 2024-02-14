import React, { useState } from 'react'
import { BiLogoMessenger, BiSolidPaperPlane, BiSolidPhone} from 'react-icons/bi'
import { RiMapPin2Fill} from 'react-icons/ri'

const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
}

export default function Contact() {

    const [state, setState] = useState(initialState);

    const handleChange = e => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        let { name, email, subject, message } = state
        name = name.trim()
        email = email.trim()
        subject = subject.trim()
        message = message.trim()
        if (name.length < 3) {
            return console.log("Name length should be at least 3 characters")
        }
        if (!email) {
            return console.log("Email is required")
        }
        if (subject.length < 3) {
            return console.log("subject length should be at least 3 characters")
        }
        if (message.length < 10) {
            return console.log("Message length should be at least 10 characters")
        }
        // console.log(state)
        let text = `Name: ${name} %0A Email: ${email} %0A Subject: ${subject} %0A Message: ${message}`

        // window.location.href = `https://api.whatsapp.com/send?phone=+923081062309&text=${text}, '_blank'`
        window.open(`https://api.whatsapp.com/send?phone=+923081062309&text=${text}`, '_blank');
    }

    // let whatsappMsg = document.getElementById('whatsappMsg');
    // whatsappMsg.addEventListener('click', () => {
    //     let name = document.getElementById('name').value;
    //     let email = document.getElementById('email').value;
    //     let subject = document.getElementById('subject').value;
    //     let message = document.getElementById('message').value;
    //     let text = `Name: ${name} %0A Email: ${email} %0A Subject: ${subject} %0A Message: ${message}`;
    //     whatsappMsg.setAttribute("href", `https://api.whatsapp.com/send?phone=+923081062309&text=${text}`);
    // })

    return (
        <div className="contact" id='contact'>
            <div className="container">
                <div className="projectText">
                    <h2 className='topHeading'>Contact us</h2>
                    <h1 className='mainHeading'>Have a Project?</h1>
                    <p className='mainPara'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                </div>
                <div className="contactBox">
                    <div className="box1 p-5">
                        <form>
                            <div className="input">
                                <input type="text" placeholder='Your Name' className='form-control shadow-none me-4' name='name' onChange={handleChange} />
                                <input type="email" placeholder='Your Email' className='form-control shadow-none' name='email' onChange={handleChange} />
                            </div>

                            <div className="input">
                                <input type="text" placeholder='Subject' className='form-control shadow-none' name='subject' onChange={handleChange} />
                            </div>
                            <div className="input">
                                <textarea name="message" placeholder='Message' className='form-control shadow-none' onChange={handleChange}></textarea>
                            </div>
                            <button className='btn' onClick={handleSubmit}>Send Message on WhatsApp</button>
                        </form>
                    </div>
                    <div className="box2">
                        <div className="address">
                            <div className="addressIcon">
                                <RiMapPin2Fill/>
                            </div>
                            <div className="addressData">
                                <span>Address:</span>
                                <p>Arifwala, Punjab Pakistan</p>
                            </div>
                        </div>
                        <div className="address">
                            <div className="addressIcon">
                                <BiSolidPhone />
                            </div>
                            <div className="addressData">
                                <span>Phone:</span>
                                <p>+92 308 1062309</p>
                            </div>
                        </div>
                        <div className="address">
                            <div className="addressIcon">
                                <BiSolidPaperPlane />
                            </div>
                            <div className="addressData">
                                <span>Email:</span>
                                <p>numanirshad78@gmail.com</p>
                            </div>
                        </div>
                        <div className="address">
                            <div className="addressIcon">
                                <BiLogoMessenger />
                            </div>
                            <div className="addressData">
                                <span>Address:</span>
                                <p>Arifwala, Punjab Pakistan</p>
                            </div>
                        </div>
                        <div className="address">
                            <div className="addressIcon">
                                <BiLogoMessenger />
                            </div>
                            <div className="addressData">
                                <span>Address:</span>
                                <p>Arifwala, Punjab Pakistan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
