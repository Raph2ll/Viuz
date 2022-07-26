function Register() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden shadow-xl">
      <div className="w-100% p-6 m-auto bg-white rounded-md shadow-md  lg:max-w-md">
        <div className=" flex flex-col items-center justify-center text-2xl text-gray-800">
          <p>Cadastro</p>
        </div>
        <form className="flex flex-col items-center justify-center">
          <div className="mt-4">
            <label htmlFor="nome" className="block text-xs text-gray-800">Nome</label>
            <input type="nome"
              className="block w-full px-4 py-2 mt-2 text-orange-100 bg-white border rounded-md focus:border-orange-200 focus:ring-orange-100  focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>
          <div className="mt-4">
            <div>
              <label htmlFor="cidade" className="block text-xs text-gray-800">Cidade/Select</label>
              <input type="cidade"
                className="block w-full px-4 py-2 mt-2 text-orange-100 bg-white border rounded-md focus:border-orange-200 focus:ring-orange-100 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div className="mt-4">
              <label htmlFor="cargo" className="block text-xs text-gray-800">Cargo</label>
              <input type="cargo"
                className="block w-full px-4 py-2 mt-2 text-orange-100 bg-white border rounded-md focus:border-orange-200 focus:ring-orange-100 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div className="flex flex-row space-x-1 mt-6">
              <button
                className="w-16 px-1 py-1 text-xs tracking-wide text-white transition-colors duration-200 transform bg-orange-100 hover:bg-orange-200 rounded-md ">
                Criar
              </button>
              <button
                className="w-16 px-1 py-1 text-xs tracking-wide text-white transition-colors duration-200 transform bg-orange-100 hover:bg-orange-200 rounded-md ">
                Sair
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;