import React, { useEffect } from "react";
import SplashScreen from "../SplashScreen";
import HomeScreen from "../Home";

const Main = () => {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return <>{loading ? <SplashScreen /> : <HomeScreen />}</>;
};

export default Main;
