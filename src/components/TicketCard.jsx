import styles from "./TicketCard.module.css"

function TicketCard({ title, description, priority, status, category }) {
  return (
    <div className={styles.card}>
      <p className={styles.bold}>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Priority: {priority}</p>
      <p>Status: {status}</p>
      <p>Category: {category}</p>
      <hr />
    </div>
  );
}

export default TicketCard;
