import  { useEffect, useState } from "react";

import TicketCard from "./TicketCard";
import styles from "./TicketList.module.css";

export default function TicketList({tickets}) {

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
