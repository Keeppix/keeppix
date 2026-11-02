import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";
import Menu from "./components/Menu";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Layout>
      {/* Navigation */}
      <Sidebar />
      <Menu />

      {/* Routes */}
      <AppRoutes />
    </Layout>
  );
}

export default App;
