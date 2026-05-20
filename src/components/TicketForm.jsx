import { useState } from "react";
import { supabase } from "../supabase";

function TicketForm({ onCreateNewTicket }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const newTicket = {
      title,
      description,
      priority,
      category,
      status: "Open",
    };
    await supabase.from("tickets").insert(newTicket);
  
    setTitle("");
    setDescription("");
    setPriority("");
    setCategory("");
    onCreateNewTicket();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input
          value={title}
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Description
        <input
          value={description}
          type="text"
          name="description"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Priority
        <input
          value={priority}
          type="text"
          name="priority"
          id="priority"
          onChange={(e) => setPriority(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Category</option>
          <option value="Account Access">Account Access</option>
          <option value="Hardware">Hardware</option>
          <option value="Devices">Devices</option>
        </select>
      </label>
      <button>Add Ticket</button>
    </form>
  );
}

export default TicketForm;
