import React from 'react';
import './AdditionalInfo.css';

function AdditionalInfo() {
  const playlists = [
    {
      id: 'design-energy',
      title: 'Design Energy',
      description: 'High-energy beats for rapid ideation sessions.',
      url: 'https://open.spotify.com/playlist/37i9dQZF1DXa8NOEUWPn9W',
      cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=640&h=640'
    },
    {
      id: 'night-coding',
      title: 'Midnight Coding',
      description: 'Ambient electronica to keep the flow going when the world is quiet.',
      url: 'https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS',
      cover: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a7?auto=format&fit=crop&q=80&w=640&h=640'
    },
    {
      id: 'sunrise-vibes',
      title: 'Sunrise Vibes',
      description: 'Soft indie tunes for the early morning journaling ritual.',
      url: 'https://open.spotify.com/playlist/37i9dQZF1DX0UrRvztWcAU',
      cover: 'https://images.unsplash.com/photo-1524678714210-9917a6c619c0?auto=format&fit=crop&q=80&w=640&h=640'
    },
    {
      id: 'weekend-drive',
      title: 'Weekend Drive',
      description: 'Feel-good tracks for city strolls with the Ricoh GR III in hand.',
      url: 'https://open.spotify.com/playlist/37i9dQZF1DX9BXb6GsGCLl',
      cover: 'https://images.unsplash.com/photo-1508061253366-f7da158bca21?auto=format&fit=crop&q=80&w=640&h=640'
    }
  ];

  const galleryPhotos = [
    {
      id: 'street-lights',
      src: 'https://images.unsplash.com/photo-1526403226198-61353de98ee5?auto=format&fit=crop&q=80&w=1200',
      title: 'Neon Alley',
      location: 'Shibuya, Tokyo'
    },
    {
      id: 'coffee-corner',
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200',
      title: 'Morning Ritual',
      location: 'Daegu, South Korea'
    },
    {
      id: 'sunrise-city',
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1200',
      title: 'Golden Hour Commute',
      location: 'San Francisco, USA'
    },
    {
      id: 'retro-ride',
      src: 'https://images.unsplash.com/photo-1529336953122-2d95d27cb675?auto=format&fit=crop&q=80&w=1200',
      title: 'Weekend Cruise',
      location: 'Los Angeles, USA'
    },
    {
      id: 'seaside-breeze',
      src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=1200',
      title: 'Soft Tides',
      location: 'Jeju Island, South Korea'
    },
    {
      id: 'midnight-snack',
      src: 'https://images.unsplash.com/photo-1428278779356-1efe25c38d5d?auto=format&fit=crop&q=80&w=1200',
      title: 'Late Night Eats',
      location: 'Seoul, South Korea'
    }
  ];

  return (
    <div className="additional-info-container">
      <div className="additional-info-content">
        <div className="info-header">
          <h1>Beyond the Code</h1>
          <p>Get to know the person behind the projects.</p>
        </div>

        <div className="info-sections">
          {/* About Me Section */}
          <section className="info-section about-section">
            <h2>About Me</h2>
            <p className="about-text">
              Hey there! I'm not just about code and pixels. In this section I will share who I am outside of work.
              I love <b>traveling</b>, <b>photography</b>, and <b>music</b>. I also love games - which is why I am interested in Unity and Unreal Engine.

            </p>
            <p className="about-text">
              In the upcoming sections, I will share details about my interests and hobbies. 
            </p>
          </section>

          {/* Spotify Playlists */}
          <section className="info-section playlist-section">
            <div className="section-header">
              <h2>My Playlists</h2>
              <p>Curated Spotify playlists that fuel my focus, creativity, and travel adventures.</p>
            </div>
            <div className="playlist-scroll">
              <div className="playlist-list">
                {playlists.map((playlist) => (
                  <a
                    key={playlist.id}
                    href={playlist.url}
                    className="playlist-card"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="playlist-cover">
                      <img src={playlist.cover} alt={`${playlist.title} cover`} loading="lazy" />
                    </div>
                    <div className="playlist-info">
                      <h3>{playlist.title}</h3>
                      <p>{playlist.description}</p>
                      <span className="playlist-cta">Listen on Spotify</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Photo Gallery */}
          <section className="info-section gallery-section">
            <div className="section-header">
              <h2>Ricoh GR III Photo Stories</h2>
              <p>Snapshots from daily explorations. All images were captured handheld with my Ricoh GR III.</p>
            </div>
            <div className="photo-gallery">
              {galleryPhotos.map((photo) => (
                <figure key={photo.id} className="photo-card">
                  <img src={photo.src} alt={photo.title} loading="lazy" />
                  <figcaption>
                    <h4>{photo.title}</h4>
                    <span>{photo.location}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AdditionalInfo;

