import './App.css';
import { useState } from 'react'; 

function App() {

  let [title, setTitle] = useState(['남자 코드 추천', '강남 코드 추천', '파이썬 코드']);
  let [따봉, 따봉변경] = useState(0);


  function 글자변경(){
    let copy = [...title];
    copy[0] = "여자 코드 추천"
    setTitle(copy);  
  }

  function 함수(){
    따봉변경(따봉 + 1);
  }

  function 가나다순(){
    let copy01 = [...title];
    copy01.sort();

    console.log(copy01)
    setTitle(copy01);
  }

  return (
  <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>

      <button onClick={가나다순}>가나다순 정렬</button>

      <button onClick={글자변경}>글수정</button>

      <div className="list">
        <h4>{ title[0] } <span onClick={함수} style={{"cursor": "pointer"}}>👍</span> {따봉} </h4>
        <p>2월 17일 발행 </p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>2월 17일 발행 </p>
      </div>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>2월 17일 발행 </p>
      </div>

    </div>
  );
}

export default App;
