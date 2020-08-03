import React,{useEffect, useRef} from 'react';
import NotesAppBar from "./NotesAppBar";
import {useSelector, useDispatch} from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleting } from '../../actions/notes';

const NoteScreen = () => {
    const dispatch = useDispatch()
    const {active:note} = useSelector(state => state.notes)
    const [formValues, handleInputChange, reset] = useForm(note);
    const {body, title, id} = formValues
    const activeId = useRef(note.id)
    useEffect(() => {
        if(note.id !== activeId.current){
            reset(note);
            activeId.current = note.id
        }
    }, [note, reset])
    useEffect(() => {
        dispatch(activeNote(formValues.id, {...formValues}))
    }, [formValues, dispatch])


    const handleDelete = () => {
        dispatch(startDeleting(id))
    }

    return ( 
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input 
                    type="text"
                    placeholder="some awesome title"
                    className="notes__title-input"
                    value={title}
                    name="title"
                    onChange={handleInputChange}
                />
                <textarea
                    placeholder="what happened today"
                    className="notes__textarea"
                    value={body}
                    name="body"
                    onChange={handleInputChange}
                ></textarea>
                { note.url && <div className="notes__image">
                    <img src={note.url}
                    alt="imagen"/>
                </div>}
            </div>
            <button
                className="btn btn-danger"
                onClick={handleDelete}
            >Delete</button>
        </div>
     );
}
 
export default NoteScreen;