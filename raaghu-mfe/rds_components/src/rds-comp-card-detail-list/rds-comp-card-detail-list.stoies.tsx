import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompCardDetailList from "./rds-comp-card-detail-list";

export default {
	title: "Components/Card_Detail_List",
	component: RdsCompCardDetailList,
} as ComponentMeta<typeof RdsCompCardDetailList>;

const Template: ComponentStory<typeof RdsCompCardDetailList> = (args) => (
	<RdsCompCardDetailList {...args} />
);

export const Default = Template.bind({});

Default.args = {
	cardDatas: [
		{
			cardID: "1011",
			cardName: "MasterCard",
			cardExpiry: "06/2027",
			icon: "editions",
			iconHeight: "30px",
			iconWidth: "30px",
			iconFill: false,
			iconstroke: true,
			iconColorVarient: "dark",
			cardNumber: 1111,
			isDefault: false,
			radioItems: [{ id: 1011, checked: false, name: "Radio-Button" }],
		},
		{
			cardID: "1012",
			cardName: "Visa",
			cardExpiry: "11/2032",
			icon: "tenant",
			iconHeight: "30px",
			iconWidth: "30px",
			iconFill: false,
			iconstroke: true,
			iconColorVarient: "dark",
			cardNumber: 3256,
			isDefault: false,
			radioItems: [{ id: 1011, checked: false, name: "Radio-Button" }],
		},
		{
			cardID: "1013",
			cardName: "DEbit",
			cardExpiry: "04/2023",
			icon: "plus",
			iconHeight: "30px",
			iconWidth: "30px",
			iconFill: false,
			iconstroke: true,
			iconColorVarient: "dark",
			cardNumber: 8001,
			isDefault: true,
			radioItems: [{ id: 1011, checked: true, name: "Radio-Button" }],
		},
		{
			cardID: "1014",
			cardName: "Discover",
			cardExpiry: "08/2027",
			icon: "roles",
			iconHeight: "30px",
			iconWidth: "30px",
			iconFill: false,
			iconstroke: true,
			iconColorVarient: "dark",
			cardNumber: 3412,
			isDefault: false,
			radioItems: [{ id: 1011, checked: false, name: "Radio-Button" }],
		},
	],
};
