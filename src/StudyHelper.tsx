import React, { useState, useEffect, useRef } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import './StudyHelper.css';

interface Theme {
  name: string;
  youtubeId: string;
  color: string;
  icon: string;
  backgroundImage: string;
}

function StudyHelper() {
  const themes: Theme[] = [
    {
      name: 'Jazz',
      youtubeId: 'Dx5qFachd3A',
      color: '#d4a574',
      icon: '🎷',
      backgroundImage: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=1200&q=80'
    },
    {
      name: 'Nature',
      youtubeId: 'MUVpFPRImgA',
      color: '#7fb069',
      icon: '🌿',
      backgroundImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80'
    },
    {
      name: 'Bonfire',
      youtubeId: '2TrgSww4Wf8',
      color: '#e67e22',
      icon: '🔥',
      backgroundImage: 'https://media.istockphoto.com/id/819949828/photo/late-evening-campfire-at-a-beatiful-canadian-chalet.webp?b=1&s=612x612&w=0&k=20&c=-mChlsZSsacCuqM6icUitr__HRVqUxf251ExuZzREvQ='
    },
    {
      name: 'Classic',
      youtubeId: 'aepIEsxlaXc',
      color: '#9b7ede',
      icon: '🎻',
      backgroundImage: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1200&q=80'
    },
    {
      name: 'Ghibli',
      youtubeId: 'U34kLXjdw90',
      color: '#6ab0a5',
      icon: '🌸',
      backgroundImage: 'https://i.pinimg.com/736x/b3/f4/0a/b3f40aefb1d6e424544777ed0fbe66d8.jpg'
    },
    {
      name: 'Piano',
      youtubeId: 'Q-iEfzaikBI',
      color: '#5b9bd5',
      icon: '🎹',
      backgroundImage: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1200&q=80'
    },
    {
      name: 'Lofi',
      youtubeId: '_ITiwPMUzho',
      color: '#ff6b9d',
      icon: '🎧',
      backgroundImage: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=1200&q=80'
    },
    {
      name: 'Cafe',
      youtubeId: 'xym-gmq_rlw',
      color: '#c4956a',
      icon: '☕',
      backgroundImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=80'
    }
  ];

  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [volume, setVolume] = useState(50);
  const [showVolumeControl, setShowVolumeControl] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [targetMinutes, setTargetMinutes] = useState(25);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Timer logic
  useEffect(() => {
    let interval: number;
    if (isTimerRunning) {
      interval = window.setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleThemeSelect = (theme: Theme) => {
    setSelectedTheme(theme);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (playerRef.current) {
      playerRef.current.setVolume(newVolume);
    }
  };

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    playerRef.current = event.target;
    event.target.setVolume(volume);
    event.target.unMute();
    event.target.playVideo();
  };

  const opts: YouTubeProps['opts'] = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 1,
      loop: 1,
      controls: 0,
      playlist: selectedTheme?.youtubeId || '',
    },
  };

  const handleTimerToggle = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const handleTimerReset = () => {
    setIsTimerRunning(false);
    setTimerSeconds(0);
  };

  const getTimerProgress = () => {
    const targetSeconds = targetMinutes * 60;
    return Math.min((timerSeconds / targetSeconds) * 100, 100);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => {
        console.error('Error attempting to enable fullscreen:', err);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  // Listen for fullscreen changes (e.g., user pressing ESC)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div className="study-helper-container" ref={containerRef}>
      {/* Background Image with Blur */}
      <div 
        className="background-image"
        style={{
          backgroundImage: selectedTheme 
            ? `url(${selectedTheme.backgroundImage})`
            : 'none',
          opacity: selectedTheme ? 1 : 0
        }}
      />
      <div className="background-overlay" />

      {/* Fullscreen Toggle Button */}
      <button 
        className="fullscreen-toggle"
        onClick={toggleFullscreen}
        title={isFullscreen ? "Exit fullscreen (or press ESC)" : "Enter fullscreen"}
      >
        {isFullscreen ? '⛶' : '⛶'}
      </button>

      <div className="study-helper-layout">
        {/* Left Side - Timer and Controls */}
        <div className="left-section">
          <div className="app-header">
            <h1 className="study-title">Study Helper</h1>
            <p className="study-subtitle">Focus with ambient sounds</p>
          </div>

          {/* Timer Display */}
          <div className="timer-section">
            <div className="timer-display">
              <div 
                className="timer-progress-ring"
                style={{
                  background: `conic-gradient(${selectedTheme?.color || '#8b5cf6'} ${getTimerProgress()}%, rgba(255,255,255,0.1) ${getTimerProgress()}%)`
                }}
              >
                <div className="timer-inner">
                  <div className="timer-time">{formatTime(timerSeconds)}</div>
                  <div className="timer-label">Study Time</div>
                </div>
              </div>
            </div>

            <div className="timer-controls">
              <button 
                className="timer-button primary"
                onClick={handleTimerToggle}
                style={{ 
                  background: selectedTheme 
                    ? `linear-gradient(135deg, ${selectedTheme.color}, ${selectedTheme.color}dd)`
                    : 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
                }}
              >
                {isTimerRunning ? '⏸ Pause' : '▶ Start'}
              </button>
              <button 
                className="timer-button secondary"
                onClick={handleTimerReset}
              >
                Reset
              </button>
            </div>

            <div className="timer-target">
              <label>Target:</label>
              <input
                type="number"
                min="1"
                max="120"
                value={targetMinutes}
                onChange={(e) => setTargetMinutes(parseInt(e.target.value) || 25)}
                className="target-input"
              />
              <span>min</span>
            </div>
          </div>

          {/* Volume Control Icon */}
          {selectedTheme && (
            <div className="volume-section">
              <button 
                className="volume-icon-button"
                onClick={() => setShowVolumeControl(!showVolumeControl)}
                style={{
                  background: showVolumeControl 
                    ? `${selectedTheme.color}40`
                    : 'rgba(255, 255, 255, 0.1)'
                }}
                title={`Volume: ${volume}%`}
              >
                <span className="volume-icon">🔊</span>
              </button>
              
              {showVolumeControl && (
                <div className="volume-slider-container">
                  <div className="volume-slider-wrapper">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="volume-slider"
                      style={{
                        background: `linear-gradient(to right, ${selectedTheme.color} 0%, ${selectedTheme.color} ${volume}%, rgba(255,255,255,0.2) ${volume}%, rgba(255,255,255,0.2) 100%)`
                      }}
                    />
                    <span className="volume-percentage">{volume}%</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sidebar Toggle Button */}
        <button 
          className="sidebar-toggle"
          onClick={() => setShowSidebar(!showSidebar)}
          title={showSidebar ? "Hide themes" : "Show themes"}
        >
          {showSidebar ? '→' : '←'}
        </button>

        {/* Right Side - Theme List */}
        <div className={`right-section ${showSidebar ? 'visible' : 'hidden'}`}>
          <h2 className="theme-list-title">Themes</h2>
          <div className="theme-list">
            {themes.map((theme) => (
              <button
                key={theme.name}
                className={`theme-item ${selectedTheme?.name === theme.name ? 'active' : ''}`}
                style={{
                  borderColor: selectedTheme?.name === theme.name ? theme.color : 'rgba(255, 255, 255, 0.1)',
                  backgroundColor: selectedTheme?.name === theme.name 
                    ? `${theme.color}20` 
                    : 'rgba(255, 255, 255, 0.05)'
                }}
                onClick={() => handleThemeSelect(theme)}
              >
                <span className="theme-icon">{theme.icon}</span>
                <span className="theme-name">{theme.name}</span>
                {selectedTheme?.name === theme.name && (
                  <span className="playing-indicator">♪</span>
                )}
              </button>
            ))}
          </div>

          {!selectedTheme && (
            <div className="theme-hint">
              <p>← Select a theme to begin</p>
            </div>
          )}
        </div>
      </div>

      {/* Hidden YouTube Player */}
      {selectedTheme && (
        <div style={{ display: 'none' }}>
          <YouTube
            videoId={selectedTheme.youtubeId}
            opts={opts}
            onReady={onPlayerReady}
          />
        </div>
      )}
    </div>
  );
}

export default StudyHelper;

