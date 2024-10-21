"use client";
import { useState } from 'react';
import Link from 'next/link';

const BlogList = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Blog Post', excerpt: 'The Journey of a Web Developer: From Novice to Expert' },
    { id: 2, title: 'Second Blog Post', excerpt: 'Essential Tools for Every Web Developer' },
  ]);

  const [newPost, setNewPost] = useState({ title: '', excerpt: '' });
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.excerpt) {
      const newId = posts.length + 1;
      const newBlogPost = { id: newId, title: newPost.title, excerpt: newPost.excerpt };
      setPosts((prevPosts) => [...prevPosts, newBlogPost]); 
      setNewPost({ title: '', excerpt: '' });
      setShowForm(false);
    }
  };
  const handleDelete = (id) => {
    setPosts((prevPosts) => prevPosts.filter(post => post.id !== id)); 
  };

  return (
    <div className="backdrop-blur-sm h-screen">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Blog Posts</h2>
        
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="border p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <div className="flex justify-between items-center">
                <div>
                  <Link href={`/blog/${post.id}`}>
                    <h3 className="text-xl font-semibold text-blue-600 hover:underline">{post.title}</h3>
                  </Link>
                  <p className="text-gray-600 mt-2">{post.excerpt}</p>
                </div>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="bg-red-500 text-white font-bold py-1 px-2 rounded hover:bg-red-700 transition-colors duration-300"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 text-center">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
          >
            {showForm ? 'Cancel' : 'Create New Post'}
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={newPost.title}
                onChange={handleInputChange}
                className="border p-2 rounded-lg text-black outline-none focus:border-cyan-200"
                placeholder="Enter post title"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700">Excerpt</label>
              <textarea
                name="excerpt"
                value={newPost.excerpt}
                onChange={handleInputChange}
                className="border p-2 rounded-lg text-black outline-none focus:border-cyan-200"
                placeholder="Enter post excerpt"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300"
              >
                Add Post
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BlogList;
