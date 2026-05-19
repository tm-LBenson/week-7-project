import React, { useEffect, useState } from "react";
import { ticketsData } from "../data/tickets";
import TicketCard from "./TicketCard";
import styles from "./TicketList.module.css";

export default function TicketList() {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    setTickets(ticketsData);
  }, []);
  console.log(tickets);
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
