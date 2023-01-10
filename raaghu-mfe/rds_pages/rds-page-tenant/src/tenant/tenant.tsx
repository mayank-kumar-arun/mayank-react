import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  RdsCompTenantList,
  RdsCompTenantInformation,
  RdsCompTenantSettings,
} from "../../../rds-components";
import { RdsButton, RdsOffcanvas, RdsNavtabs } from "../../../rds-elements";
interface RdsPageTenantProps {}

const tableData = [
  {
    id: 1,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "Standard",
    status: { badgeColorVariant: "primary", content: "inactive" },
    expiry: "23-11-22",
  },
  {
    id: 2,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "apple",
    status: { badgeColorVariant: "success", content: "active" },
    expiringEdition: "Standard",
    expiry: "23-11-22",
  },
  {
    id: 3,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "tesla",
    status: { badgeColorVariant: "success", content: "active" },
    expiringEdition: "Standard",
    expiry: "23-11-22",
  },
  {
    id: 4,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "google",
    status: { badgeColorVariant: "success", content: "active" },
    expiry: "23-11-22",
  },
  {
    id: 5,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "Standard",
    status: { badgeColorVariant: "primary", content: "inactive" },
    expiry: "23-11-22",
  },
  {
    id: 6,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "amazon",
    status: { badgeColorVariant: "success", content: "active" },
    expiringEdition: "Standard",
    expiry: "23-11-22",
  },
  {
    id: 7,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "bing",
    status: { badgeColorVariant: "success", content: "active" },
    expiringEdition: "Standard",
    expiry: "23-11-22",
  },
  {
    id: 8,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "stack",
    status: { badgeColorVariant: "success", content: "active" },
    expiry: "23-11-22",
  },
  {
    id: 9,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "slack",
    status: { badgeColorVariant: "primary", content: "inactive" },
    expiry: "23-11-22",
  },
  {
    id: 10,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "disc",
    status: { badgeColorVariant: "success", content: "active" },
    expiringEdition: "Standard",
    expiry: "23-11-22",
  },
  {
    id: 11,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "HD",
    status: { badgeColorVariant: "success", content: "active" },
    expiringEdition: "Standard",
    expiry: "23-11-22",
  },
  {
    id: 12,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "dell",
    status: { badgeColorVariant: "success", content: "active" },
    expiry: "23-11-22",
  },
  {
    id: 13,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "logi",
    status: { badgeColorVariant: "primary", content: "inactive" },
    expiry: "23-11-22",
  },
  {
    id: 14,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "mcdonald",
    status: { badgeColorVariant: "success", content: "active" },
    expiringEdition: "Standard",
    expiry: "23-11-22",
  },
  {
    id: 15,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "perl",
    status: { badgeColorVariant: "success", content: "active" },
    expiringEdition: "Standard",
    expiry: "23-11-22",
  },
  {
    id: 16,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "proton",
    status: { badgeColorVariant: "success", content: "active" },
    expiry: "23-11-22",
  },
  {
    id: 17,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "express",
    status: { badgeColorVariant: "primary", content: "inactive" },
    expiry: "23-11-22",
  },
  {
    id: 18,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "nord",
    status: { badgeColorVariant: "success", content: "active" },
    expiringEdition: "Standard",
    expiry: "23-11-22",
  },
  {
    id: 19,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "mern",
    status: { badgeColorVariant: "success", content: "active" },
    expiringEdition: "Standard",
    expiry: "23-11-22",
  },
  {
    id: 20,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "ruby",
    status: { badgeColorVariant: "success", content: "active" },
    expiry: "23-11-22",
  },
  {
    id: 21,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "rails",
    status: { badgeColorVariant: "primary", content: "inactive" },
    expiry: "23-11-22",
  },
  {
    id: 22,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "asus",
    status: { badgeColorVariant: "success", content: "active" },
    expiringEdition: "Standard",
    expiry: "23-11-22",
  },
  {
    id: 23,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "code",
    status: { badgeColorVariant: "success", content: "active" },
    expiringEdition: "Standard",
    expiry: "23-11-22",
  },
  {
    id: 24,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "nick",
    status: { badgeColorVariant: "success", content: "active" },
    expiry: "23-11-22",
  },
  {
    id: 25,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "plex",
    status: { badgeColorVariant: "primary", content: "inactive" },
    expiry: "23-11-22",
  },
  {
    id: 26,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "senti",
    status: { badgeColorVariant: "success", content: "active" },
    expiringEdition: "Standard",
    expiry: "23-11-22",
  },
  {
    id: 27,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "prick",
    status: { badgeColorVariant: "success", content: "active" },
    expiringEdition: "Standard",
    expiry: "23-11-22",
  },
  {
    id: 28,
    tenant: {
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
      title: "Wai Technology",
      info: "software",
    },
    editionName: "solar",
    status: { badgeColorVariant: "success", content: "active" },
    expiry: "23-11-22",
  },
];
const actions = [
  { id: "login", displayName: "Login as tenant" },
  { id: "delete", displayName: "Delete" },
  { id: "edit", displayName: "Edit" },
];

const editionList = [
  { option: "Not assigned" },
  { option: "Standard" },
  { option: "apple" },
  { option: "Apple1" },
];
const Tenant = (props: RdsPageTenantProps) => {
  const { t } = useTranslation();

  const tableHeaders = [
    {
      displayName: t("Tenant"),
      key: "tenant",
      datatype: "avatarTitleInfo",
      sortable: true,
    },
    {
      displayName: t("Edition"),
      key: "editionName",
      datatype: "text",
      sortable: true,
    },
    {
      displayName: t("Status"),
      key: "status",
      datatype: "badge",
      sortable: true,
    },
    {
      displayName: t("Subscription End Date"),
      key: "expiry",
      datatype: "text",
      sortable: true,
    },
  ];

  const navtabsItems = [
    { label: t("Tenant Information"), tablink: "#nav-home", id: 0 },
    { label: t("Settings"), tablink: "#nav-profile", id: 1 },
  ];

  const offCanvasHandler = () => {};
  const [activeNavTabId, setActiveNavTabId] = useState(0);
  const [showTenantSettings, setShowTenantSettings] = useState(false);
  const offCanvasButton =
    '<RdsButton icon = "plus" iconColorVariant="light" size = "medium" type = "button" colorVariant = "primary" label = "NEW TENANT"/>';
  return (
    <div className="tenant text-uppercase">
      <RdsOffcanvas
        canvasTitle={t("New Tenant")}
        onclick={offCanvasHandler}
        placement="end"
        offcanvaswidth={830}
        offcanvasbutton={
          <div className="d-flex justify-content-end">
            <RdsButton
              icon="plus"
              label={t("New Tenant") || ""}
              iconColorVariant="light"
              iconHeight="15px"
              iconWidth="15px"
              iconFill={false}
              iconStroke={true}
              block={false}
              size="small"
              type="button"
              colorVariant="primary"
            ></RdsButton>
          </div>
        }
        backDrop={false}
        scrolling={false}
        preventEscapeKey={false}
        offId={"tenant"}
      >
        <RdsNavtabs
          navtabsItems={navtabsItems}
          type="tabs"
          isNextPressed={showTenantSettings}
          activeNavTabId={activeNavTabId}
          activeNavtabOrder={(activeNavTabId) => {
            setActiveNavTabId(activeNavTabId), setShowTenantSettings(false);
          }}
        />
        {activeNavTabId == 0 && showTenantSettings === false && (
          <RdsCompTenantInformation
            editionList={editionList}
            tenantInfo={(showTenantSettings) => {
              setShowTenantSettings(showTenantSettings), setActiveNavTabId(1);
            }}
          />
        )}
        {(activeNavTabId == 1 || showTenantSettings == true) && (
          <RdsCompTenantSettings showEditData={true} />
        )}
      </RdsOffcanvas>
      <RdsCompTenantList
        tableHeaders={tableHeaders}
        tableData={tableData}
        actions={actions}
      />
    </div>
  );
};

export default Tenant;
