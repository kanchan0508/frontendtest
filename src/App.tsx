import { Routes, Route, Navigate } from "react-router-dom";
import type { ReactElement } from "react";
import { ROUTES } from "@/app/routes/paths";
import AppLayout from "@/components/layout/AppLayout";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import HomePage from "@/features/home/pages/HomePage";
import LoginPage from "@/features/auth/pages/LoginPage";
import SignUpPage from "@/features/auth/pages/SignUpPage";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import ValueGiftsPage from "@/features/value-gifts/pages/ValueGiftsPage";
import ModuleToEarPage from "@/features/dashboard/pages/ModuleToEarPage";
import ConnectToCoachPage from "@/features/dashboard/pages/ConnectToCoachPage";
import CoursesPage from "@/features/dashboard/pages/CoursesPage";
import ProgressPage from "@/features/dashboard/pages/ProgressPage";
import ReportsPage from "@/features/dashboard/pages/ReportsPage";
import DeepBreathingPage from "@/features/wellness/pages/DeepBreathingPage";
import ChakraMeditationPage from "@/features/wellness/pages/ChakraMeditationPage";
import CreateProfileStepOnePage from "@/features/onboarding/pages/CreateProfileStepOnePage";
import CreateProfileStepTwoPage from "@/features/onboarding/pages/CreateProfileStepTwoPage";
import ProfileInitialPage from "@/features/profile/pages/ProfileInitialPage";
import ProfileEditPage from "@/features/profile/pages/ProfileEditPage";
import ProfileViewPage from "@/features/profile/pages/ProfileViewPage";
import ProfilePlansPage from "@/features/profile/pages/ProfilePlansPage";
import ApplicationsPage from "@/features/applications/pages/ApplicationsPage";
import ApplicationDetailsPage from "@/features/applications/pages/ApplicationDetailsPage";
import ContractAgreementPage from "@/features/applications/pages/ContractAgreementPage";
import {
  hasCompletedProfileStepOne,
  hasCompletedProfileStepTwo,
} from "@/utils/onboarding";

function RequireStepOne({ children }: { children: ReactElement }) {
  if (!hasCompletedProfileStepOne()) {
    return <Navigate to={ROUTES.createProfile} replace />;
  }

  return children;
}

function RequireFullOnboarding({ children }: { children: ReactElement }) {
  if (!hasCompletedProfileStepOne()) {
    return <Navigate to={ROUTES.createProfile} replace />;
  }

  if (!hasCompletedProfileStepTwo()) {
    return <Navigate to={ROUTES.createProfileFeeling} replace />;
  }

  return children;
}

function RedirectIfStepOneDone({ children }: { children: ReactElement }) {
  if (hasCompletedProfileStepOne()) {
    if (!hasCompletedProfileStepTwo()) {
      return <Navigate to={ROUTES.createProfileFeeling} replace />;
    }

    return <Navigate to={ROUTES.dashboard} replace />;
  }

  return children;
}

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={ROUTES.root} element={<HomePage />} />
        <Route path={ROUTES.login} element={<LoginPage />} />
        <Route path={ROUTES.signup} element={<SignUpPage />} />
      </Route>

      <Route
        path={ROUTES.createProfile}
        element={
          <RedirectIfStepOneDone>
            <CreateProfileStepOnePage />
          </RedirectIfStepOneDone>
        }
      />
      <Route
        path={ROUTES.createProfileFeeling}
        element={
          <RequireStepOne>
            <CreateProfileStepTwoPage />
          </RequireStepOne>
        }
      />
      <Route
        path={ROUTES.deepBreathing}
        element={
          <RequireFullOnboarding>
            <DeepBreathingPage />
          </RequireFullOnboarding>
        }
      />
      <Route
        path={ROUTES.chakraMeditation}
        element={
          <RequireFullOnboarding>
            <ChakraMeditationPage />
          </RequireFullOnboarding>
        }
      />
      <Route
        path={ROUTES.profile}
        element={
          <RequireFullOnboarding>
            <ProfileInitialPage />
          </RequireFullOnboarding>
        }
      />
      <Route
        path={ROUTES.profileEdit}
        element={
          <RequireFullOnboarding>
            <ProfileEditPage />
          </RequireFullOnboarding>
        }
      />
      <Route
        path={ROUTES.profileCompleted}
        element={
          <RequireFullOnboarding>
            <ProfileViewPage />
          </RequireFullOnboarding>
        }
      />
      <Route
        path={ROUTES.profilePlan}
        element={
          <RequireFullOnboarding>
            <ProfilePlansPage />
          </RequireFullOnboarding>
        }
      />
      <Route
        path={ROUTES.applications}
        element={
          <RequireFullOnboarding>
            <ApplicationsPage />
          </RequireFullOnboarding>
        }
      />
      <Route
        path={ROUTES.applicationDetails}
        element={
          <RequireFullOnboarding>
            <ApplicationDetailsPage />
          </RequireFullOnboarding>
        }
      />
      <Route
        path={ROUTES.applicationContract}
        element={
          <RequireFullOnboarding>
            <ContractAgreementPage />
          </RequireFullOnboarding>
        }
      />

      <Route path={ROUTES.dashboard} element={<DashboardLayout />}>
        <Route
          index
          element={
            <RequireFullOnboarding>
              <DashboardPage />
            </RequireFullOnboarding>
          }
        />
        <Route
          path="value-gifts"
          element={
            <RequireFullOnboarding>
              <ValueGiftsPage />
            </RequireFullOnboarding>
          }
        />
        <Route
          path="module-to-ear"
          element={
            <RequireFullOnboarding>
              <ModuleToEarPage />
            </RequireFullOnboarding>
          }
        />
        <Route
          path="connect-to-coach"
          element={
            <RequireFullOnboarding>
              <ConnectToCoachPage />
            </RequireFullOnboarding>
          }
        />
        <Route
          path="courses"
          element={
            <RequireFullOnboarding>
              <CoursesPage />
            </RequireFullOnboarding>
          }
        />
        <Route
          path="progress"
          element={
            <RequireFullOnboarding>
              <ProgressPage />
            </RequireFullOnboarding>
          }
        />
        <Route
          path="reports"
          element={
            <RequireFullOnboarding>
              <ReportsPage />
            </RequireFullOnboarding>
          }
        />
      </Route>
    </Routes>
  );
}
