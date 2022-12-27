import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompTenantList from "./rds-comp-tenant-list";

export default {
  title: "Components/Tenant List",
  component: RdsCompTenantList,

} as ComponentMeta<typeof RdsCompTenantList>;


const Template: ComponentStory<typeof RdsCompTenantList> = (args) =>
  <RdsCompTenantList {...args} />;

export const Default = Template.bind({});

Default.args = {

  tableHeaders: [
    { displayName: 'Tenant', key: 'tenant', datatype: 'avatarTitleInfo', sortable: true },
    { displayName: 'Edition', key: 'editionName', datatype: 'text', sortable: true },
    { displayName: 'Status', key: 'status', datatype: 'badge', sortable: true },
    { displayName: 'Subscription End Date', key: 'expiry', datatype: 'text', sortable: true  },
  ],
  tableData: [
    { id: 1, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'Standard', status: {badgeColorVariant:'primary', content:'inactive'}, expiry:'23-11-22'},
    { id: 2, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'apple', status: {badgeColorVariant:'success', content:'active'},  expiringEdition: 'Standard', expiry:'23-11-22' },
    { id: 3, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'tesla', status: {badgeColorVariant:'success', content:'active'}, expiringEdition: 'Standard', expiry:'23-11-22' },
    { id: 4, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'google', status: {badgeColorVariant:'success', content:'active'}, expiry:'23-11-22' },
    { id: 5, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'Standard', status: {badgeColorVariant:'primary', content:'inactive'}, expiry:'23-11-22' },
    { id: 6, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'amazon', status: {badgeColorVariant:'success', content:'active'}, expiringEdition: 'Standard', expiry:'23-11-22' },
    { id: 7, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'bing', status: {badgeColorVariant:'success', content:'active'}, expiringEdition: 'Standard', expiry:'23-11-22' },
    { id: 8, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'stack', status: {badgeColorVariant:'success', content:'active'}, expiry:'23-11-22' },
    { id: 9, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'slack', status: {badgeColorVariant:'primary', content:'inactive'}, expiry:'23-11-22' },
    { id: 10, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'disc', status: {badgeColorVariant:'success', content:'active'}, expiringEdition: 'Standard', expiry:'23-11-22' },
    { id: 11, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'HD', status: {badgeColorVariant:'success', content:'active'}, expiringEdition: 'Standard', expiry:'23-11-22' },
    { id: 12, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'dell', status: {badgeColorVariant:'success', content:'active'}, expiry:'23-11-22' },
    { id: 13, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'logi', status: {badgeColorVariant:'primary', content:'inactive'}, expiry:'23-11-22' },
    { id: 14, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'mcdonald', status: {badgeColorVariant:'success', content:'active'}, expiringEdition: 'Standard', expiry:'23-11-22' },
    { id: 15, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'perl', status: {badgeColorVariant:'success', content:'active'}, expiringEdition: 'Standard', expiry:'23-11-22' },
    { id: 16, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'proton', status: {badgeColorVariant:'success', content:'active'}, expiry:'23-11-22' },
    { id: 17, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'express', status: {badgeColorVariant:'primary', content:'inactive'}, expiry:'23-11-22' },
    { id: 18, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'nord', status: {badgeColorVariant:'success', content:'active'}, expiringEdition: 'Standard', expiry:'23-11-22' },
    { id: 19, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'mern', status: {badgeColorVariant:'success', content:'active'}, expiringEdition: 'Standard', expiry:'23-11-22' },
    { id: 20, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'ruby', status: {badgeColorVariant:'success', content:'active'}, expiry:'23-11-22' },
    { id: 21, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'rails', status: {badgeColorVariant:'primary', content:'inactive'}, expiry:'23-11-22' },
    { id: 22, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'asus', status: {badgeColorVariant:'success', content:'active'}, expiringEdition: 'Standard', expiry:'23-11-22' },
    { id: 23, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'code', status: {badgeColorVariant:'success', content:'active'}, expiringEdition: 'Standard', expiry:'23-11-22' },
    { id: 24, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'nick', status: {badgeColorVariant:'success', content:'active'}, expiry:'23-11-22' },
    { id: 25, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'plex', status: {badgeColorVariant:'primary', content:'inactive'}, expiry:'23-11-22' },
    { id: 26, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'senti', status: {badgeColorVariant:'success', content:'active'}, expiringEdition: 'Standard', expiry:'23-11-22' },
    { id: 27, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'prick', status: {badgeColorVariant:'success', content:'active'}, expiringEdition: 'Standard', expiry:'23-11-22' },
    { id: 28, tenant: {avatar:"https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg", title: "Wai Technology", info:"software"}, editionName: 'solar', status: {badgeColorVariant:'success', content:'active'}, expiry:'23-11-22' },
  ],
  actions: [
    { id: 'login' , displayName: 'Login as tenant' },
    { id: 'delete', displayName: 'Delete' },
    { id: 'edit', displayName: 'Edit' }
  ],
  pagination: true,
  recordsPerPage: 5,
  recordsPerPageSelectListOption: true
}
