import { useEffect, useState } from "react";
import axios from "axios";
import CustomerCard from "./CustomerCard";

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/customers")
      .then((res) => {
        console.log(res.data);
        setCustomers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {customers.length > 0 ? (
          customers.map((customer) => (
            <div className="col-md-4 mb-4" key={customer._id}>
              <CustomerCard customer={customer} />
            </div>
          ))
        ) : (
          <h3 className="text-center">No Customers Found</h3>
        )}
      </div>
    </div>
  );
}

export default Customers;