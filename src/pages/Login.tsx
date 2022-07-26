import Logo from "../components/Logo";

function Login() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden shadow-xl">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md  lg:max-w-md">
        <div className=" flex flex-col items-center justify-center">
          <Logo />
        </div>
        <form className="mt-6">
          <div>
            <label htmlFor="email" className="block text-xs text-gray-800">Email</label>
            <input type="email"
              className="block w-full px-4 py-2 mt-2 text-orange-100 bg-white border rounded-md focus:border-orange-200 focus:ring-orange-100  focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>
          <div className="mt-4">
            <div>
              <label htmlFor="password" className="block text-xs text-gray-800">Password</label>
              <input type="senha"
                className="block w-full px-4 py-2 mt-2 text-orange-100 bg-white border rounded-md focus:border-orange-200 focus:ring-orange-100 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div className="mt-6">
              <button
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-100 hover:bg-orange-200 rounded-md ">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;