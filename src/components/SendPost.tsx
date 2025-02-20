import React, { useState } from 'react';
import axios from 'axios';

const SendPost: React.FC = () => {
    const [postInput, setPostInput] = useState({ title: '', body: '' });
    const [responsePost, setResponsePost] = useState<any>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://jsonplaceholder.typicode.com/posts', postInput);
            setResponsePost(res.data);
            setPostInput({ title: '', body: '' });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Create a Post</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Title</p>
                    <input
                        type="text"
                        name="title"
                        value={postInput.title}
                        onChange={e => setPostInput({ ...postInput, title: e.target.value })}
                    />
                </label>
                <label>
                    <p>Body</p>
                    <textarea
                        name="body"
                        value={postInput.body}
                        onChange={e => setPostInput({ ...postInput, body: e.target.value })}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>

            {responsePost && (
                <div>
                    <h2>Post Created Successfully!</h2>
                    <p><strong>Title:</strong> {responsePost.title}</p>
                    <p><strong>Body:</strong> {responsePost.body}</p>
                </div>
            )}
        </div>
    );
};

export default SendPost;
