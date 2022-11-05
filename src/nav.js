import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <Link to="/">Labs</Link> |
            <Link to="/labs/a6">A6</Link> |
            <Link to="/labs/a7">A7</Link> |
            <Link to="/tuiter">Tuiter</Link>
        </div>
    )
}
export default Nav;