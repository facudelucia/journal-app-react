import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNotes, startUploading } from '../../actions/notes';

const NotesAppBar = () => {
    const state = useSelector(state => state.notes)
    const {active} = state;
    const {date} = active
    const noteDate = moment(date);
    const dispatch = useDispatch()
    const handleSave = () => {
        dispatch(startSaveNotes(active))
    }
    const handlePictureClick = () => {
        document.querySelector("#fileSelector").click()
    }
    const handleFileChange = (e)=>{
        const file = e.target.files[0]
        if(file){
            dispatch( startUploading(file)  )
        }
    }   
    
    return (  
        <div className="notes__appbar">
            <span>{noteDate.format("LL")}</span>
            <input
                id="fileSelector" 
                type="file"
                name="file"
                style={{display: "none"}}
                onChange={handleFileChange}
            />
            <div>
                <button 
                    className="btn"
                    onClick={handlePictureClick}
                >Picture</button>
                <button 
                    className="btn"
                    onClick={handleSave} 
                >Save</button>
            </div>
        </div>
    );
}
 
export default NotesAppBar;