import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import { Route, Routes } from 'react-router-dom';
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";





const App = (props) => {
    return (

            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/news' element={<News />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/settings' element={<Settings />} />
                        <Route path='/profile' element={<Profile profile={props.profile} state={props.state.profilePage}/>}/>
                        <Route path='/dialog/*' element={<Dialogs Dialogs={Dialogs} state={props.state.dialogPage} />} />

                    </Routes>
                </div>
            </div>

    );
}
export default App;
