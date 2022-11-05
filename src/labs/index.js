import Assignment6 from "./a6";
import Assignment7 from "./a7";
import LabNav from "./lab-nav";
import { Routes, Route } from "react-router";

function Labs() {
    return (
    <div>
        <Routes>
            <Route index element={<LabNav/>}></Route>
            <Route path="a6" element={<Assignment6 />}></Route>
            <Route path="a7" element={<Assignment7 />}></Route>
        </Routes>
    </div>
    )
}
export default Labs;