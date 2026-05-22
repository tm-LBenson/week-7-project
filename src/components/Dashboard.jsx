import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import TicketList from "./TicketList";
import TicketForm from "./TicketForm";
import styles from "./Dashboard.module.css"
import  Button  from 'react-bootstrap/Button';

function Dashboard() {
  const [tickets, setTickets] = useState([]);

  async function getTickets() {
    const { data } = await supabase.from("tickets").select("*").order("id", { ascending: true });
    setTickets(data);
  }

  useEffect(() => {
    getTickets();
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
  }

  async function updateTicketStatus(id, newStatus) {
    await supabase.from("tickets").update({ status: newStatus }).eq("id", id);
    getTickets();
  }

  async function deleteTicket (id){
    await supabase.from("tickets").delete().eq("id", id)
    getTickets()
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.topbar}>
        <h2>Helpdesk Dashboard</h2>
        <Button onClick={handleSignOut}>Sign Out</Button>
      </div>
      <TicketForm onCreateNewTicket={getTickets} />
      <TicketList
        onDeleteTicket={deleteTicket}
        onStatusChange={updateTicketStatus}
        tickets={tickets}
      />
    </div>
  );
}

export default Dashboard;
