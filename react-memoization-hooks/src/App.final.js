import { useCallback, useEffect, useMemo, useState } from "react";

import Navbar from "./Components/Navbar";
import { HeadCounter } from "./Components/Counter";
import { FabButton } from "./Components/FabButton";

import { likesCounter } from "./Services/expensiveCalculation";
import { RepositoryList } from "./Components/RepositortList";

const SEARCH = "https://api.github.com/search/repositories";

function App() {
  const [dark, setDark] = useState(false);
  const [totalLikes, setTotalLikes] = useState(0);

  const getRepositories = useCallback((query) => {
    return fetch(`${SEARCH}?q=${query}`);
  }, []);

  const toogleDarkmode = () => setDark(!dark);

  const likes = useMemo(() => likesCounter(totalLikes), [totalLikes]);

  const theme = useMemo(
    () => ({
      color: dark ? "#fff" : "#333",
      navbar: dark ? "#1a202c" : "#e5e7eb",
      backgroundColor: dark ? "#333" : "#fff",
    }),
    [dark]
  );

  useEffect(() => console.log("Theme updated"), [theme]);

  return (
    <div style={theme} className="App">
      <Navbar theme={theme.navbar} toogleDarkmode={toogleDarkmode} />
      <HeadCounter likes={likes} />
      <RepositoryList getRepositories={getRepositories} />
      <FabButton totalLikes={totalLikes} setTotalLikes={setTotalLikes} />
    </div>
  );
}

export default App;
