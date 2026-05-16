import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CustomerForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [code, setCode] = useState("");
  const [image, setImage] = useState("");

  // IMAGE FILE HANDLE
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const addCustomer = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/customers",
        {
          name,
          mobile,
          address,
          code,
          image,
        }
      );

      navigate("/customers");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "#ffe4ec",
      }}
    >
      <div
        className="card p-4 shadow"
        style={{
          width: "400px",
          borderRadius: "15px",
        }}
      >
        <h1 className="text-center mb-4">
          Add Customer
        </h1>

        <form onSubmit={addCustomer}>

          {/* IMAGE URL */}
          <input
            type="text"
            placeholder="Image URL"
            className="form-control mb-3"
            value={image}
            onChange={(e) =>
              setImage(e.target.value)
            }
          />

          {/* IMAGE FILE */}
          <input
            type="file"
            className="form-control mb-3"
            onChange={handleImage}
          />

          {/* PREVIEW */}
          {/* {image && (
            <div className="text-center mb-3">
              <img
                src={image}
                alt="preview"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
          )} */}

          <input
            type="text"
            placeholder="Customer Name"
            className="form-control mb-3"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="number"
            placeholder="Customer Code"
            className="form-control mb-3"
            value={code}
            onChange={(e) =>
              setCode(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="form-control mb-3"
            value={mobile}
            onChange={(e) =>
              setMobile(e.target.value)
            }
          />

          <textarea
            placeholder="Address"
            className="form-control mb-3"
            value={address}
            onChange={(e) =>
              setAddress(e.target.value)
            }
          />

          <button
            className="btn btn-primary w-100"
            type="submit"
          >
            Add Customer
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomerForm;