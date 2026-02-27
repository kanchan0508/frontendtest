import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/routes/paths";
import DashboardSectionLayout from "../components/DashboardSectionLayout";
import NotStartedState from "../components/NotStartedState";

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

export default function ProgressPage() {
  const navigate = useNavigate();

  return (
    <DashboardSectionLayout title="Progress" subtitle={formatDate()}>
      <NotStartedState
        imageUrl="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/apnGWFpvh2.png"
        title="You haven't started yet"
        description="Your progress will show here after you complete your first activity."
        buttonLabel="Go to Dashboard"
        buttonIconUrl="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/jZgmvto4dT.png"
        onButtonClick={() => navigate(ROUTES.dashboard)}
      />
    </DashboardSectionLayout>
  );
}
