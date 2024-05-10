import { Link } from "react-router-dom";
import logo from "../../assets/logo-1.png";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <section className="bg-[url('https://i.ibb.co/MRpnSfJ/volunteer-register.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 border border-gray-300">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex items-center justify-center mb-6">
              <img className="size-20 mr-2" src={logo} alt="logo" />
            </div>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#D4A373] focus:border-[#D4A373] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
                  placeholder="your name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <small className="text-red-400">This field is required</small>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  id="photo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#D4A373] focus:border-[#D4A373] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
                  placeholder="name@company.com"
                  {...register("photo")}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#D4A373] focus:border-[#D4A373] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
                  placeholder="name@company.com"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <small className="text-red-400">This field is required</small>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#D4A373] focus:border-[#D4A373] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <small className="text-red-400">This field is required</small>
                )}
              </div>
              {/* <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#D4A373] focus:border-[#D4A373] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
                  required
                />
              </div> */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500">
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#D4A373] hover:bg-[#AD8B73] text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Create an account
              </button>
              <p className="text-sm text-center font-light text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-[#AD8B73] hover:underline"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
