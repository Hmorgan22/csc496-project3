import React, { useState } from 'react';

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
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="HomeAddress">Home Address:</label>
                    <input
                        type="text"
                        id="homeAddress"
                        name="homeAddress"
                        value={formData.homeAddress}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="who">Who will I be photographing? Please list names and relationships, pets included:</label>
                    <input
                        type="text"
                        id="who"
                        name="who"
                        value={formData.who}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="kids">For those with littles, what are their ages, and what makes them smile and laugh?</label>
                    <input
                        type="text"
                        id="kids"
                        name="kids"
                        value={formData.kids}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="poses">Are there any specific groupings or poses that you would like to have?</label>
                    <input
                        type="text"
                        id="poses"
                        name="poses"
                        value={formData.poses}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="questions">Do you have any concerns or questions about anything else? I'm here to help this be a fun and easy experience for everyone involved.</label>
                    <input
                        type="text"
                        id="questions"
                        name="questions"
                        value={formData.questions}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ClearInputForm;
