import React, { useEffect, useState } from "react";

import TicketCard from "./TicketCard";
import styles from "./TicketList.module.css";
import { supabase } from "../supabase";

export default function TicketList() {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    async function getTickets() {
      const { data } = await supabase.from("tickets").select("*");
      setTickets(data);
    }
    getTickets();
  }, []);
  return (
    <div>
      <h2 className={styles.center}>Tickets</h2>
      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          title={ticket.title}
          description={ticket.description}
          priority={ticket.priority}
          status={ticket.status}
          category={ticket.category}
        />
      ))}
    </div>
  );
}
