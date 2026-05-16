import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Customers from "./components/Customers";
import CustomerForm from "./components/CustomerForm";
import CustomerDetails from "./components/CustomerDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/customers" element={<Customers />} />

        <Route path="/add-customer" element={<CustomerForm />} />

        <Route
          path="/customer/:id"
          element={<CustomerDetails />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;