import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function CustomerCard({ customer }) {
  const navigate = useNavigate();

  const deleteCustomer = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/customers/${customer._id}`
      );

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="card shadow border-0 p-3 text-center"
      style={{ borderRadius: "20px" }}
    >
      <img
        src={
          customer.image ||
          "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        }
        alt="customer"
        className="rounded-circle mx-auto mb-3"
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
          border: "4px solid pink",
        }}
      />

      <h2>{customer.name}</h2>

      <h5>Code : {customer.code}</h5>

      <p>📞 {customer.mobile}</p>

      <p>📍 {customer.address}</p>

      <div className="d-flex justify-content-center gap-2 mt-3">
        <Link
          to={`/customer/${customer._id}`}
          className="btn btn-primary"
        >
          Details
        </Link>

    

        <button
          className="btn btn-danger"
          onClick={deleteCustomer}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CustomerCard;