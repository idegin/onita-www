import { redirect } from "next/navigation";
import { getReseller } from "@/lib/reseller/session";
import { PortalShell } from "@/components/reseller/portal-shell";
import { ResellerHome } from "@/components/reseller/home";

export const dynamic = "force-dynamic";

export default async function ResellerDashboardPage() {
  const reseller = await getReseller();
  if (!reseller) redirect("/reseller/login");

  return (
    <PortalShell reseller={reseller}>
      <ResellerHome reseller={reseller} />
    </PortalShell>
  );
}
