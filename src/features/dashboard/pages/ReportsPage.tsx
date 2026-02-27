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

export default function ReportsPage() {
  const navigate = useNavigate();

  return (
    <DashboardSectionLayout title="Reports" subtitle={formatDate()}>
      <NotStartedState
        imageUrl="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/qrU9mpSPSi.png"
        title="You haven't started yet"
        description="Your Reports will show here after you complete your first activity."
        buttonLabel="Go to Dashboard"
        buttonIconUrl="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2026-02-27/mnHfEGDPQX.png"
        onButtonClick={() => navigate(ROUTES.dashboard)}
      />
    </DashboardSectionLayout>
  );
}
