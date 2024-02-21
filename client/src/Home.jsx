import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";

const Home = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        subject: '',
        publishdate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/addbook', formData);
            console.log(response.data);
            console.log("added successfully");
            // Optionally, do something with the response
        } catch (error) {
            console.error('Error adding book:', error);
            // Optionally, handle errors
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
            <label htmlFor="title" className="block mb-2">Title</label>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded px-4 py-2 mb-4"
            />
            <label htmlFor="author" className="block mb-2">Author</label>
            <input
                type="text"
                name="author"
                placeholder="Author"
                value={formData.author}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded px-4 py-2 mb-4"
            />
            <label htmlFor="subject" className="block mb-2">Subject</label>
            <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded px-4 py-2 mb-4"
            />
            <label htmlFor="publishdate" className="block mb-2">Publish date</label>
            <input
                type="date"
                name="publishdate"
                placeholder="Publish Date"
                value={formData.publishdate}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded px-4 py-2 mb-4"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Book</button>
        </form>
    );
};

export default Home;
