import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <h2 className="text-xl text-center text-purple-600">Add A Product</h2>
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Product name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: "Product name is required",
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
            <textarea
              type="text"
              placeholder="Product details"
              className="input input-bordered w-full max-w-xs"
              {...register("description", {
                required: {
                  value: true,
                  message: "Product details is required",
                },
              })}
            />
            <label className="label">
              {errors.description?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.description.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <input
              type="number"
              placeholder="Minimum purchase quantity"
              className="input input-bordered w-full max-w-xs"
              {...register("min_order", {
                required: {
                  value: true,
                  message: "Minimum purchase quantity is required",
                },
              })}
            />
            <label className="label">
              {errors.min_order?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.min_order.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <input
              type="number"
              placeholder="Stock quantity"
              className="input input-bordered w-full max-w-xs"
              {...register("available_quantity", {
                required: {
                  value: true,
                  message: "Stock quantity is required",
                },
              })}
            />
            <label className="label">
              {errors.available_quantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.available_quantity.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <input
              type="number"
              placeholder="Per unit price"
              className="input input-bordered w-full max-w-xs"
              {...register("price", {
                required: {
                  value: true,
                  message: "Per unit price is required",
                },
              })}
            />
            <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.price.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full max-w-xs">
            <input
              type="file"
              className="input input-bordered w-full max-w-xs"
              {...register("img", {
                required: {
                  value: true,
                  message: "Image is required",
                },
              })}
            />
            <label className="label">
              {errors.img?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.img.message}
                </span>
              )}
            </label>
          </div>

          <input className="btn w-full max-w-xs" type="submit" value="Add" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
