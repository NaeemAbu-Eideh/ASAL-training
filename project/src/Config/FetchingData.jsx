import { app } from './Firebase.jsx';
import { getDatabase, ref, get } from 'firebase/database';
import { smartphone, audio, camera } from '../Variables/Variables.jsx';
const fetchData = async () => {
    let data = [];
    const db = getDatabase(app);
    const dbRef = ref(db, "project/");
    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        data = Object.values(snapshot.val());
        let smartphonesData = [], audioData = [], cameraData = [];
        
        smartphonesData = data.filter(item => ["smartphones", "laptops", "tablets"].includes(item.section));
        audioData = data.filter(item => ["Audio", "Sounds"].includes(item.section));
        cameraData = data.filter(item => !["smartphones", "laptops", "tablets", "Audio", "Sounds"].includes(item.section));

          // smartphone=smartphonesData;
          // audio=audioData;
          // camera=cameraData;

        let fetchedData = {
          smartphone:smartphonesData,
          audio:audioData,
          camera:cameraData
        }

        return fetchedData;

      } else {
        console.error("Data not found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

export default fetchData;
