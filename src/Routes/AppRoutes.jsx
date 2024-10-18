import { Routes,Route } from "react-router-dom";
import HeroPage from "../Pages/HeroPage";
const AppRoutes = () => {
    return ( 
        <>
            <Routes>
                <Route element={<HeroPage/> } path="/"/>
            </Routes>
        </>
     );
}
 
export default AppRoutes;