import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Urma
                </div>
                <div className={s.dialog}>
                    Andrew
                </div>
                <div className={s.dialog}>
                    Aliya
                </div>
                <div className={s.dialog}>
                    Beka
                </div>
                <div className={s.dialog}>
                    Nick
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Wazzzzzup</div>
                <div className={s.message}>Fuck off</div>
            </div>
        </div>

    )
}

export default Dialogs;