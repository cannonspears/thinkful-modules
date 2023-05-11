select
  a.artist_name as artist,
  s.song_name,
  s.album_name as album
  from artists a
  full join songs s
  on a.artist_id = s.artist