import { Link } from "react-router-dom";
import logo from "../../assets/logo-1.png";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="container px-12 mx-auto bg-[url('https://i.ibb.co/4SDhq7F/vol-sign-in-wall.jpg')]">
      <div className="flex flex-col items-center py-6 lg:h-[36rem] lg:flex-row">
        <div className="lg:w-1/2">
          <div className="flex items-center mb-6">
            <img className="size-20 mr-2" src={logo} alt="logo" />
          </div>
          <h2 className="text-3xl text-white font-semibold lg:text-4xl">
            Volunify
          </h2>

          <h3 className="mt-2 text-2xl font-semibold text-white">
            <span className="text-[#AD8B73]">Welcome</span> Back
          </h3>

          <p className="mt-4 text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, eum
            modi incidunt adipisci quod porro et non exercitationem quasi,
            maxime culpa ut nemo ab delectus saepe iste nostrum explicabo a?
          </p>
        </div>

        <div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
          <div className="w-full max-w-md bg-white rounded-lg">
            <div className="px-6 py-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                Sign In
              </h2>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <label className="text-start block mb-2 text-sm font-medium text-gray-900">
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
                    <small className="text-red-400">
                      This field is required
                    </small>
                  )}
                </div>
                <div>
                  <label className="text-start block mb-2 text-sm font-medium text-gray-900">
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
                    <small className="text-red-400">
                      This field is required
                    </small>
                  )}
                </div>
                <div className="flex items-center justify-between mt-4">
                  <a href="#" className="text-sm text-gray-600 hover:underline">
                    Forget Password?
                  </a>

                  <button className="px-6 py-2 font-medium text-white transition-colors duration-300 transform bg-[#D4A373] rounded-md hover:bg-[#AD8B73] focus:outline-none focus:bg-gray-800">
                    Sign In
                  </button>
                </div>
                <p className="text-sm text-center font-light text-gray-500">
                  New here?{" "}
                  <Link
                    to="/register"
                    className="font-medium text-[#AD8B73] hover:underline"
                  >
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
