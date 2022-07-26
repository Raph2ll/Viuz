import { User } from "phosphor-react";

function Card() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center m-3">
      <User size={62} weight="thin" color="#1F2937" />
      <p className="text-gray-800">José</p>
      <div className="flex flex-col my-6">
        <p className="text-gray-800">Cidade: Rio Grande do Norte</p>
        <p className="text-gray-800">Cargo : Eletricista</p>
      </div>
      <div className="flex flex-row space-x-1">
        {/*
          <button
            className="w-16 px-1 py-1 text-xs tracking-wide text-white transition-colors duration-200 transform bg-orange-100 hover:bg-orange-200 rounded-md ">
            Editar
          </button>
        */}
        <button
          className="w-16 px-1 py-1 text-xs tracking-wide text-white transition-colors duration-200 transform bg-orange-100 hover:bg-orange-200 rounded-md ">
          Excluir
        </button>
      </div>
    </div>
  );
}

export default Card;