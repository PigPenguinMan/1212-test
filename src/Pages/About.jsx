import { Link } from "react-router-dom";

const About = ()=>{
    return(
        <div>
            <h1>아래 버튼을 누르면 Home으로 돌아갑니다</h1>
            <Link to='/home'><button>home으로 돌아가기</button></Link>
        </div>
    )
}
export default About;