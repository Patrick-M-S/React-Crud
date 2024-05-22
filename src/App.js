import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Users from "./Users";
import Products from "./Products";
import Funcionarios from "./Funcionarios";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="users" element={<Users />} />
                    <Route path="products" element={<Products />} />
                    <Route path="funcionarios" element={<Funcionarios />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;