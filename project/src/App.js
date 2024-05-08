import React from 'react';
import Header from './Components/Header/Index.jsx';
import Menu from './Components/Menu/Index.jsx';
import Body from './Components/Index.jsx';
import { app } from './Config/Firebase.jsx';
import { getDatabase, ref, get } from 'firebase/database';

function App() {
  const [smartphone, setSmartphone] = React.useState([]);
  const [audio, setAudio] = React.useState([]);
  const [camera, setCamera] = React.useState([]);
  const [headerCounters, setHeaderCounters] = React.useState({
    yourCart: 0,
    like:0,
    yourCartTotalPrice:0.00
  });
  let data = [];
  React.useEffect(()=>{
    const fetchData = async () => {
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

          setSmartphone(smartphonesData);
          setAudio(audioData);
          setCamera(cameraData);


        } else {
          console.error("Data not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header headerCounters = {headerCounters}/>
      <Menu/>
      <Body
      smartphone={smartphone}
      audio={audio}
      camera={camera}
      headerCounters={headerCounters}
      setHeaderCounters={setHeaderCounters}
      />
    </>
  );
}

export default App;
