import React from 'react';
import s from  './Dialogs.module.css'
import {NavLink} from "react-router-dom";
const Dialogs = (props) => {
return  (
    <div className={s.dialogs}>
        <div className={s.dialogItems}>
            <div className={`${s.dialog} ${s.active}`}>
                <NavLink to='/dialog/1'>Dea</ NavLink>
            </div>
            <div className={`${s.dialog} ${s.active}`}>
                <NavLink to='/dialog/2'>Max</NavLink>
            </div>
            <div className={`${s.dialog} ${s.active}`}>
                <NavLink to='/dialog/3'>Senna</NavLink>
            </div>
        </div>
        <div className={s.messages}>
            <div className={s.message}>McLaren 720s best in the world</div>
            <div className={s.message}>McLaren Automotive Limited (ранее известная как McLaren Cars Limited) </div>
            <div className={s.message}>Компания McLaren была основана в 1963 году </div>
        </div>
    </div>
);
}
export default Dialogs;