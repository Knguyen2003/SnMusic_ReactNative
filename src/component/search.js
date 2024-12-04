import { supabase } from "./supabaseClient";

const searchAll = async (keyword) => {
  try {
    const queries = [
      supabase
        .from("album")
        .select("id, nameAlbum, nameSinger,image,numberSong")
        .ilike("nameAlbum", `%${keyword}%`), //cột muốn timg
      supabase
        .from("song")
        .select("id, name,image,singer")
        .ilike("name", `%${keyword}%`),
      supabase
        .from("artist")
        .select("id,name,image,follower")
        .ilike("name", `%${keyword}%`),
    ];

    const [albums, songs, artists] = await Promise.all(queries);

    if (albums.error || songs.error || artists.error) {
      console.error("Error fetching data", {
        albums: albums.error,
        songs: songs.error,
        artists: artists.error,
      });
      return { albums: [], songs: [], artists: [] };
    }

    return {
      albums: albums.data || [],
      songs: songs.data || [],
      artists: artists.data || [],
    };
  } catch (error) {
    console.error("Error in searchAll:", error);
    return { albums: [], songs: [], artists: [] };
  }
};

export default searchAll;
