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

Default.args ={

  tenantSettingInfo : {},
  tenantData: {},
  tenantList: [{tenantInfoTemplate: '<div class=""><div><div><span>Default</span></div><span class="text-muted">Default </span></div></div>', statusTemplate: '<div><span class="badge badge-secondary">Inactive</span></div>', editionDisplayName: 'Standard', editionTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Standard</div></div>', id: 1},
  {tenantInfoTemplate: '<div class=""><div><div><span>jack</span></div><span class="text-muted">jack </span></div></div>', statusTemplate: '<div> <span class="badge badge-success">Active</span></div>', editionDisplayName: 'Standard', editionTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Standard</div></div>', id: 4},
  {tenantInfoTemplate: '<div class=""><div><div><span>khalate</span></div><span class="text-muted">ketan </span></div></div>', statusTemplate: '<div><span class="badge badge-secondary">Inactive</span></div>', editionDisplayName: 'Apple1', editionTemplate: '<div class="d-flex align-items-center"><div class=…on Apple1"></div><div class="">Apple1</div></div>', id: 9},
  {tenantInfoTemplate: '<div class=""><div><div><span>pratheesh</span></di… class="text-muted">pratheesh </span></div></div>', statusTemplate: '<div> <span class="badge badge-success">Active</span></div>', editionDisplayName: 'Standard', editionTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Standard</div></div>', id: 2},
  {tenantInfoTemplate: '<div class=""><div><div><span>richy</span></div><span class="text-muted">richy </span></div></div>', statusTemplate: '<div> <span class="badge badge-success">Active</span></div>', editionDisplayName: 'Standard', editionTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Standard</div></div>', id: 22},
  {tenantInfoTemplate: '<div class=""><div><div><span>swamiraj</span></div…an class="text-muted">samiraj </span></div></div>', statusTemplate: '<div><span class="badge badge-secondary">Inactive</span></div>', editionDisplayName: 'Standard', editionTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Standard</div></div>', id: 21}],
  editionList:[{isFree: null, value: '', displayText: 'Not assigned', isSelected: true},
  {isFree: true, value: '1', displayText: 'Standard', isSelected: false},
  {isFree: false, value: '5', displayText: 'apple', isSelected: false},
  {isFree: false, value: '6', displayText: 'Apple1', isSelected: false},
  ],
   tenantHeaders: [
    { displayName: 'Tenant', key: 'tenantInfoTemplate', datatype: 'html', dataLength: 30, sortable: true, required: true, filterable: true },  
    { displayName: 'Edition', key: 'editionTemplate', datatype: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
    { displayName: 'Status', key: 'statusTemplate', datatype: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
   
  ]
}

