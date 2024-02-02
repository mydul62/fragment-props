import Item from "./Item";
let Items = ({items}) =>{
  return(
    <>
    <ul className=" pl-10 py-6 *:py-1">
        {items.map((item)=>(
        <Item key={item} foodItem={item}></Item>
        ))}
      </ul>
    </>
  )
}
export default Items;
