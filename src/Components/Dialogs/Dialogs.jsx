import React from 'react';
import s from './Dialogs.module.css'
import DialogItems from "./DialogItems/DialogItems";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogElements =  props.state.dialog.map (d => < DialogItems id={d.id} name={d.name} />)
    let messageElements =   props.state.message.map (m => < Message message={m.message} />)
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div>
                <button onClick={addPost}>add</button>
                <div>
                <textarea ref={newPostElement}></textarea>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;