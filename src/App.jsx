import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Splash from "./components/Splash";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    async function getSession() {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    }
    getSession();

    const {data} = supabase.auth.onAuthStateChange((e, currentSession)=>{
      setSession(currentSession)
    })
    return ()=> {
      data.subscription.unsubscribe();
    }

  }, []);
  console.log(session);
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={session ? <Navigate to="/dashboard" /> : <Splash />}
          />

          <Route
            path="/dashboard"
            element={session ? <Dashboard /> : <Navigate to="/" />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
