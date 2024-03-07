import { useEffect, useState } from "react";
import "./Artists.css";
import { bringAllArtists } from "../../Services/apiCalls";

export const Artists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    if (artists.length === 0) {
      bringAllArtists().then((data) => {
        setArtists(data);
      });
    }
  }, []);

  return (
    <section
      id="artist"
      className="bg-center bg-cover bg-white min-h-[40vh] lg:h-[848px] bg-no-repeat relative mt-[120px] lg:mt-[150px]"
    >
      <h1 className="team-title">Team Inkon</h1>
      <div className="artist-container">
        {artists && artists.length > 0 ? (
          artists.map((artist) => {
            return (
              <div key={artist.id} className="artist-card">
                <div className="artist-info">
                  <p className="artist-name">{artist.first_name}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p className="no-artists">No hay artistas para mostrar.</p>
        )}
      </div>
    </section>
  );
};
