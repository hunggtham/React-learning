import { useState } from 'react';

import './UserManage.scss';
import ModalCreateUser from './ModalCreateuser';
import { FcPlus } from 'react-icons/fc';

const UserManage = (props) => {

    const [showModalCreateUser, setShowMoalCreateUser] = useState(false);
    return (
        <div className="user-manage_container">
            <div className="title">
                User Manage
            </div>
            <div className="user-content">
                <div className='btn-add-new'>
                    <button className='btn btn-primary' onClick={() => setShowMoalCreateUser(true)}><FcPlus />Add New User</button>
                </div>
                <div className='table-users-container'>
                    Table User
                </div>
                <ModalCreateUser show={showModalCreateUser}
                    setShow={setShowMoalCreateUser}
                />
            </div>

        </div>
    )
}

export default UserManage;