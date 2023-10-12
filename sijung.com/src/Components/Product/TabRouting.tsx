import React from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import Tab1 from "./JS02P";
import Tab2 from "./JS06";
import Tab3 from "./JS08";

function TabsWithRouting() {
  let { tab } = useParams();

  return (
    <div>
      <div>
        <Link to="tab1">JS-02P</Link>
        <Link to="tab2">JS-06</Link>
        <Link to="tab3">JS-08</Link>
      </div>
      <Routes>
        <Route path="tab1" element={<Tab1 />} />
        <Route path="tab2" element={<Tab2 />} />
        <Route path="tab3" element={<Tab3 />} />
      </Routes>
    </div>
  );
}

export default TabsWithRouting;