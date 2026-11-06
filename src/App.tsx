import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Layout>
      {/* Navigation */}
      <Sidebar />
      <NavBar />

      {/* Routes */}
      <main className="flex-1 pt-(--navbar-h)">
        <AppRoutes />
      </main>
    </Layout>
  );
}

export default App;
