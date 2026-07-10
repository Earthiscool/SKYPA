import { AdminShell } from "@/components/admin-shell";
import { SettingsForm } from "@/components/admin-forms";
import { requireAdminPage } from "@/lib/admin-auth";
import { getSettings } from "@/lib/cms";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Admin Site Settings",
  description: "Edit SetuAI site-wide settings.",
  path: "/admin/site-settings",
});

export default async function SiteSettingsPage() {
  await requireAdminPage("/admin/site-settings");
  const settings = await getSettings();

  return (
    <AdminShell active="site-settings" title="Site Settings" description="Edit site name, tagline, contact email, announcement, and primary CTA.">
      <SettingsForm settings={settings} />
    </AdminShell>
  );
}
