import { useEffect, useState } from "react";
import axios from "axios";

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/albums")
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the albums!", error);
      });
  }, []);

  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;
