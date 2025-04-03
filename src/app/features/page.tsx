"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Features() {
  // Add gradient background directly to document body
  useEffect(() => {
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
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
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
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '40px',
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
        }}>
          <span style={{ marginRight: '8px' }}>←</span> Back
        </Link>
        
        <Image 
          src="/status.svg" 
          alt="Status Logo" 
          width={200} 
          height={66} 
          priority
          style={{ 
            filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3))',
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      </div>
      
      {/* Two Panel Container */}
      <div style={{
        width: '100%',
        maxWidth: '900px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
      }}>
        {/* Panel 1 */}
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '16px',
          padding: '24px',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '24px',
          transition: 'transform 0.3s ease',
        }}>
          {/* Image Container */}
          <div style={{
            minWidth: '200px',
            height: '200px',
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
          <div>
            <h2 style={{
              margin: '0 0 16px 0',
              color: 'white',
              fontFamily: "'VT323', monospace",
              fontSize: '32px',
              letterSpacing: '1px',
            }}>
              Global Connectivity
            </h2>
            <p style={{
              margin: '0',
              color: 'rgba(255, 255, 255, 0.8)',
              fontFamily: "'VT323', monospace",
              fontSize: '18px',
              lineHeight: '1.6',
              letterSpacing: '0.5px',
            }}>
              Connect with users from around the world with our cutting-edge platform. 
              Experience seamless communication across borders, with lightning-fast response times 
              and unparalleled security. Our decentralized infrastructure ensures your data remains 
              private and protected at all times.
            </p>
          </div>
        </div>
        
        {/* Panel 2 */}
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '16px',
          padding: '24px',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          gap: '24px',
          transition: 'transform 0.3s ease',
        }}>
          {/* Image Container */}
          <div style={{
            minWidth: '200px',
            height: '200px',
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
          <div>
            <h2 style={{
              margin: '0 0 16px 0',
              color: 'white',
              fontFamily: "'VT323', monospace",
              fontSize: '32px',
              letterSpacing: '1px',
            }}>
              Advanced Encryption
            </h2>
            <p style={{
              margin: '0',
              color: 'rgba(255, 255, 255, 0.8)',
              fontFamily: "'VT323', monospace",
              fontSize: '18px',
              lineHeight: '1.6',
              letterSpacing: '0.5px',
            }}>
              Our state-of-the-art encryption technology ensures your files and communications 
              are always secure. With end-to-end encryption and zero-knowledge architecture, 
              your privacy is guaranteed. Share files of any size without compromising on 
              security or speed.
            </p>
          </div>
        </div>
      </div>
      
      {/* Navigation links to more pages */}
      <div style={{
        marginTop: '40px',
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