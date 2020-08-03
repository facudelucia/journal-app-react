import React from 'react'
import Sidebar from "./Sidebar";
import NothingSelected from "./NothingSelected";
import NoteScreen from "../notes/NoteScreen";
import {useSelector} from "react-redux"
const JournalScreen = () => {

    const state = useSelector(state => state.notes);
    const {active} = state;
    return ( 
        <div className="journal__main-content">
            <Sidebar />
            <main>

                {
                    (active) ? (<NoteScreen />)  : (<NothingSelected />)
                }
                
                
            </main>
        </div>
     );
}
 
export default JournalScreen;