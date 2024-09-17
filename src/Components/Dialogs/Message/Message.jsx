import React from 'react';
import s from './Dialogs.module.css'
import DialogItems from "./DialogItems/DialogItems";



const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )

}

const Dialogs = (props) => {
    let dialog = [
        {id: 0, name:'Dea'},
        {id: 1, name:'Max'},
        {id: 2, name:'Senna'}
    ]

    let message = [
        {id: 0, message:'McLaren 720s best in the world'},
        {id: 1, message:'McLaren Automotive Limited'},
        {id: 2, message:'McLaren'}
    ]

    let dialogElements =  dialog.map (d => < DialogItems id={d.id} name={d.name} />)
    let messageElements =   message.map (m => < Message message={m.message} />)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
}
export default Dialogs;