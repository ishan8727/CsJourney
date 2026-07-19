import React, { useState } from 'react';
import { FaHome, FaUserFriends, FaBriefcase, FaFacebookMessenger, FaUserCircle } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";

const Linkedin = () => {
    const [currentTab, setCurrenTab] = useState('Home');

    const tabsinfo = [
        { id: 'Home', label: 'Home', icon: <FaHome size={34} /> },
        { id: 'My Network', label: 'My Network', icon: <FaUserFriends size={34} /> },
        { id: 'Jobs', label: 'Jobs', icon: <FaBriefcase size={34} /> },
        { id: 'Messaging', label: 'Messaging', icon: <FaFacebookMessenger size={34} /> },
        { id: 'Notifications', label: 'Notifications', icon: <BsBellFill size={34} /> },
        { id: 'Me', label: 'Me', icon: <FaUserCircle size={34} /> },
    ];

    const buttonStyle = {
        border: 'none',
        borderBottom: '3px solid transparent',
        display: 'flex',
        backgroundColor: 'white',
        flexDirection: 'column',
        padding: 10,
        alignItems: 'center',
        cursor: 'pointer'
    };

    const buttonClick = {
        ...buttonStyle,
        borderBottom: '3px solid black',
    };

    return (
        <div>
            <div style={{ display: 'flex', gap: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>

                {tabsinfo.map((t) => (
                    <button
                        key={t.id}
                        onClick={() => setCurrenTab(t.id)}
                        style={currentTab === t.id ? buttonClick : buttonStyle}
                    >
                        {t.icon}
                        <span>{t.label}</span>
                    </button>
                ))}

            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
                <Tab currentTab={currentTab} />
            </div>
        </div>
    );
};

export default Linkedin;

function Tab(props) {
    return (
        <>
            Current Tab is: {props.currentTab}
        </>
    );
}
