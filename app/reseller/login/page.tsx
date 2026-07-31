import { redirect } from "next/navigation";
import { getReseller } from "@/lib/reseller/session";
import { ResellerLoginForm } from "@/components/reseller/login-form";

export const dynamic = "force-dynamic";

export default async function ResellerLoginPage() {
  const reseller = await getReseller();
  if (reseller) redirect("/reseller");

  return (
    <div className="fixed inset-0 z-[60] flex min-h-[100svh] items-center justify-center overflow-y-auto bg-ink-950 px-4 py-10 sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-24 h-[34rem] w-[34rem] rounded-full bg-gradient-hero opacity-30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-24 h-[30rem] w-[30rem] rounded-full bg-gradient-ai opacity-20 blur-3xl"
      />
      <ResellerLoginForm />
    </div>
  );
}
