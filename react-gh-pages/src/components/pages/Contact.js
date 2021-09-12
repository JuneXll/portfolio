import React, { useState } from 'react';
import { Container, Col } from 'react-bootstrap';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const Contact = ()=>{
    const [form, setForm] = useState({name:'', email:'',message:''})

    const handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...form })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));
  
        e.preventDefault();
      };
  
      const handleChange = e => setForm({ [e.target.name]: e.target.value });

    return(
        <Container className='h-100 w-100'>
            <main className='d-flex flex-column justify-content-center align-items-center my-5' style={{backgroundColor:'white', borderRadius:'15px'}}>

                <h1>Hire Me</h1>
            
                <Container className='d-flex flex-wrap my-5 justify-content-center'>
                    <Col className='d-flex justify-content-center col-xl-2 col-md-6 my-2'>
                        <a href='mailto:juniettehernandez1@gmail.com'>
                            <i className="fas fa-envelope fa-5x" ></i>
                        </a>
                    </Col>

                    <Col className='d-flex justify-content-center col-xl-2 col-md-6 my-2'>
                        <a href="https://www.linkedin.com/in/juniettehernandez/" target="_blank" alt='linkedin' rel="noreferrer" >
                            <i className="fab fa-linkedin-in fa-5x"></i>
                        </a>
                    </Col>

                    <Col className='d-flex justify-content-center col-xl-2 col-md-6 my-2'>
                        <a href="https://github.com/JuneXll" target="_blank" alt='github' rel="noreferrer">
                            <i className="fab fa-github fa-5x"></i>
                        </a>
                    </Col>

                    <Col className='d-flex justify-content-center col-xl-2 col-md-6 my-2'>
                        <a href="https://twitter.com/JunebugXll" target="_blank" alt='twitter' rel="noreferrer" >
                            <i className="fab fa-twitter fa-5x"></i>
                        </a>
                    </Col>
                </Container>

                <Container>
                    <form name="contact" method="post" onSubmit={handleSubmit}>
                        <input type="hidden" name="form-name" value="contact" />
                        <p>
                            <label>
                                Your Name: <input type="text" name="name" value={form.name} onChange={handleChange} />
                            </label>
                        </p>
                        <p>
                            <label>
                                Your Email: <input type="email" name="email" value={form.email} onChange={handleChange} />
                            </label>
                        </p>
                        <p>
                            <label>
                                Message: <textarea name="message" value={form.message} onChange={handleChange} />
                            </label>
                        </p>
                        <p>
                            <button type="submit">Send</button>
                        </p>
                    </form>
                </Container>

            </main>
        </Container>
    )
}

export default Contact;