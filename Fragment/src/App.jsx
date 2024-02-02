import Items from "./components/items";
import Errormassege from "./components/Errormassege";
function App() {
  let foods = ["mango", "banana", "Angur", "Jackfood", "Law"];
  return (
    <>
      <div className="Food_page container mx-auto max-w-[70%] bg-orange-400">
      <h1> You can Take this food</h1>
      <Errormassege items={foods}></Errormassege>
      <Items items={foods}></Items>
      </div>
    </>
  );
}

export default App;
