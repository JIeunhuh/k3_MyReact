import { Link } from "react-router-dom";

const FcstNav=()=>{

    return(<nav>
        <ul>
        <li>기상청 단기예보</li>
        </ul>
        <ul>
            <li><Link to='/'>HOME</Link></li>
        </ul>
    </nav>);
}
export default FcstNav;