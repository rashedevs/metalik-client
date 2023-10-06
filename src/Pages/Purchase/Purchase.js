import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import { toast, ToastContainer } from "react-toastify";

const Purchase = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [tool, setTool] = useState({});
  const [status, setStatus] = useState(false);
  const { name, img, description, price, min_order, available_quantity } = tool;

  useEffect(() => {
    if (errors.quantity?.type === "min" || errors.quantity?.type === "max") {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [status, errors.quantity?.type]);

  useEffect(() => {
    fetch(`https://metalik-server.vercel.app/tool/${id}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [tool, id]);
  const onSubmit = (data) => {
    const { address, phone, quantity } = data;
    const remainingQuantity = parseInt(available_quantity - quantity);
    const totalPrice = parseInt(price * quantity);
    const orderedTool = {
      name,
      price: totalPrice,
      email: user?.email,
      address,
      phone,
      description,
      img,
      status: "pending",
      quantity,
      paid: false,
    };
    const updatedTool = {
      name,
      img,
      description,
      min_order,
      available_quantity: remainingQuantity,
      price,
    };

    //update data to the server
    const url1 = `https://metalik-server.vercel.app/tool/${id}`;
    fetch(url1, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTool),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
      });
    //send ordered data to db
    const url = `https://metalik-server.vercel.app/order`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderedTool),
    })
      .then((res) => res.json())
      .then((result) => {
        toast("Order Successful");
        // console.log(result);
      });
    reset();
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-purple-600 font-semibold">{name}</h2>
            <p>
              <span className="text-pink-600 font-semibold">Description:</span>{" "}
              {description}
            </p>
            <p>
              <span className="text-pink-600 font-semibold">Price:</span> $
              {price} /unit
            </p>
            <p>
              {" "}
              <span className="text-pink-600 font-semibold">
                Stock Available:
              </span>{" "}
              {available_quantity} pieces
            </p>
            <p>
              <span className="text-pink-600 font-semibold">
                Minimum Order:
              </span>{" "}
              {min_order} pieces
            </p>
          </div>
          <figure className="px-10 pt-10">
            <img src={img} alt="tool" className="rounded-xl" />
          </figure>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-center text-pink-700 font-bold">
              User: <span className="text-primary">{user.displayName}</span>
            </h2>
            <h2 className="text-center text-pink-500 font-bold">
              Email: <span className="text-primary">{user.email}</span>
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Your Address"
                  className="input input-bordered w-full max-w-xs"
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Address is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.address?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.address.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="number"
                  placeholder="Your Phone Number"
                  className="input input-bordered w-full max-w-xs"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Phone is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.phone?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.phone.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  defaultValue={min_order}
                  type="number"
                  placeholder={`Enter Quantity (${min_order}-${available_quantity})`}
                  className="input input-bordered w-full max-w-xs"
                  {...register("quantity", {
                    required: {
                      value: true,
                      message: "Quantity is required",
                    },
                    min: {
                      value: `${min_order}`,
                      message: `Min order limit is ${min_order}`,
                    },
                    max: {
                      value: `${available_quantity}`,
                      message: `Max order limit is ${available_quantity}`,
                    },
                  })}
                />
                <label className="label">
                  {errors.quantity?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.quantity.message}
                    </span>
                  )}
                  {errors.quantity?.type === "min" && (
                    <span className="label-text-alt text-red-500">
                      {errors.quantity.message}
                    </span>
                  )}

                  {errors.quantity?.type === "max" && (
                    <span className="label-text-alt text-red-500">
                      {errors.quantity.message}
                    </span>
                  )}
                </label>
              </div>
              <input
                disabled={status}
                className="btn btn-primary text-white w-full max-w-xs font-bold"
                value="BUY"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Purchase;
