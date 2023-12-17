export const environments = {
  production: false
};

export const SpotifyConfiguration = {
  clientId: '27093b5a463143c3895b6e8c6eea23d0',
  authEndpoint: 'https://acconts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/login/',
  scopes: [
    "user-read-currently-playing", // now playing
    "user-read-recently-played", // recently music played
    "user-read-playback-state", // read user music player state
    "user-top-read", // top artists and users musics
    "user-modify-playback-state", // change user music player
    "user-library-read", // read user library
    "playlist-read-private", // read private playlists
    "playlist-read-collaborative", // read collaborative playlists
  ]
}