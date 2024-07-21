import { Route, Routes } from "react-router-dom"
import Home from "../container/Home"
import Layout from "../layout/Layout"
import Navbar from "../layout/Navbar"
import NotFound from "../container/404"
import ProjectDetail from "../container/ProjectDetail"

function Index() {
    return (
        <>
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/project/:id" element={<ProjectDetail/>} />
                <Route path="/*" element={<NotFound/>} />
            </Routes>
        </Layout>
        </>
    )
}

export default Index