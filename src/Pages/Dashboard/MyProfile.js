import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  const onSubmit = async (data) => {
    const { name, email, education, location, number, linkedin } = data;
    const profile = {
      name: name,
      email: email,
      education: education,
      location: location,
      phone: number,
      linkedin: linkedin,
    };
    // put to db
    const url = `https://metalik-server.vercel.app/profile?email=${email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())

      .then((data) => {
        toast.success("Profile updated successfully");
        reset();
      });
  };
  return (
    <div>
      <div className="text-xl text-center text-white font-semibold my-3 bg-slate-500 py-2">
        <h2 className="">
          Name: {""}
          <span className="text-lime-400">{user?.displayName}</span>
        </h2>
        <p className="font-bold">
          <small>
            Email: <span className="text-lime-400">{user.email}</span>
          </small>
        </p>
      </div>
      <div className="text-center items-center">
        <h2 className="text-center text-purple-500 text-xl font-semibold my-3">
          Update your profile
        </h2>
        <form
          className="flex flex-col items-center justify-center mb-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              readOnly
              value={user?.displayName}
              placeholder="Your name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: false,
                  message: "Name is required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              readOnly
              value={user.email}
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <textarea
              type="text"
              placeholder="Educational info"
              className="input input-bordered w-full max-w-xs"
              {...register("education", {
                required: {
                  value: true,
                  message: "Education is required",
                },
              })}
            />
            <label className="label">
              {errors.education?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.education.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Location (city/district)"
              className="input input-bordered w-full max-w-xs"
              {...register("location", {
                required: {
                  value: true,
                  message: "Location is required",
                },
              })}
            />
            <label className="label">
              {errors.location?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.location.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <input
              type="number"
              placeholder="Phone number"
              className="input input-bordered w-full max-w-xs"
              {...register("number", {
                required: {
                  value: true,
                  message: "Phone number is required",
                },
              })}
            />
            <label className="label">
              {errors.number?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.number.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="LinkedIn Profile"
              className="input input-bordered w-full max-w-xs"
              {...register("linkedin", {
                required: {
                  value: true,
                  message: "LinkedIn profile is required",
                },
              })}
            />
            <label className="label">
              {errors.linkedin?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.linkedin.message}
                </span>
              )}
            </label>
          </div>
          <input
            className="btn btn-primary font-bold text-white w-full max-w-xs"
            type="submit"
            value="Update Profile"
          />
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
