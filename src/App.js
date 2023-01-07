import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

export default function App(props){

  const initialText = 'Cats have about 130,000 hairs per square inch (20,155 hairs per square centimeter).';
  //関数コンポーネントが持つstateを定義　*const [状態変数, 状態変数の更新関数] = useState(初期値)
  //useStateの引数にはstateの初期値が入る　
  const [post, setPost] = useState(initialText);
  const onButtonClick = () => {
    const newText = randomFact;
    setPost(newText);
  }

  //axios
  useEffect(() => {
    axios
      .get('https://catfact.ninja/fact') 
      .then(res => {
        setPost(res.data);
      });
    }, []);
  if(!post) return null;

  const randomFact = post.fact;
  const style = {display: 'flex',alignItems: 'center', textAlign: 'left', fontSize: '28px',};
  
    return (
      <div className="App" {...{style}}>
        <p >{post}</p> 
        <button onClick={onButtonClick}>更新</button>
      </div>
    );
  
}
