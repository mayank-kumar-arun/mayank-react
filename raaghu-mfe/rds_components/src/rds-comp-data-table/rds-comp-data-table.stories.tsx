import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompDatatable from "./rds-comp-data-table";
export default {
  title: "Components/Data Table",
  component: RdsCompDatatable,
} as ComponentMeta<typeof RdsCompDatatable>;
const Template: ComponentStory<typeof RdsCompDatatable> = (args) =>
  <RdsCompDatatable {...args} />;


export const With_Pagination = Template.bind({});
With_Pagination.args = {
  tableHeaders: [
    { displayName: 'Edition Name', key: 'editionName', datatype: 'text', dataLength: 30, required: true, sortable: true },
    { displayName: 'Price ($)', key: 'price', datatype: 'number', dataLength: 5, required: false, sortable: true },
    { displayName: 'Trial Period(Day(s))', key: 'trialPeriod', datatype: 'number', dataLength: 5, required: true }
  ],
  tableData: [
    { id: 1, editionName: 'Standard', price: 60, trialPeriod: 5 },
    { id: 2, editionName: 'Basic', price: 120, trialPeriod: 10 },
    { id: 3, editionName: 'Premium', price: 250, trialPeriod: 5 },
    { id: 4, editionName: 'Standard', price: 60, trialPeriod: 7 },
    { id: 5, editionName: 'Basic', price: 100, trialPeriod: 15 },
    { id: 6, editionName: 'Standard', price: 60, trialPeriod: 5 },
    { id: 7, editionName: 'Premium', price: 100, trialPeriod: 47 },
    { id: 8, editionName: 'Standard', price: 100, trialPeriod: 53 },
    { id: 9, editionName: 'Standard', price: 100, trialPeriod: 35 },
    { id: 10, editionName: 'Basic', price: 100, trialPeriod: 35 },
    { id: 11, editionName: 'Premium', price: 100, trialPeriod: 95 },
    { id: 12, editionName: 'Standard', price: 100, trialPeriod: 75 },
    { id: 13, editionName: 'Premium', price: 100, trialPeriod: 15 },
    { id: 14, editionName: 'Basic', price: 100, trialPeriod: 45 },
    { id: 15, editionName: 'Standard', price: 100, trialPeriod: 3 },
    { id: 16, editionName: 'Basic', price: 100, trialPeriod: 1 },
  ],
  actions: [
    { id: 'delete', displayName: 'Delete' },
    { id: 'edit', displayName: 'Edit' }
  ],
  pagination: true,
  recordsPerPage: 5,
  recordsPerPageSelectListOption: true
}

export const Without_Pagination = Template.bind({});
Without_Pagination.args = {
  tableHeaders: [
    { displayName: 'Edition Name', key: 'editionName', datatype: 'text', dataLength: 30, required: true, sortable: true },
    { displayName: 'Price ($)', key: 'price', datatype: 'number', dataLength: 5, required: false, sortable: true },
    { displayName: 'Trial Period(Day(s))', key: 'trialPeriod', datatype: 'number', dataLength: 5, required: true }
  ],
  tableData: [
    { id: 1, editionName: 'Standard', price: 60, trialPeriod: 5 },
    { id: 2, editionName: 'Basic', price: 120, trialPeriod: 10 },
    { id: 3, editionName: 'Premium', price: 250, trialPeriod: 5 },
    { id: 4, editionName: 'Standard', price: 60, trialPeriod: 7 },
    { id: 5, editionName: 'Basic', price: 100, trialPeriod: 15 },
    { id: 6, editionName: 'Standard', price: 60, trialPeriod: 5 },
    { id: 7, editionName: 'Premium', price: 100, trialPeriod: 47 },
    { id: 8, editionName: 'Standard', price: 100, trialPeriod: 53 },
    { id: 9, editionName: 'Standard', price: 100, trialPeriod: 35 },
    { id: 10, editionName: 'Basic', price: 100, trialPeriod: 35 },
    { id: 11, editionName: 'Premium', price: 100, trialPeriod: 95 },
    { id: 12, editionName: 'Standard', price: 100, trialPeriod: 75 },
    { id: 13, editionName: 'Premium', price: 100, trialPeriod: 15 },
    { id: 14, editionName: 'Basic', price: 100, trialPeriod: 45 },
    { id: 15, editionName: 'Standard', price: 100, trialPeriod: 3 },
    { id: 16, editionName: 'Basic', price: 100, trialPeriod: 1 },
  ],
  actions: [
    { id: 'delete', displayName: 'Delete' },
    { id: 'edit', displayName: 'Edit' }
  ],
  pagination: false
}