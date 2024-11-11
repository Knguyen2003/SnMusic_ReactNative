import { collection, getDocs } from "firebase/firestore";
import { db } from "../component/configFirebase";

const fetchArtists = async () => {
  try {
    const artistsCollection = collection(db, "artists");
    const snapshot = await getDocs(artistsCollection);
    const artistsList = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("Danh sách nghệ sĩ:", artistsList);
    return artistsList;
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu từ Firestore:", error.message);
    return [];
  }
};

export default fetchArtists;
