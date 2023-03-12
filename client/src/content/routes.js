import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './home';
import Signin from './signin';
import Signup from './signup';
const Router=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/signin' element={<Signin/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/home' element={<Home/>} />
           
            </Routes>
        </BrowserRouter>
    )
}
export default Router;