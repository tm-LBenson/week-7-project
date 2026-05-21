import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import TicketList from "./TicketList";
import TicketForm from "./TicketForm";

function Dashboard() {
  const [tickets, setTickets] = useState([]);

  async function getTickets() {
    const { data } = await supabase.from("tickets").select("*");
    setTickets(data);
  }

  useEffect(() => {
    getTickets();
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
  }

  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
      <TicketForm onCreateNewTicket={getTickets} />
      <TicketList tickets={tickets} />
    </div>
  );
}

export default Dashboard;
