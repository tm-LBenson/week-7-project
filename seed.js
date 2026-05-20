import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
dotenv.config();

import { createClient } from "@supabase/supabase-js";
import { ticketsData } from "./src/data/tickets.js";

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const dataToInsert = ticketsData.map((ticket) => {
  const newTicket = {
    title: ticket.title,
    description: ticket.description,
    priority: ticket.priority,
    status: ticket.status,
    category: ticket.category,
  };
  return newTicket;
});

async function seed() {
  const { data, err } = await supabase.from("tickets").insert(dataToInsert).select("id, title, priority, status, category");
  if (err) {
    console.log(err);
  }
  console.log(data);
}

seed();
