import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  AppBar,
  Toolbar,
  CssBaseline,
} from "@mui/material";
import "./App.css";

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
    <>
      <CssBaseline />
      <AppBar position="static" className="app-bar">
        <Toolbar className="toolbar">
          <Typography variant="h6">My Albums</Typography>
        </Toolbar>
      </AppBar>
      <Container className="full-height-container" maxWidth={false}>
        <Typography variant="h4" component="h1" gutterBottom>
          Albums
        </Typography>
        <TableContainer component={Paper} className="full-height-table">
          <Table className="album-table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Artist</TableCell>
                <TableCell>Genre</TableCell>
                <TableCell>Label</TableCell>
                <TableCell>Number of Tracks</TableCell>
                <TableCell>Year</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {albums.map((album) => (
                <TableRow key={album.id}>
                  <TableCell>{album.title}</TableCell>
                  <TableCell>
                    {album.artists
                      .map((artist) => `${artist.firstName} ${artist.lastName}`)
                      .join(", ")}
                  </TableCell>
                  <TableCell>{album.genre}</TableCell>
                  <TableCell>{album.label.name}</TableCell>
                  <TableCell>{album.numberOfTracks}</TableCell>
                  <TableCell>{album.year}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Albums;
