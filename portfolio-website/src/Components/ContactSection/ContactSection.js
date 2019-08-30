import React, { Component } from 'react';
import { Container, Form, FormGroup, Input, Button } from 'reactstrap';

class ContactSection extends Component {

    render() {
        return (
            <div className='pt-5 pb-5'>
                <Container className='text-center'>
                    <h1 className='sectionTitle lead'>Contact</h1>
                    <div className='line mb-4'/>
                    <p>Interested in building a project together? <br/>You can reach me at <b>contact@marcelriera.me</b>, or you can fill the form below.</p>
                    <Form className='pt-4 pb-4'>
                        <FormGroup>
                            <Input type='text' placeholder='Name' />
                        </FormGroup>
                        <FormGroup>
                            <Input type='email' placeholder='Email' />
                        </FormGroup>
                        <FormGroup>
                            <Input type='textarea' placeholder='Message' rows='4'/>
                        </FormGroup>
                        <FormGroup>
                            <Button color='primary'>Submit</Button>
                        </FormGroup>
                    </Form>

                </Container>
            </div>
        );
    }

}

export default ContactSection;