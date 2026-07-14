"use client";

import { useMemo, useState } from "react";
import { CircleQuestionMark } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getDaysInMonth(month: string, year: string) {
  if (!month || !year) return 31;
  return new Date(Number(year), Number(month), 0).getDate();
}

export default function BirthdaySelect() {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");

  const currentYear = new Date().getFullYear();

  const years = useMemo(
    () => Array.from({ length: 100 }, (_, index) => currentYear - index),
    [currentYear]
  );

  const daysInMonth = useMemo(() => getDaysInMonth(month, year), [month, year]);

  const days = useMemo(
    () => Array.from({ length: daysInMonth }, (_, index) => index + 1),
    [daysInMonth]
  );

  const handleMonthChange = (value: string | null) => {
    const nextMonth = value ?? "";
    setMonth(nextMonth);

    const nextDaysInMonth = getDaysInMonth(nextMonth, year);
    if (day && Number(day) > nextDaysInMonth) {
      setDay("");
    }
  };

  const handleYearChange = (value: string | null) => {
    const nextYear = value ?? "";
    setYear(nextYear);

    const nextDaysInMonth = getDaysInMonth(month, nextYear);
    if (day && Number(day) > nextDaysInMonth) {
      setDay("");
    }
  };

  const handleDayChange = (value: string | null) => {
    setDay(value ?? "");
  };

  return (
    <fieldset className="mt-2.5">
      <legend className="flex items-center gap-2 text-[17px] font-medium text-(--text-white)">
        Birthday
        <CircleQuestionMark size={18} aria-hidden="true" />
      </legend>

      <div className="mt-2 grid grid-cols-3 gap-3">
        <Select value={month} onValueChange={handleMonthChange}>
          <SelectTrigger
            aria-label="Birth month"
            className="h-14 w-full rounded-2xl border-[#55565f] bg-transparent px-4 text-white"
          >
            <SelectValue placeholder="Month" />
          </SelectTrigger>

          <SelectContent>
            {months.map((monthName, index) => (
              <SelectItem key={monthName} value={String(index + 1)}>
                {monthName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={day} onValueChange={handleDayChange}>
          <SelectTrigger
            aria-label="Birth day"
            className="h-14 w-full rounded-2xl border-[#55565f] bg-transparent px-4 text-white"
          >
            <SelectValue placeholder="Day" />
          </SelectTrigger>

          <SelectContent>
            {days.map((dayValue) => (
              <SelectItem key={dayValue} value={String(dayValue)}>
                {dayValue}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={year} onValueChange={handleYearChange}>
          <SelectTrigger
            aria-label="Birth year"
            className="h-14 w-full rounded-2xl border-[#55565f] bg-transparent px-4 text-white"
          >
            <SelectValue placeholder="Year" />
          </SelectTrigger>

          <SelectContent>
            {years.map((yearValue) => (
              <SelectItem key={yearValue} value={String(yearValue)}>
                {yearValue}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <input type="hidden" name="birthMonth" value={month} />
      <input type="hidden" name="birthDay" value={day} />
      <input type="hidden" name="birthYear" value={year} />
    </fieldset>
  );
}
