import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/custom.css';

const ClearInputForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        homeAddress: '',
        who: '',
        kids: '',
        poses: '',
        questions: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process the form data as needed (e.g., send it to a server or perform some action)
        console.log('Form submitted with data:', formData);

        // Clear the input fields
        setFormData({
            name: '',
            email: '',
            homeAddress: '',
            who: '',
            kids: '',
            poses: '',
            questions: '',
        });
    };

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className='custom-padding'>
                                <Row><label htmlFor="name">Name:</label></Row>
                                <Row>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                </Row>
                            </div>
                            <div className='custom-padding'>
                                <Row><label htmlFor="email">Email:</label></Row>
                                <Row> <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                /></Row>
                            </div>
                            <div className='custom-padding'>
                                <Row><label htmlFor="HomeAddress">Home Address:</label></Row>
                                <Row> <input
                                    type="text"
                                    id="homeAddress"
                                    name="homeAddress"
                                    value={formData.homeAddress}
                                    onChange={handleInputChange}
                                /></Row>
                            </div>
                            <div className='custom-padding'>
                                <Row><label htmlFor="who">Who will I be photographing? Please list names and relationships, pets included:</label></Row>
                                <Row><input
                                    type="text"
                                    id="who"
                                    name="who"
                                    value={formData.who}
                                    onChange={handleInputChange}
                                /></Row>
                            </div>
                            <div className='custom-padding'>
                                <Row><label htmlFor="kids">For those with littles, what are their ages, and what makes them smile and laugh?</label></Row>
                                <Row><input
                                    type="text"
                                    id="kids"
                                    name="kids"
                                    value={formData.kids}
                                    onChange={handleInputChange}
                                /></Row>
                            </div>
                            <div className='custom-padding'>
                                <Row><label htmlFor="poses">Are there any specific groupings or poses that you would like to have?</label></Row>
                                <Row><input
                                    type="text"
                                    id="poses"
                                    name="poses"
                                    value={formData.poses}
                                    onChange={handleInputChange}
                                /></Row>
                            </div>
                            <div className='custom-padding'>
                                <Row><label htmlFor="questions">Do you have any concerns or questions about anything else? I'm here to help this be a fun and easy experience for everyone involved.</label></Row>
                                <Row><input
                                    type="text"
                                    id="questions"
                                    name="questions"
                                    value={formData.questions}
                                    onChange={handleInputChange}
                                /></Row>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ClearInputForm;
