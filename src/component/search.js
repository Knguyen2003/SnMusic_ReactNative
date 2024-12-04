import supabase from "./supabaseClient";

const searchAll = async (keyword) => {
  const queries = [
    supabase
      .from("album")
      .select("id, nameAlbum,nameSinger")
      .ilike("name", `%${keyword}%`),
    supabase.from("song").select("id, name").ilike("title", `%${keyword}%`),
    supabase.from("artists").select("id, name").ilike("name", `%${keyword}%`),
  ];

  const [albums, songs, artists] = await Promise.all(queries);

  return {
    albums: albums.data || [],
    songs: songs.data || [],
    artists: artists.data || [],
  };
};

export default searchAll;
