import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import NoPage from "../NoPage/NoPage";
import Layout from "../../layout/Layout/Layout";
import Schedule from "../Schedule/Schedule";
import AddEvent from "../AddEvent/AddEvent";
export function Main() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="Schedule" element={<Schedule />} />
            <Route path="AddEvent" element={<AddEvent />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

//   export default App;