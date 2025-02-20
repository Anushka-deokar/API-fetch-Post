import React, { useState } from 'react';
import axios from 'axios';

const Post: React.FC = () => {
    const [postId, setPostId] = useState('');
    const [post, setPost] = useState<any>(null);
    const [error, setError] = useState(false);

    // Fetch post by ID only when the user requests it
    const getPost = async (): Promise<void> => {
        if (!postId) return;
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            setPost(res.data);
            setError(false);
        } catch (err) {
            console.error(err);
            setPost(null);
            setError(true);
        }
    };

    return (
        <div className="wrapper">
            <h1>Fetch a Post</h1>
            <input
                type="text"
                value={postId}
                onChange={(e) => setPostId(e.target.value)}
                placeholder="Enter Post ID"
            />
            <button onClick={getPost}>Fetch Post</button>

            {error && <p style={{ color: 'red', marginTop: '10px' }}>Post not found</p>}

            {post && (
                <div className="post-container">
                    <h2>Title: {post.title}</h2>
                    <p><strong>Body:</strong> {post.body}</p>
                </div>
            )}
        </div>
    );
};

export default Post;

