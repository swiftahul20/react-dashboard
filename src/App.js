import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Tes from "./components/Tes";

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
