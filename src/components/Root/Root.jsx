import { Outlet } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import Headroom from 'react-headroom';




const Root = () => {
    return (
        <div  >
            <div className='bg-color'>
                <Headroom>
                    <Navbar ></Navbar>
                </Headroom>
            </div>
            <Outlet></Outlet>


        </div>
    );
};

export default Root;