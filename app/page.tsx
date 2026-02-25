export default function Home() {
  return (
    <main style={{
      backgroundColor: "#000",
      color: "#fff",
      minHeight: "100vh",
      padding: "40px 20px",
      fontFamily: "sans-serif",
      textAlign: "center"
    }}>
      
      <h1 style={{
        fontSize: "48px",
        marginBottom: "30px",
        letterSpacing: "2px"
      }}>
        Lul Neto
      </h1>

      <img 
        src="https://i.imgur.com/placeholder.jpg"
        alt="Lul Neto Cover"
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "20px",
          marginBottom: "40px"
        }}
      />

      <p style={{
        opacity: 0.7,
        marginBottom: "30px"
      }}>
        R&B Soul • Real Vibes • Late Night Energy
      </p>

      <div style={{display: "flex", flexDirection: "column", gap: "15px", maxWidth: "400px", margin: "0 auto"}}>
        
        <a href="https://open.spotify.com/artist/4lK3TIO8NKT0aXSjLakSNU" target="_blank" style={buttonStyle}>
          Spotify
        </a>

        <a href="https://music.apple.com/us/artist/lul-neto/1599684619" target="_blank" style={buttonStyle}>
          Apple Music
        </a>

        <a href="https://www.instagram.com/lul.neto" target="_blank" style={buttonStyle}>
          Instagram
        </a>

        <a href="https://youtube.com/@lulneto" target="_blank" style={buttonStyle}>
          YouTube
        </a>

        <a href="https://www.tiktok.com/@lulneto" target="_blank" style={buttonStyle}>
          TikTok
        </a>

        <a href="https://www.facebook.com/profile.php?id=100077654616818" target="_blank" style={buttonStyle}>
          Facebook
        </a>

      </div>

      <div style={{marginTop: "60px", opacity: 0.5}}>
        Merch — Coming Soon
      </div>

    </main>
  );
}

const buttonStyle = {
  backgroundColor: "#111",
  padding: "15px",
  borderRadius: "12px",
  textDecoration: "none",
  color: "#fff",
  fontWeight: "600",
  border: "1px solid #222"
};
