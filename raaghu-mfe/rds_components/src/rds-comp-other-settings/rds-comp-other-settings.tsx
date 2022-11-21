import {RdsLabel, RdsCheckbox} from '../rds-elements'

export interface RdsCompOtherSettingsProps{

}

const RdsCompOtherSettings = (props:RdsCompOtherSettingsProps)=>{
    return (
        <ul className="ps-0 pt-4 list-unstyled">
            <div className="fw-medium mb-3">
                <RdsLabel label='Quick Theme Selection'></RdsLabel>
            </div>
            <li>
                <div className="form-group mb-3">
                    <RdsCheckbox label={'Is Quick Theme Select Enabled'}></RdsCheckbox>
                    {/* <rds-checkbox [label]="translate.instant('Is Quick Theme Select Enabled')" name="isQuickThemeSelectEnabled"
                        [checked]="dataset.isQuickThemeSelectEnabled" [disabled]="false" [switch]="false" [inline]="false"
                        [withLabel]="true" [isInputGroup]="false" (onChange)="selectAllFeature($event,'quickTheme')"
                        [(ngModel)]="dataset.isQuickThemeSelectEnabled" ngDefaultControl [id]="'isQuickThemeSelectEnabled'">
                    </rds-checkbox> */}
                </div>
            </li>

        </ul>
    )
}

export default RdsCompOtherSettings