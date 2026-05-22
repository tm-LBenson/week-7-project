import { useEffect, useState } from "react";

import TicketCard from "./TicketCard";
import styles from "./TicketList.module.css";

export default function TicketList({ tickets, onStatusChange, onDeleteTicket }) {
  return (
    <div>
      <h2 className={styles.center}>Tickets</h2>
      <div className={styles.list}>
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            title={ticket.title}
            description={ticket.description}
            priority={ticket.priority}
            status={ticket.status}
            category={ticket.category}
            id={ticket.id}
            onStatusChange={onStatusChange}
            onDeleteTicket={onDeleteTicket}
          />
        ))}
      </div>
    </div>
  );
}
