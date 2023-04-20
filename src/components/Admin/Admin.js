import Sidebar from "./Sidebar";
import './Admin.scss';

const Admin = (props) => {
    return (
        <div className='admin-container'>
            <div className="admin-sidebar">
                <Sidebar />
            </div>
            <div className='admin-content'>
                content
            </div>
        </div>
    )
}

export default Admin;