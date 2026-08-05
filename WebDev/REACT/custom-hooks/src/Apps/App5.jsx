import React, { useEffect, useState } from 'react'
import useIsOnline from '../hooks/useIsOnline'

const App5 = () => {
    const isOnline = useIsOnline();
    console.log("staus: ",status)

  return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
          <h1>Status</h1>

          {/* Conditionally render a banner based on connection status */}
          {!isOnline && (
              <div style={{
                  backgroundColor: '#ff4d4d',
                  color: 'white',
                  padding: '10px',
                  textAlign: 'center',
                  borderRadius: '5px',
                  marginBottom: '20px'
              }}>
                  ⚠️ You are currently offline. Some features may not work.
              </div>
          )}
          <p>
              Current Status: <strong>{isOnline ? "🟢 Online" : "🔴 Offline"}</strong>
          </p>
      </div>
  )
}

export default App5