import Card from "../components/Card";
import Nav from "../components/Nav";

function Employees() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex justify-center flex-row flex-wrap ">
        <Card />
      </div>
    </div>
  );
}

export default Employees;