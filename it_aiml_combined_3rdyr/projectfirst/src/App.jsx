
// import './App.css'

// import Contact from "./Contact";
import Home from "./Home";
import Shoppinglist from "./Shoppinglist";

function App(){
  return(
    <>
    {/* <Home name="iphone17" price="00" /> */}
    {/* <Contact /> */}
     <div style={{display:"flex",justifyContent:"space-evenly",gap:"10px"}}>  
         <Shoppinglist />   
     </div>
    
    <h1>hello world</h1>
    </>
  )
}
export default App;