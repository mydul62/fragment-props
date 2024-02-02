let BestFood = () =>{
  let foods =['mango','banana','Angur','Jackfood','Law'];
  return <>
 <div className="container mx-auto">
 <div className=" font-bold text-2xl">You can Take this food</div>
 
 {/* {foods.length==0? <h2>I am still hungry</h2> :null} */}
 {foods.length==0 && <h3>I am hungry</h3> }

  <ul>
    {foods.map((food)=>(
    <li key={food} >{food}</li>
    ))}
  </ul>
  </div>
  </>

}
export default BestFood;