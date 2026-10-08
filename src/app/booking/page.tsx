"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DateReserve from "@/components/DateReserve";

export default function BookingPage() {
  return (
    <main className="flex w-full flex-col items-center px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Venue Booking</h1>
      <Box
        component="form"
        className="flex w-full max-w-[420px] flex-col items-center gap-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <DateReserve />
        <Button type="submit" name="Book Venue" variant="contained">
          Book Venue
        </Button>
      </Box>
    </main>
  );
}
