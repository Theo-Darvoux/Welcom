import type { CalEvent } from "./types";

let cachedEvents: CalEvent[] | null = null;
let fetchPromise: Promise<CalEvent[]> | null = null;

export async function getCalendarEvents(): Promise<CalEvent[]> {

  if (cachedEvents !== null) {
    return cachedEvents;
  }

  if (fetchPromise !== null) {
    return fetchPromise;
  }

  fetchPromise = fetchEvents();
  cachedEvents = await fetchPromise;
  fetchPromise = null;
  return cachedEvents;
}

async function fetchEvents(): Promise<CalEvent[]> {
  try {
    const now = new Date();

    const day = now.getDay();
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - (day === 0 ? 6 : day - 1));
    weekStart.setHours(0, 0, 0, 0);
    const end = new Date(weekStart);
    end.setDate(weekStart.getDate() + 91);
    
    const res = await fetch(
      `https://cal.minet.net/api/events/?size=500&start_date=${weekStart.toISOString()}&end_date=${end.toISOString()}&upcoming=false`,
    );
    if (res.ok) {
      const raw: { items: any[] } = await res.json();
      return (raw.items ?? []).map((ev) => ({
        id: ev.id ?? '',
        title: ev.title ?? '',
        start_time: ev.start_time ?? '',
        location: ev.location ?? '',
        org_name: ev.organization?.name ?? '',
        org_color: ev.organization?.color_primary ?? '',
      }));
    }
    return [];
  } catch {

    return [];
  }
}
