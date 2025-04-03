"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Features() {
  const [isMobile, setIsMobile] = useState(false);

  // Add gradient background directly to document body
  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    document.body.style.background = 'linear-gradient(45deg, #FF7700, #FFA200, #FF5100, #FFBD00, #FF9500, #FF6E00)';
    document.body.style.backgroundSize = '400% 400%';
    document.body.style.animation = 'gradientBG 15s ease infinite';
    
    // Add the animation styles to head
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes gradientBG {
        0% { background-position: 0% 50%; }
        25% { background-position: 50% 100%; }
        50% { background-position: 100% 50%; }
        75% { background-position: 50% 0%; }
        100% { background-position: 0% 50%; }
      }
      body {
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 100vw;
        overflow-x: hidden;
      }
      @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

      /* Responsive styles */
      @media (max-width: 768px) {
        .panel {
          flex-direction: row !important;
          flex-wrap: wrap !important;
        }
        .panel-image {
          min-width: 120px !important;
          height: 120px !important;
          margin-right: 16px !important;
        }
        .panel-content {
          flex: 1 !important;
          min-width: 150px !important;
        }
        .panel-content h2 {
          font-size: 24px !important;
          margin-bottom: 8px !important;
        }
        .panel-content p {
          font-size: 16px !important;
          line-height: 1.4 !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative',
      padding: '40px 20px',
    }}>
      {/* Header with Logo and Back Button */}
      <div style={{
        width: '100%',
        maxWidth: '900px',
        display: 'flex',
        justifyContent: isMobile ? 'center' : 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
        flexWrap: isMobile ? 'wrap' : 'nowrap',
        gap: isMobile ? '20px' : '0'
      }}>
        <Link href="/" style={{
          color: 'white',
          textDecoration: 'none',
          fontFamily: "'VT323', monospace",
          fontSize: '20px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          padding: '8px 16px',
          borderRadius: '8px',
          order: isMobile ? 2 : 1
        }}>
          <span style={{ marginRight: '8px' }}>←</span> Back
        </Link>
        
        <Image 
          src="/status.svg" 
          alt="Status Logo" 
          width={isMobile ? 150 : 200}
          height={isMobile ? 50 : 66}
          priority
          style={{ 
            filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3))',
            maxWidth: '100%',
            height: 'auto',
            order: isMobile ? 1 : 2
          }}
        />
      </div>
      
      {/* Two Panel Container */}
      <div style={{
        width: '100%',
        maxWidth: '900px',
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
      }}>
        {/* Panel 1 */}
        <div className="panel" style={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '16px',
          padding: isMobile ? '16px' : '24px',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: isMobile ? '16px' : '24px',
          transition: 'transform 0.3s ease',
        }}>
          {/* Image Container */}
          <div className="panel-image" style={{
            minWidth: isMobile ? '120px' : '200px',
            height: isMobile ? '120px' : '200px',
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
          }}>
            <Image
              src="/globe.svg"
              alt="Global Network"
              fill
              style={{
                objectFit: 'cover',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '20px',
              }}
            />
          </div>
          
          {/* Text Content */}
          <div className="panel-content">
            <h2 style={{
              margin: '0 0 16px 0',
              color: 'white',
              fontFamily: "'VT323', monospace",
              fontSize: isMobile ? '24px' : '32px',
              letterSpacing: '1px',
            }}>
              Global Connectivity
            </h2>
            <p style={{
              margin: '0',
              color: 'rgba(255, 255, 255, 0.8)',
              fontFamily: "'VT323', monospace",
              fontSize: isMobile ? '16px' : '18px',
              lineHeight: isMobile ? '1.4' : '1.6',
              letterSpacing: '0.5px',
            }}>
              Connect with users from around the world with our cutting-edge platform. 
              Experience seamless communication across borders, with lightning-fast response times 
              and unparalleled security.
            </p>
          </div>
        </div>
        
        {/* Panel 2 */}
        <div className="panel" style={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '16px',
          padding: isMobile ? '16px' : '24px',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          display: 'flex',
          flexDirection: isMobile ? 'row' : 'row-reverse',
          alignItems: 'center',
          gap: isMobile ? '16px' : '24px',
          transition: 'transform 0.3s ease',
        }}>
          {/* Image Container */}
          <div className="panel-image" style={{
            minWidth: isMobile ? '120px' : '200px',
            height: isMobile ? '120px' : '200px',
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
          }}>
            <Image
              src="/file.svg"
              alt="File Sharing"
              fill
              style={{
                objectFit: 'cover',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '20px',
              }}
            />
          </div>
          
          {/* Text Content */}
          <div className="panel-content">
            <h2 style={{
              margin: '0 0 16px 0',
              color: 'white',
              fontFamily: "'VT323', monospace",
              fontSize: isMobile ? '24px' : '32px',
              letterSpacing: '1px',
            }}>
              Advanced Encryption
            </h2>
            <p style={{
              margin: '0',
              color: 'rgba(255, 255, 255, 0.8)',
              fontFamily: "'VT323', monospace",
              fontSize: isMobile ? '16px' : '18px',
              lineHeight: isMobile ? '1.4' : '1.6',
              letterSpacing: '0.5px',
            }}>
              Our state-of-the-art encryption technology ensures your files and communications 
              are always secure. With end-to-end encryption and zero-knowledge architecture, 
              your privacy is guaranteed.
            </p>
          </div>
        </div>
      </div>
      
      {/* Navigation links to more pages */}
      <div style={{
        marginTop: '30px',
        display: 'flex',
        gap: '16px',
      }}>
        <Link href="/" style={{
          color: 'white',
          textDecoration: 'none',
          fontFamily: "'VT323', monospace",
          fontSize: '18px',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          padding: '8px 16px',
          borderRadius: '8px',
        }}>
          Home
        </Link>
      </div>
    </main>
  );
} 