import { RdsBankCardDetail } from '../rds-elements'

export interface RdsCompCardDetailListProps {
    itemsList: 
    {
        cardID: string,
        cardName: string,
        cardExpiry: string,
        icon: string,
        iconHeight?: string,
        iconWidth?: string,
        iconFill?: boolean,
        iconstroke?: boolean,
        iconColorVarient?: string,
        cardNumber: number,
        isDefault: boolean,
        radioItems:
        {
            id: number,
            checked: boolean,
            name: string
        }[]
    }[],
    IsEditAndDefaultFunctionalityRequired: boolean,
    IsSelectionRequired: boolean
}

const RdsCompCardDetailList = (props: RdsCompCardDetailListProps) => {


    return (
        <>
            {props.itemsList.map(item =>
                <>

                    <div className={item.radioItems[0].checked ? "mb-2 card p-3 border-primary" : "mb-2 card p-3"} >
                        <RdsBankCardDetail
                            cardData={item}
                            isSelectable={props.IsSelectionRequired}
                            label={item.cardName}
                            isEditable={props.IsEditAndDefaultFunctionalityRequired}

                        // (onSetDefaultcard)="onSetAsDefaultCard($event)"
                        // (onSelectPaymentMethod)="onSelectCardForPaymentMethod($event)" 
                        />
                    </div >
                </>)
            }
        </>
    );
};
export default RdsCompCardDetailList;
