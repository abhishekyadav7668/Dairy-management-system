import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function CustomerDetails() {
  const { id } = useParams();

  const [customer, setCustomer] = useState(null);

  // TODAY DATE AUTOMATIC
  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [morning, setMorning] = useState("");
  const [evening, setEvening] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetchCustomer();
  }, []);

  const fetchCustomer = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/customers/${id}`
      );

      setCustomer(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addRecord = async () => {
    try {
      await axios.post(
        `http://localhost:5000/customers/${id}/record`,
        {
          date,
          morning,
          evening,
          price,
        }
      );

      fetchCustomer();

      setMorning("");
      setEvening("");
      setPrice("");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRecord = async (index) => {
    try {
      await axios.delete(
        `http://localhost:5000/customers/${id}/record/${index}`
      );

      fetchCustomer();
    } catch (error) {
      console.log(error);
    }
  };

  if (!customer) {
    return <h1 className="text-center mt-5">Loading...</h1>;
  }

  const totalMilk =
    customer.records?.reduce(
      (acc, item) => acc + item.totalMilk,
      0
    ) || 0;

  const totalPrice =
    customer.records?.reduce(
      (acc, item) => acc + item.totalPrice,
      0
    ) || 0;

  return (
    <div className="container mt-5 mb-5">
      <div className="card shadow p-4 border-0">

        <div className="text-center">
          <img
            src={customer.image}
            alt=""
            className="rounded-circle"
            style={{
              width: "130px",
              height: "130px",
              objectFit: "cover",
            }}
          />

          <h1 className="mt-3 fw-bold">
            {customer.name}
          </h1>

          <h4>Code : {customer.code}</h4>

          <h5>Phone : {customer.mobile}</h5>

          <h5>Address : {customer.address}</h5>

          <h1 className="text-success mt-4">
            Total Milk : {totalMilk} L
          </h1>

          <h1 className="text-danger">
            Total Price : ₹{totalPrice}
          </h1>
        </div>

        {/* ADD RECORD */}

        <div className="row mt-5">
          <div className="col">
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) =>
                setDate(e.target.value)
              }
            />
          </div>

          <div className="col">
            <input
              type="number"
              placeholder="Morning Milk"
              className="form-control"
              value={morning}
              onChange={(e) =>
                setMorning(e.target.value)
              }
            />
          </div>

          <div className="col">
            <input
              type="number"
              placeholder="Evening Milk"
              className="form-control"
              value={evening}
              onChange={(e) =>
                setEvening(e.target.value)
              }
            />
          </div>

          <div className="col">
            <input
              type="number"
              placeholder="Price/Litre"
              className="form-control"
              value={price}
              onChange={(e) =>
                setPrice(e.target.value)
              }
            />
          </div>

          <div className="col">
            <button
              className="btn btn-primary w-100"
              onClick={addRecord}
            >
              Add
            </button>
          </div>
        </div>

        {/* TABLE */}

        <table className="table table-bordered mt-5">
          <thead className="table-dark">
            <tr>
              <th>Date</th>
              <th>Morning</th>
              <th>Evening</th>
              <th>Total Milk</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {customer.records?.map(
              (record, index) => (
                <tr key={index}>
                  <td>{record.date}</td>

                  <td>
                    {record.morning} L
                  </td>

                  <td>
                    {record.evening} L
                  </td>

                  <td>
                    {record.totalMilk} L
                  </td>

                  <td>
                    ₹{record.totalPrice}
                  </td>

                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        deleteRecord(index)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default CustomerDetails;