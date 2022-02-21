import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import MobileDevelopment from "../Pages/MobileDevelopment";
import Ecommerce from "../Pages/Ecommerce";
import Accounting from "../Pages/Accounting";
import QATesting from "../Pages/QATesting";

import Navbar from "../components/Navbar";
const Routers = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/MobileDevelopment" element={<MobileDevelopment />}></Route>
              <Route exact path="/Ecommerce" element={<Ecommerce />}></Route>
                <Route exact path="/Accounting" element={<Accounting />}></Route>
                  <Route exact path="/QATesting" element={<QATesting />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default Routers;
