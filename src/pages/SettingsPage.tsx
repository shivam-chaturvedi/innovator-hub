import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Bell, Globe2, ShieldCheck, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import PageLayout from "@/components/PageLayout";
import { cn } from "@/lib/utils";

const menuItems: { id: SettingsSection; label: string; description: string; icon: LucideIcon }[] = [
  { id: "language", label: "Language", description: "Choose your preferred language", icon: Globe2 },
  { id: "notifications", label: "Notifications", description: "Control alerts and digests", icon: Bell },
  { id: "security", label: "Security", description: "Passwords, devices, and 2FA", icon: ShieldCheck },
];

const languageOptions = ["English", "हिन्दी", "Español", "Français"];

const notificationOptions = [
  {
    key: "summary" as const,
    label: "Weekly digest",
    description: "Email highlights across your account activity.",
  },
  {
    key: "product" as const,
    label: "Product updates",
    description: "New features, tutorials, and onboarding tips.",
  },
  {
    key: "security" as const,
    label: "Security alerts",
    description: "Sign-ins, new devices, or suspicious activity.",
  },
];

type NotificationKey = (typeof notificationOptions)[number]["key"];

type SecurityAction = {
  title: string;
  description: string;
  cta: string;
};

const securityActions: SecurityAction[] = [
  {
    title: "Change password",
    description: "Use a strong, unique password that you rotate every 90 days.",
    cta: "Update password",
  },
  {
    title: "Manage trusted devices",
    description: "Sign out stale sessions and keep only the browsers you use frequently.",
    cta: "Review devices",
  },
  {
    title: "Enable two-factor",
    description: "Add an authenticator or SMS factor to block unauthorized logins.",
    cta: "Enable 2FA",
  },
];

const accountTypes = [
  {
    title: "Individual",
    description: "Track personal expenses & budgets",
    status: "Active",
    statusColor: "text-emerald-400",
  },
  {
    title: "Business",
    description: "Manage customers, suppliers & cashbook",
    status: "Setup needed",
    statusColor: "text-amber-400",
  },
];

type SettingsSection = "language" | "notifications" | "security";

const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState<SettingsSection>("language");
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
  const [notificationSettings, setNotificationSettings] = useState<Record<NotificationKey, boolean>>({
    summary: true,
    product: true,
    security: true,
  });

  const summaryText = useMemo(() => {
    const enabled = Object.values(notificationSettings).filter(Boolean).length;
    return `${enabled} notification${enabled === 1 ? "" : "s"} active`;
  }, [notificationSettings]);

  const renderSectionDetail = () => {
    switch (activeSection) {
      case "language":
        return (
          <div className="space-y-6">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Interface</p>
              <p className="text-sm text-muted-foreground">
                Pick a language that will be used across every page, email, and tooltip.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {languageOptions.map((label) => {
                const isActive = label === selectedLanguage;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setSelectedLanguage(label)}
                    className={cn(
                      "rounded-2xl border px-4 py-3 text-left transition",
                      isActive
                        ? "border-primary bg-primary/10 text-primary shadow"
                        : "border-border/60 bg-background/50 hover:border-primary/70",
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-foreground">{label}</p>
                      {isActive && <span className="text-[10px] uppercase tracking-[0.4em] text-primary/80">Active</span>}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {label === "English" ? "Primary language" : "Available language"}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        );
      case "notifications":
        return (
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground">
              We keep notifications lean. Toggle the ones you want and we will send the rest to the archive.
            </p>
            <div className="space-y-4">
              {notificationOptions.map((option) => (
                <div
                  key={option.key}
                  className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/60 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-semibold text-foreground">{option.label}</p>
                    <p className="text-xs text-muted-foreground">{option.description}</p>
                  </div>
                  <Switch
                    checked={notificationSettings[option.key]}
                    onCheckedChange={(state) =>
                      setNotificationSettings((prev) => ({ ...prev, [option.key]: state }))
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        );
      case "security":
        return (
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground">
              Lock down your account by rotating passwords, auditing devices, and adding a second factor.
            </p>
            <div className="space-y-3">
              {securityActions.map((action) => (
                <div
                  key={action.title}
                  className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-semibold text-foreground">{action.title}</p>
                    <p className="text-xs text-muted-foreground">{action.description}</p>
                  </div>
                  <Button size="sm" variant="outline" className="uppercase tracking-[0.3em]">
                    {action.cta}
                  </Button>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-dashed border-border/60 bg-background/70 px-4 py-3 text-sm text-muted-foreground">
              <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Recent security events</p>
              <ul className="mt-3 space-y-1 text-xs text-foreground">
                <li>• Password changed 3 days ago</li>
                <li>• Trusted device added from Bangkok</li>
                <li>• 2FA still enabled on primary phone</li>
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const activeMenu = menuItems.find((item) => item.id === activeSection) ?? menuItems[0];

  return (
    <PageLayout>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Account</p>
            <h1 className="text-3xl font-semibold text-foreground">Settings</h1>
            <p className="text-sm text-muted-foreground">
              Manage every preference, notification, and security control for your profile.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1.35fr]">
            <div className="rounded-2xl border border-border bg-white/5 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
              <header className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl font-semibold text-primary-foreground">
                    G
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-foreground">Guest</p>
                    <p className="text-xs uppercase tracking-[0.4em] text-emerald-400">Online</p>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="uppercase tracking-[0.3em]">
                  Edit
                </Button>
              </header>
              <div className="mt-6 space-y-3">
                {menuItems.map((item) => {
                  const isActive = item.id === activeSection;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveSection(item.id)}
                      className={cn(
                        "flex w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-sm transition",
                        isActive
                          ? "border-primary bg-primary/10 text-primary shadow"
                          : "border-border/60 bg-background/60 hover:border-primary/60",
                      )}
                    >
                      <div className="flex items-center gap-3 text-left">
                        <item.icon className="h-5 w-5" />
                        <div>
                          <p className="font-semibold text-foreground">{item.label}</p>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">View</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white/5 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Details</p>
                  <h2 className="text-2xl font-semibold text-foreground">{activeMenu.label}</h2>
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{summaryText}</span>
              </div>
              <div className="mt-6">{renderSectionDetail()}</div>
              <div className="mt-10 rounded-2xl border border-border/60 bg-background/70 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Account Types</p>
                    <p className="text-xs text-muted-foreground">Add or remove account types. You need at least one.</p>
                  </div>
                  <Button size="sm" variant="outline" className="uppercase tracking-[0.3em]">
                    Add Type
                  </Button>
                </div>
                <div className="mt-4 space-y-3">
                  {accountTypes.map((type) => (
                    <div
                      key={type.title}
                      className="flex items-center justify-between rounded-2xl border border-border/70 bg-white/5 px-4 py-3"
                    >
                      <div>
                        <p className="font-semibold text-foreground">{type.title}</p>
                        <p className="text-xs text-muted-foreground">{type.description}</p>
                      </div>
                      <span className={cn("text-xs font-semibold uppercase tracking-[0.4em]", type.statusColor)}>
                        {type.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SettingsPage;
