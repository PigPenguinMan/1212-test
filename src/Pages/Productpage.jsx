import { useParams } from "react-router-dom";

const ProductPage = ()=>{
    const { productName } = useParams();
    
    return(
        <div>
            <h1>{productName}
            </h1>
            <h3>상품의 이름으로 상품 페이지를 출력하고 있습니다</h3>
        </div>
    )
}

export default ProductPage;