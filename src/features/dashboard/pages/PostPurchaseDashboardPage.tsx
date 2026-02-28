import DashboardCarouselSection from "../components/DashboardCarouselSection";
import DashboardSectionLayout from "../components/DashboardSectionLayout";
import PostPurchaseCenterSection from "../components/PostPurchaseCenterSection";

function formatDate(): string {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function PostPurchaseDashboardPage() {
  return (
    <DashboardSectionLayout title="Dashboard" subtitle={formatDate()}>
      <div className="flex flex-col gap-10">
        <DashboardCarouselSection />
        <PostPurchaseCenterSection />
      </div>
    </DashboardSectionLayout>
  );
}
