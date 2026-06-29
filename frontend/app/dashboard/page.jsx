"use client";
import { useRole } from "@/components/Providers";
import MenteeDashboard from "@/components/dashboards/MenteeDashboard";
import MentorDashboard from "@/components/dashboards/MentorDashboard";

export default function DashboardPage() {
  const { role } = useRole();
  return role === "mentor" ? <MentorDashboard /> : <MenteeDashboard />;
}
