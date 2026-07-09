import { AdminShell } from "@/components/admin-shell";
import { getAdminAuthStatus, requireAdminPage } from "@/lib/admin-auth";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Admin Security",
  description: "Review SKYPA admin environment configuration status.",
  path: "/admin/security",
});

function EnvRow({ label, configured }: { label: string; configured: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[#efe7e9] py-4 last:border-0">
      <span className="text-sm font-black text-[#2a1b22]">{label}</span>
      <span className={`rounded-md px-3 py-1 text-xs font-black ${configured ? "bg-[#dcf7ea] text-[#17724a]" : "bg-[#f7edf1] text-[#9f0038]"}`}>
        {configured ? "Configured" : "Missing"}
      </span>
    </div>
  );
}

export default async function AdminSecurityPage() {
  const session = await requireAdminPage("/admin/security");
  const adminAuth = getAdminAuthStatus();

  return (
    <AdminShell active="security" title="Security" description="Check whether required backend services are configured without exposing secret values.">
      <div className="grid max-w-4xl gap-6">
        <section className="rounded-md border border-[#e4d9dc] bg-white p-6">
          <h2 className="text-2xl font-black text-[#2a1b22]">Admin Access</h2>
          <p className="mt-2 text-sm leading-6 text-[#7b6a70]">
            Signed in as {session.user.email}. Admin access requires password verification plus an authenticator-app code.
          </p>
          <div className="mt-5">
            <EnvRow label="Upstash-backed auth store" configured={adminAuth.redisConfigured} />
            <EnvRow label="Strong admin session secret" configured={adminAuth.sessionSecretStrong} />
            <EnvRow label="Bootstrap token" configured={adminAuth.bootstrapTokenConfigured} />
            <EnvRow label="Admin email allowlist" configured={adminAuth.allowedEmailLockConfigured} />
          </div>
        </section>
        <section className="rounded-md border border-[#e4d9dc] bg-white p-6">
          <h2 className="text-2xl font-black text-[#2a1b22]">Service Environment</h2>
          <div className="mt-5">
            <EnvRow label="Vercel AI Gateway key" configured={Boolean(process.env.AI_GATEWAY_API_KEY || process.env.VERCEL_AI_GATEWAY_API_KEY)} />
            <EnvRow label="Upstash Redis REST URL" configured={Boolean(process.env.UPSTASH_REDIS_REST_URL)} />
            <EnvRow label="Upstash Redis REST token" configured={Boolean(process.env.UPSTASH_REDIS_REST_TOKEN)} />
            <EnvRow label="Resend API key" configured={Boolean(process.env.RESEND_API_KEY)} />
            <EnvRow label="Sanity write token" configured={Boolean(process.env.SANITY_API_WRITE_TOKEN)} />
          </div>
        </section>
      </div>
    </AdminShell>
  );
}
