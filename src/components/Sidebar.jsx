
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';


const navItems = [
    {
        to: '/tasks',
        label: 'Tasks',
        key: 'tasks'
    },
    {
        to: '/about',
        label: 'Members',
        key: 'members'
    },
    {
        to: '/files',
        label: 'File Management',
        key: 'file-management'
    },
    {
        to: '/settings',
        label: 'Settings',
        key: 'settings'
    }
];

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen(o => !o);

    return (
        <>
            <button
                className="sidebar-menu-btn"
                aria-label={open ? 'Close menu' : 'Open menu'}
                onClick={handleToggle}
            >
                <span className="sidebar-menu-icon">&#9776;</span>
            </button>
            <nav className={`sidebar${open ? ' open' : ''}`}>
                <div className="sidebar-title hide-on-mobile">
                    Assign Tasker App
                </div>
                <ul>
                    {navItems.map((item) => (
                        <li key={item.key}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) => isActive ? 'active' : ''}
                                onClick={() => setOpen(false)}
                                style={{ textDecoration: 'none' }}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;
