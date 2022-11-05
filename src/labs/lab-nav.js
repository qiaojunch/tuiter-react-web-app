import {Link} from "react-router-dom";
import Nav from "../nav";

const LabNav = () => {
    return (
        <>
            <Nav />
            <Link to="a6">A6</Link><br/>
            <Link to="a7">A7</Link>
        </>
    )
}

export default LabNav;