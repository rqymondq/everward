# Everward

Production one-page website for Everward, a residential HVAC lead-generation partner.

## Booking link

Every **Book a Call** button reads from `NEXT_PUBLIC_BOOKING_URL` in `lib/site-config.ts`. The production fallback is the current Google Calendar booking page; a hosted environment value can replace it later without changing the buttons individually.

## Local development

```bash
npm install
npm run dev
```

Quality checks are available through `npm run lint`, `npx tsc --noEmit`, and `npm test`.
