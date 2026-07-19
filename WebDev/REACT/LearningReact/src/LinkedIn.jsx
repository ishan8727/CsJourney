import React, { useState, useEffect } from 'react';
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

    useEffect(()=>{
        // calls the correct API according to the Tab
        console.log('fetch(',currentTab,')');

        return() => {
            // unsubscribe from an event.
            // eg when in linked home we constantly get data ~ so 
            // when we seitch the page we unsubscribe from the feed and subscribe to the new feed.
        }

    },[currentTab])

    const buttonStyle = {
        border: 'none',
        borderRadius:10,
        borderBottom: '3px solid transparent',
        display: 'flex',
        backgroundColor: 'white',
        flexDirection: 'column',
        padding: 10,
        alignItems: 'center',
        cursor: 'pointer',
        width: 100,
        height: 70
    };

    const buttonClick = {
        ...buttonStyle,
        borderBottom: '3px solid black',
        backgroundColor: '#D3D3D3',
    };

    return (
        <div>
            <div style={{ display: 'flex', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>

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
