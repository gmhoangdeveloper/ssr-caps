import React from "react";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
    <img src="https://sites.google.com/site/thietkewebtaihanoi/_/rsrc/1480308136221/kien-thuc-web/tim-kiem-hinh-anh-dep-cho-giao-dien-website/T%C3%ACm%20ki%E1%BA%BFm%20h%C3%ACnh%20%E1%BA%A3nh%20%C4%91%E1%BA%B9p%20cho%20giao%20di%E1%BB%87n%20website-1.jpg"></img>
    <img src="https://sites.google.com/site/thietkewebtaihanoi/_/rsrc/1480308136221/kien-thuc-web/tim-kiem-hinh-anh-dep-cho-giao-dien-website/T%C3%ACm%20ki%E1%BA%BFm%20h%C3%ACnh%20%E1%BA%A3nh%20%C4%91%E1%BA%B9p%20cho%20giao%20di%E1%BB%87n%20website-1.jpg"></img>
    <img src="https://sites.google.com/site/thietkewebtaihanoi/_/rsrc/1480308136221/kien-thuc-web/tim-kiem-hinh-anh-dep-cho-giao-dien-website/T%C3%ACm%20ki%E1%BA%BFm%20h%C3%ACnh%20%E1%BA%A3nh%20%C4%91%E1%BA%B9p%20cho%20giao%20di%E1%BB%87n%20website-1.jpg"></img>
    <img src="https://sites.google.com/site/thietkewebtaihanoi/_/rsrc/1480308136221/kien-thuc-web/tim-kiem-hinh-anh-dep-cho-giao-dien-website/T%C3%ACm%20ki%E1%BA%BFm%20h%C3%ACnh%20%E1%BA%A3nh%20%C4%91%E1%BA%B9p%20cho%20giao%20di%E1%BB%87n%20website-1.jpg"></img>
    <img src="https://sites.google.com/site/thietkewebtaihanoi/_/rsrc/1480308136221/kien-thuc-web/tim-kiem-hinh-anh-dep-cho-giao-dien-website/T%C3%ACm%20ki%E1%BA%BFm%20h%C3%ACnh%20%E1%BA%A3nh%20%C4%91%E1%BA%B9p%20cho%20giao%20di%E1%BB%87n%20website-1.jpg"></img>
    <img src="https://sites.google.com/site/thietkewebtaihanoi/_/rsrc/1480308136221/kien-thuc-web/tim-kiem-hinh-anh-dep-cho-giao-dien-website/T%C3%ACm%20ki%E1%BA%BFm%20h%C3%ACnh%20%E1%BA%A3nh%20%C4%91%E1%BA%B9p%20cho%20giao%20di%E1%BB%87n%20website-1.jpg"></img>
    <img src="https://sites.google.com/site/thietkewebtaihanoi/_/rsrc/1480308136221/kien-thuc-web/tim-kiem-hinh-anh-dep-cho-giao-dien-website/T%C3%ACm%20ki%E1%BA%BFm%20h%C3%ACnh%20%E1%BA%A3nh%20%C4%91%E1%BA%B9p%20cho%20giao%20di%E1%BB%87n%20website-1.jpg"></img>
    <img src="https://sites.google.com/site/thietkewebtaihanoi/_/rsrc/1480308136221/kien-thuc-web/tim-kiem-hinh-anh-dep-cho-giao-dien-website/T%C3%ACm%20ki%E1%BA%BFm%20h%C3%ACnh%20%E1%BA%A3nh%20%C4%91%E1%BA%B9p%20cho%20giao%20di%E1%BB%87n%20website-1.jpg"></img>
    <img src="https://sites.google.com/site/thietkewebtaihanoi/_/rsrc/1480308136221/kien-thuc-web/tim-kiem-hinh-anh-dep-cho-giao-dien-website/T%C3%ACm%20ki%E1%BA%BFm%20h%C3%ACnh%20%E1%BA%A3nh%20%C4%91%E1%BA%B9p%20cho%20giao%20di%E1%BB%87n%20website-1.jpg"></img>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
