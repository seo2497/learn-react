//App.js 파일에 설정
import React, { useState } from 'react'

const Greeting = () => {
  // logic
  // let username = "";
  const [username, setUsername] = useState("")
  
  const handleClick = () => {
    // 사용자 이름 텍스트 변경
    // username = window.prompt("당신의 이름은 무엇인가요?")
    //수정할 값을 인자로 넣어서 state 업데이트
    setUsername( window.prompt("당신의 이름은 무엇인가요?"))
    console.log("🚀 ~ handleClick ~ username:", username)
  }
  //view
  return (
    <div style={{"background":"pink", "padding":"5px"}}>
      <p>
        안녕하세요, {username}님 !
      </p>
      <p>
        오늘도 좋은 하루 보내세요😊
      </p>
      <button type='button' onClick={handleClick}>입력</button>
    </div>
  )
}

export default Greeting