import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/Dialogs/DialogsContainer";
import {Profile} from "./components/profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs/Dialogs";
import UsersContainer from "./components/Users/UsersContainer";

function App() {

    return (
        <div className='app-wrapper'>
            <Header/>
            <div className='body'>
                <Navbar />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>

                        <Route path="/profile" element={<Profile />}/>
                        <Route path="/dialogs" element={<Dialogs />}/>
                        <Route path="/users" element={<UsersContainer />}/>

                        <Route path="/dialogs/:dialogId" element={<DialogsContainer /> }/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
