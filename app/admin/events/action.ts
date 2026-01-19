"use server"

import { createEvent } from "../../../lib/data";

export async function handleCreateEvent(eventData: {
  title: string;
  date: string;
    location: string;
    capacity: number;
}) {
  const newEvent = await createEvent(eventData);
  return newEvent;
}