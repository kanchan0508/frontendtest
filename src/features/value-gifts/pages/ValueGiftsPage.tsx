import DashboardSectionLayout from "@/features/dashboard/components/DashboardSectionLayout";
import FrameScreen from "../components/FrameScreen";

function formatDate(): string {
  const parts = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).formatToParts(new Date());

  const weekday = parts.find((part) => part.type === "weekday")?.value ?? "";
  const day = parts.find((part) => part.type === "day")?.value ?? "";
  const month = parts.find((part) => part.type === "month")?.value ?? "";
  const year = parts.find((part) => part.type === "year")?.value ?? "";

  return `${weekday}, ${day} ${month} ${year}`;
}

export default function ValueGiftsPage() {
  return (
    <DashboardSectionLayout title="Value Gifts" subtitle={formatDate()}>
      <FrameScreen />
    </DashboardSectionLayout>
  );
}
