
import 'react-pro-sidebar/dist/css/styles.css';
// import { useIntl } from 'react-intl';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import { DiReact } from 'react-icons/di';
import { GiReactor } from 'react-icons/gi';
import { MdDashBoard } from 'react-icons/md'
import sidebarBg from '../../assets/bg2.jpg';
import { NavLink, Link } from 'react-router-dom';

// import { FaGem, FaHeart } from 'react-icons';
// import { FatachomeTerAlt, FaGem, FaList, FaGihub, FarelaughWink, FaHeart } from 'react-icons/fa';
const Sidebar = (props) => {
    // const intl = useIntl();
    const { image, collapsed, rtl, toggled, handleToggleSidebar } = props;
    // https://drive.google.com/drive/folders/19MyyYSLdeupgQGhUsah6cZVnMKQ8pXdy
    // 18/23:36
    return (
        <>
            {/* source: https://github.com/azouaoui-med/react-pro-sidebar/tree/v0.x */}
            {/* <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
                    <SubMenu title="Components" icon={<FaHeart />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar> */}


            {/* source: https://github.com/azouaoui-med/react-pro-sidebar/blob/v0.x/demo/src/Aside.js */}
            <ProSidebar
                image={sidebarBg}
                rtl={rtl}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <div className='admin-sidebar__logo'>
                            <DiReact size={'2em'} color={"00bfff"} />
                            <NavLink className='nav-link logo-name' to='/'>MinhHieu</NavLink>
                        </div>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<FaTachometerAlt />}
                            suffix={<span className="badge red">News</span>}
                        >
                            Dashboard
                            <Link to="/admins" />
                        </MenuItem>
                        <MenuItem icon={<FaGem />}> Component</MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu
                            suffix={<span className="badge yellow">3</span>}
                            title='Manage'
                            icon={<FaRegLaughWink />}
                        >
                            <MenuItem>User Management
                                <Link to="/admins/user-manage" />
                            </MenuItem>
                            <MenuItem>Quiz Management
                                <Link to="/admins/quiz-manage" />

                            </MenuItem>
                            <MenuItem>Question Management
                                <Link to="/admins/ques-manage" />
                            </MenuItem>
                        </SubMenu>
                        {/* <SubMenu
                            prefix={<span className="badge gray">3</span>}
                            title={intl.formatMessage({ id: 'withPrefix' })}
                            icon={<FaHeart />}
                        >
                            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
                            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
                            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
                        </SubMenu>
                        <SubMenu title={intl.formatMessage({ id: 'multiLevel' })} icon={<FaList />}>
                            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1 </MenuItem>
                            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2 </MenuItem>
                            <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3`}>
                                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.1 </MenuItem>
                                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.2 </MenuItem>
                                <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3.3`}>
                                    <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.1 </MenuItem>
                                    <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.2 </MenuItem>
                                    <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.3 </MenuItem>
                                </SubMenu>
                            </SubMenu>
                        </SubMenu> */}
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://github.com/hunggtham"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                MinhHieu
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    )

}

export default Sidebar;