import React from 'react';

const OfflineMessage = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5',
      textAlign: 'center',
      fontFamily: "'Poppins', sans-serif",
      padding: '20px',
    },
    message: {
      backgroundColor: '#fff',
      padding: '40px',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      width: '100%',
      animation: 'fadeIn 0.5s ease-in-out',
    },
    iconContainer: {
      marginBottom: '20px',
    },
    icon: {
      color: '#ff4d4f',
      animation: 'pulse 1.5s infinite',
      width: '48px',
      height: '48px',
    },
    title: {
      fontSize: '24px',
      color: '#333',
      marginBottom: '10px',
    },
    text: {
      fontSize: '16px',
      color: '#666',
      lineHeight: '1.5',
    },
    keyframes: `
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes pulse {
        0%, 100% {
          transform: scale(1);
          opacity: 1;
        }
        50% {
          transform: scale(1.1);
          opacity: 0.8;
        }
      }
    `,
  };

  return (
    <div style={styles.container}>
      <style>
        {styles.keyframes}
      </style>
      <div style={styles.message}>
        <div style={styles.iconContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={styles.icon}
            viewBox="0 0 16 16"
          >
            <path
              d="M12.83 1.708a.5.5 0 0 1 .106.658l-8 12a.5.5 0 1 1-.832-.554l8-12a.5.5 0 0 1 .726-.104zM8 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0v-9A.5.5 0 0 1 8 3zm-4.5 4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-2 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
        <h1 style={styles.title}>You're Offline</h1>
        <p style={styles.text}>It looks like you're not connected to the internet. Check your connection and try again.</p>
      </div>
    </div>
  );
};

export default OfflineMessage;
