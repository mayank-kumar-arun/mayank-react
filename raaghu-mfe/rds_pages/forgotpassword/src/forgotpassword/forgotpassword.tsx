import React from "react";
import {
	RootState,
	AppDispatch,
	useAppDispatch,
	shouldSendPasswordResetCode,
	message,
} from "../../../../libs/public.api";
import { useSelector } from "react-redux";
import {RdsCompForgotPassword} from "../../../rds-components"

export interface ForgotPasswordProps {}

const ForgotPassword = (props: ForgotPasswordProps) => {
	const Message = useSelector(message);
	const forgotPasswordHandler = async (email?: string) => {
		await dispatch(shouldSendPasswordResetCode(email));
		alert(Message);
	};

	const dispatch: any = useAppDispatch();

	return (
		<div>
			<div
				className=" "
				style={{
					backgroundImage: "url(./assets/body-backgroud.svg)",
					backgroundSize: "cover",
					backgroundPosition: "bottom",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div
					className="align-items-center d-flex justify-content-center login m-auto"
					style={{ maxWidth: 900, height: "100%" }}
				>
					<div className="container-fluid m-2">
						<div className="bg-white row rounded-3">
							<div className="col-md-6">
								<div className="py-4 px-3">
									<div className="pb-4">
										<div className="text-center">
											<img
												src="./assets/Raaghu-logo-mfe-black.png"
												className="img-fluid"
											/>
										</div>
									</div>
									<RdsCompForgotPassword
										onForgotPassword={forgotPasswordHandler}
									></RdsCompForgotPassword>
								</div>
							</div>
							<div
								className="col-md-6 order-1 order-sm-2 rounded-end"
								style={{
									backgroundImage: "url(./assets/Login-card.svg)",
									backgroundSize: "cover",
									backgroundPosition: "bottom",
									backgroundRepeat: "no-repeat",
									backgroundColor: "#000",
								}}
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
