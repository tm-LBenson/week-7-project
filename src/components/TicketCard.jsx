import styles from "./TicketCard.module.css";

function TicketCard({ id, title, description, priority, status, category, onStatusChange, onDeleteTicket }) {
  return (
    <div className={styles.card}>
      <p className={styles.bold}>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Priority: {priority}</p>
      <p>
        Status:{" "}
        <select
          value={status}
          onChange={(e) => onStatusChange(id, e.target.value)}
          name="status"
          id="status"
        >
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>
      </p>
      <p>Category: {category}</p>
      <hr />
      <div className={styles.pointer} onClick={(e) => onDeleteTicket(id)}>🗑️</div>
    </div>
  );
}

export default TicketCard;
