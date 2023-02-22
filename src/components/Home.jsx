import React from "react";
import { useState } from "react";

function Home() {
  const [text, setText] = useState("");
  const [tweet, setTweet] = useState([]);

  const handlesubmit = (e) => {
    e.preventDefault();
    setText("");
    setTweet([...tweet, text].reverse())
  
  };
  return (
    <div className="absolute  left-1/4 w-1/3 top-10 max-sm:left-1/2 max-sm:top-4 max-sm:w-auto ">
     <strong>Anasayfa</strong> 
      <form onSubmit={handlesubmit}>
        <input
        type="text"
          className=" flex w-full h-[181px] cursor-text rounded-lg "
          placeholder="Neler oluyor?"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button className="bg-blue-300 rounded-3xl absolute z-10 right-4 top-[150px]  text-white w-[91px] h-[32px] max-sm:right-1" onClick={handlesubmit}> Tweetle</button>
      </form>
     <div>
      {tweet.map((t)=>(
      <p className="">{t}</p>
      ))}
     <p></p>
     </div>



    </div>
  );
}

export default Home;
