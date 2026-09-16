import Greeting from "./Greeting";

function App() {
  // logic
  // 구조분해할당 - object destructuring 배열에 할당하는 값을 쉽게 할당
  // 기존 코딩은 각각 할당
  const animals = ["dog", "cat", "pig"];
  // const second = animals[1]
  
  const [first, second] = animals

  console.log("🚀 ~ App ~ first:", first)
  console.log("🚀 ~ App ~ second:", second)
  // view
  return (
    <div className="App">
      변경 !!

      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />
    </div>
  );
}

const todoItem = {
todo : "React학습하기",
isComplete : false
}

const {todo:todoname, isComplete } = todoItem
 console.log("🚀 ~ isComplete:", isComplete)
 console.log("🚀 ~ todoname:", todoname)
 console.log("🚀 ~ todo:", todoname)
 
export default App;
