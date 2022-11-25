import {
	RdsInput,
	RdsSelectList,
	RdsCheckbox,
	RdsDatePicker,
	RdsButton,
} from "../rds-elements";

export interface RdsCompTenantInformationProps {
	editionList: any[];
	tenantData?: any[];
	showEmail?: boolean;
	tenantInfo: React.EventHandler<any>;
	onCancel?: React.EventHandler<any>;
}

const RdsCompTenantInformation = (props: RdsCompTenantInformationProps) => {
	const next = (event: any) => {
		if (!event || event.invalid) {
			return;
		}
		props.tenantInfo({ tenant: props.tenantData, next: true });
	};
	return (
		<div>
			<div className="tab-content py-4">
				<form>
					<div className="row align-items-center">
						<div className="col-md-3 text-center cursor-pointer sm-p-0">
							<img width="100" src="edit-pic.png" />

							<input type="file" accept="image/*" style={{ display: "none" }} />
						</div>
						<div className="col-md-9 sm-p-0">
							<div className="form-group mb-3">
								<RdsInput
									inputType="text"
									title="Tenancy Name"
									titleType="Top"
									label="Tenancy Name"
									name="tenancy_name"
									placeholder="Tenancy Name"
								></RdsInput>

								<div className="form-control-feedback"></div>
							</div>
							<div className="form-group mb-3">
								<RdsInput
									inputType="text"
									title="Tenant Name"
									label="Tenant Name"
									titleType="Top"
									name="tenant_name"
									placeholder="TenantName"
								></RdsInput>
							</div>
						</div>
					</div>
					<div className="row">
						{props.showEmail ? (
							<div className="col-md-6 sm-p-0">
								<div className="form-group mb-3">
									<RdsInput
										inputType="email"
										title="Admin Email"
										label="Admin Email"
										titleType="Top"
										placeholder="Admin Email"
										name="email"
									></RdsInput>
								</div>
							</div>
						) : (
							<div className="col-md-6 sm-p-0">
								<div className="form-group mb-3">
									<label htmlFor="Edition" className="mb-2">
										Edition<span className="text-danger">*</span>
									</label>
									<RdsSelectList
										label={"Edition"}
										selectItems={[props.editionList]}
									></RdsSelectList>
								</div>
							</div>
						)}
					</div>
					<div className="row">
						<div className="col-md-12 sm-p-0">
							<div className="form-group mb-3">
								<RdsCheckbox
									label={"Unlimited Time Subscription"}
									isDisabled
									checked
								></RdsCheckbox>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 sm-p-0">
							<div className="form-group mb-3">
								<RdsDatePicker DatePickerLabel={""}></RdsDatePicker>
							</div>
						</div>
					</div>
				</form>
			</div>
			<div className="footer-buttons py-3 bottom-0 w-100 action-buttons">
				<RdsButton
					tooltipTitle={""}
					type={"button"}
					label="Cancel"
					colorVariant="outline-primary"
					size="small"
					databsdismiss="offcanvas"
				></RdsButton>
				<RdsButton
					label="Next"
					size="small"
					class="ms-2"
					colorVariant="primary"
					tooltipTitle={""}
					onClick={next}
					type={"button"}
				></RdsButton>
			</div>
		</div>
	);
};

export default RdsCompTenantInformation;
