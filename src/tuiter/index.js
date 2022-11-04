import Nav from '../nav';
import {Routes, Route} from 'react-router';
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from './who-to-follow-list';
import ExploreComponent from './explore';
import HomeComponent from './home';
import ProfileComponent from './profile';
import EditProfileComponent from './edit-profile/indes';
// import data for redux
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";   // provide store for applications
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from './tuits/tuits-reducer';
import profileReducer from './profile/profile-reducer';

// configure the store
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer, profile: profileReducer}}
);

function Tuiter() {
    return (
        <Provider store={store}>
        <div className='container-fluid mt-2 mb-2'>
            <div className='row'>
                <div className='col-2 col-md-2 col-lg-2 col-xl-2'>
                    <NavigationSidebar active='explore'/>
                </div>
                <div className='col-10 col-md-10 col-lg-6 col-xl-6' style={{"position": "relative"}}>
                    <Routes>
                        <Route path='home' element={<HomeComponent />} />
                        <Route path='explore' element={<ExploreComponent />} />
                        <Route path='profile' element={<ProfileComponent />} />
                        <Route path='/profile/editProfile' element={<EditProfileComponent />} />
                    </Routes>
                </div>
                <div className='d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4'>
                    <WhoToFollowList />     
                </div> 
            </div>
        </div>
        </Provider>
    );
};
export default Tuiter;