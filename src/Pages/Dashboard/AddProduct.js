import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imageStorageKey = "ccaeae197f35815ea6c1a83634610ad7";
  const onSubmit = async (data) => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, { method: "POST", body: formData })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const tool = {
            name: data.name,
            img: img,
            description: data.description,
            min_order: data.min_order,
            available_quantity: data.available_quantity,
            price: data.price,
          };
          // send to db
          fetch("http://localhost:5000/tool", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(tool),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Product added successfully");
                reset();
              } else {
                toast.error("Failed to add the product");
              }
            });
        }
      });
  };
  return (
    <div>
      <h2 className="text-xl text-center text-purple-600 font-semibold p-0 mt-0">
        Add A Product
      </h2>
      <div className="flex justify-center m-0">
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

          <input
            className="btn btn-primary font-bold text-white w-full max-w-xs"
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
