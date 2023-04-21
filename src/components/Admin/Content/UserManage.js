import { useState } from 'react';

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
                    <ModalCreateUser />
                </div>
            </div>
        </div>
    )
}

export default UserManage;