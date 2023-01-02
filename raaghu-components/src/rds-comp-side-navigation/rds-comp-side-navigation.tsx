import React from "react";
import { RdsSideNav } from "../rds-elements";
import { useTranslation } from "react-i18next";

const RdsCompSideNavigation = () => {
	const { t } = useTranslation();

  const sideNavItems = [
    {
      key: "0",
      label: t("Dashboard"),
      icon: "home",
      path: "/dashboard",
    },
    {
      key: "1",
      label: t("UI Components"),
      icon: "demo_ui",
      path: "/demo-ui",
    },
    {
      key: "2",
      label: t("Icons"),
      icon: "icons",
      path: "/icons",
    },
    {
      key: "3",
      label: t("Pages"),
      icon: "pages",
      children: [
        {
          key: "3-0",
          label: t("Tenants"),
          icon: "tenant",
          path: "/tenant",
        },
        {
          key: "3-1",
          label: t("Editions"),
          icon: "editions",
          path: "/edition",
        },
        {
          key: "3-2",
          label: t("Administration"),
          icon: "administration",
          children: [
            {
              key: "3-2-0",
              label: t("Organization Units"),
              icon: "organization",
              path: "/organization-unit",
            },
            {
              key: "3-2-1",
              label: t("Roles"),
              icon: "roles",
              path: "/role",
            },
            {
              key: "3-2-2",
              label: t("Users"),
              icon: "users",
              path: "/user",
            },
            {
              key: "3-2-3",
              label: t("Language"),
              icon: "languages",
              path: "/language",
            },
            {
              key: "3-2-4",
              label: t("Audit Logs"),
              icon: "audit_logs",
              path: "/audit-logs",
            },
            {
              key: "3-2-5",
              label: t("Webhook Subscriptions"),
              icon: "webhook_subscritptions",
              path: "/webhook-subscription",
            },
            {
              key: "3-2-6",
              label: t("Maintenance"),
              icon: "maintenance",
              path: "/maintenance",
            },
            {
              key: "3-2-7",
              label: t("Visual Settings"),
              icon: "visual_settings",
              path: "/visual-setting",
            },
            {
              key: "3-2-8",
              label: t("Settings"),
              icon: "setting",
              path: "/settings",
            },
          ],
        },
      ],
    },
  ];

  return <RdsSideNav sideNavItems={sideNavItems}></RdsSideNav>;
};

export default RdsCompSideNavigation;
