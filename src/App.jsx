import React from 'react';
import {HelmetProvider} from 'react-helmet-async';
import {Route, Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import EntryPage from './Pages/Homepage/EntryPage/EntryPage';
import Homepage from './Pages/Homepage/Homepage';
import SearchPage from './Pages/Homepage/SearchPage/SearchPage';
import Hotels from './Pages/Hotels/Hotels';

import BlogDetails from './Pages/BlogDetailsPage/BlogDetails';
import Login from './Pages/LoginPage/Login';
import SignUp from './Pages/SignUp/SignUp';
import TourGuideProfile from './Pages/TripDetails/TourGuides/TourGuideProfile/TourGuideProfile';
import TourGuides from './Pages/TripDetails/TourGuides/TourGuides';
import TripDescription from './Pages/TripDetails/TripDescription/TripDescription';
import TripDetails from './Pages/TripDetails/TripDetails';
import HotelDetails from "./Pages/HotelDetails/HotelDetails.jsx";
import RequiredAuth from "./components/RequiredAuth.jsx";
import Payment from "./Pages/Payment/Payment.jsx";
import ProtectedLogin from "./components/ProtectedLogin.jsx";
import UserProfile from "./Pages/UserProfile/UserProfile.jsx";


const App = () => {
    return (
        <div>
            <HelmetProvider>
                <Routes>
                    <Route path='/' element={<Home/>}>
                        <Route path='' element={<Homepage/>}>
                            <Route path='' element={<EntryPage/>}/>
                            <Route path='/search' element={<SearchPage/>}/>
                        </Route>
                        <Route path='/hotels' element={<Hotels/>}/>
                        <Route path='/hotels/:hid' element={<HotelDetails/>}/>
                        <Route path='/blogs' element={<Blogs/>}/>
                        <Route path='/blogs/:id' element={<BlogDetails/>}/>
                        <Route path='/tourguides' element={<TourGuides/>}/>
                        <Route path='/tripdetails' element={<TripDetails/>}>
                            <Route path='tourguide/:id' element={<TourGuideProfile/>}/>
                            <Route path='trip/:tsid/:tid' element={<TripDescription/>}/>
                        </Route>

                        <Route path='/login' element={
                            <ProtectedLogin>
                                <Login/>
                            </ProtectedLogin>
                        }/>
                        <Route path='/signup' element={
                            <ProtectedLogin>
                                <SignUp/>
                            </ProtectedLogin>
                        }/>

                        <Route path='/profile' element={
                            <RequiredAuth>
                                <UserProfile/>
                            </RequiredAuth>
                        }/>

                    </Route>
                    <Route path='/payment' element={
                        <RequiredAuth>
                            <Payment/>
                        </RequiredAuth>
                    }/>
                </Routes>
                <ToastContainer
                    position='top-right'
                    autoClose={5000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                    pauseOnHover={false}
                    theme='light'
                />
            </HelmetProvider>
        </div>
    );
};

export default App;
