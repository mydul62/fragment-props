let DisplayTime=()=>{
  let time =new Date();
  return <div className=" text-xl text-center py-2 ">
    This is current time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}AM
    </div>
}
export default DisplayTime; 