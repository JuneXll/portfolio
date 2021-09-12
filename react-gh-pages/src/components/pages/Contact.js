import React, { useState } from 'react';
import { Container, Col, Form, Button} from 'react-bootstrap';
import { CDBAnimation } from "cdbreact";

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
            <main className='row mx-2 my-5'>

                <CDBAnimation type='pulse' count='2'>
                    <h1 className="d-flex justify-content-center align-items-center" style={{color:'white'}}>Hire Me</h1>
                </CDBAnimation>
            
                <Container className='d-flex flex-wrap my-5 justify-content-center col-xl-5 col-md-12 pt-2' style={{backgroundColor:'white', borderRadius:'15px'}}>
                    <Col className='d-flex justify-content-center col-xl-6 col-md-4 my-2'>
                        <a href='mailto:juniettehernandez1@gmail.com' style={{color:'black'}}>
                            <i className="fas fa-envelope fa-5x" ></i>
                        </a>
                    </Col>

                    <Col className='d-flex justify-content-center col-xl-6 col-md-4 my-2'>
                        <a href="https://www.linkedin.com/in/juniettehernandez/" target="_blank" alt='linkedin' rel="noreferrer" style={{color:'black'}}>
                            <i className="fab fa-linkedin-in fa-5x"></i>
                        </a>
                    </Col>

                    <Col className='d-flex justify-content-center col-xl-6 col-md-4 my-2'>
                        <a href="https://github.com/JuneXll" target="_blank" alt='github' rel="noreferrer" style={{color:'black'}}>
                            <i className="fab fa-github fa-5x"></i>
                        </a>
                    </Col>

                    <Col className='d-flex justify-content-center col-xl-6 col-md-4 my-2'>
                        <a href="https://twitter.com/JunebugXll" target="_blank" alt='twitter' rel="noreferrer" style={{color:'black'}} >
                            <i className="fab fa-twitter fa-5x"></i>
                        </a>
                    </Col>
                </Container>

                <Container className='col-xl-5 col-md-12 py-2 mt-3' style={{backgroundColor:'white', borderRadius:'15px'}}>
                    <Form name="contact" method="post" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="FullName">
                            <Form.Label value={form.name} onChange={handleChange}>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="John Doe" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Email">
                            <Form.Label value={form.email} onChange={handleChange}>Email address</Form.Label>
                            <Form.Control type="email" placeholder="johnd@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="textArea">
                            <Form.Label value={form.message} onChange={handleChange}>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="outline-dark" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>

            </main>
        </Container>
    )
}

export default Contact;

