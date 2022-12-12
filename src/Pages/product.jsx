import { useState } from "react";
import { Link,  } from "react-router-dom";

const Product= ()=>{
    const [input,setInput]= useState("");
    
    return(
        <div>
            <h1>값을 입력받아 페이지를 이동합니다</h1>
            <input type="text" onChange={(e)=>{setInput(e.target.value)}} />
            <Link to={`/product/${input}`} >페이지 이동</Link>
        </div>
    )
}
export default Product;