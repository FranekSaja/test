"use client";
import Calendar from "../components/calendar";

export default function Home() {
  const elements = [1, 2, 3, 4, 5, 6].map((el, i) => <Calendar text={i + 1} />);

  return (
    <article>
      <div className="w-[200px]">{elements}</div>;
    </article>
  );
}
