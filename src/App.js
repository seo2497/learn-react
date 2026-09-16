import Card from "./components/Card";
import Greeting from "./components/Greeting";

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
      변경~ !!

      {/* <Greeting />
      <Greeting /> */}
      <Card imgUrl={"https://cf.image-farm.s.zigzag.kr/original/cms/2026/09/10/202609100241225840_031442.jpg?width=1029&height=1188&quality=80&format=webp&transparent=true"} itemName={"모델1"}/>
      <Card imgUrl={"https://cf.image-farm.s.zigzag.kr/original/cms/2026/09/06/202609061348032352_092237.png?quality=80&format=webp&transparent=true&width=1029&height=1188"} itemName={"모델2"}/>
      <Card imgUrl={"https://cf.product-image.s.zigzag.kr/original/d/2026/8/24/2833_202608241452277531_95137.gif?width=400&height=400&quality=80&format=webp&transparent=true"} itemName={"모델3"}/>
      <Card />
      <Card />
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
