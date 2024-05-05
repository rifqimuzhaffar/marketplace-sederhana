import Button from "./components/Elements/Button";

function App() {
  return (
    <div className="bg-black bg-homepage h-screen text-slate-300 bg-cover bg-no-repeat bg-center">
      <Button color="bg-red-400">Show Now</Button>
      <Button color="bg-blue-500" textColor="text-black">
        Contact Me
      </Button>
    </div>
  );
}

export default App;
