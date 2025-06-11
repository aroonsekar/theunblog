import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://theunblog.in/api/posts")
      .then(res => res.json())
      .then(setPosts);
  }, []);

  return (
    <div className="App">
      <h1>The Unblog 🧠...yeah</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
