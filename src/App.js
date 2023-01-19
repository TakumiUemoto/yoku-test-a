import React from 'react';
import axios from 'axios';
import './App.css';

const baseURL = "https://catfact.ninja/fact";
const initialFact = "Cats have about 130,000 hairs per square inch (20,155 hairs per square centimeter).";

export default function App() {
    const [post, setPost] = React.useState(initialFact);
    const [error, setError] = React.useState(null);
    const renderFlgRef = React.useRef(false);

    React.useEffect(() => {
      if(renderFlgRef.current) {
        axios.get(baseURL).then((res) => {
            setPost(res.data);
            console.log(res.data);
        }).catch(error => {
          setError(error);
        });} else {
          renderFlgRef.current = true;
        }
}, [post]);

  if(error) return `Error: ${error.message}`;
  if(!post) return "no Post!";
  
    return (
      <div>
        <p>{post.fact}</p>
        <p>{post.length}</p>
        <button >更新</button>
      </div>
    );
  }