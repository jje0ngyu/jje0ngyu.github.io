import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home.tsx";
import Layout from "./components/Layout.tsx";

function App() {

    return (
        <BrowserRouter basename={"/"}>
            <Layout>
                <Routes>
                    <Route path="/" Component={Home}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
                <h1>Vite + React</h1>
                <div className="card">

                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more222222222222222222222222222
                </p>
            </Layout>
        </BrowserRouter>
    )
}

export default App
