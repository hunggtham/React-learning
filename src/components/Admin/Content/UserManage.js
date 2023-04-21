import { useState } from 'react';

import './UserManage.scss';
import ModalCreateUser from './ModalCreateuser';
const UserManage = (props) => {

    return (
        <div className="user-manage_container">
            <div className="title">
                User Manage
            </div>
            <div className="user-content">
                <button>Add New User</button>
                <div>
                    Table User

                </div>
                <ModalCreateUser />
            </div>

        </div>
    )
}

export default UserManage;