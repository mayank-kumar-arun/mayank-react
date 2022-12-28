import React from "react";
import { useTranslation } from "react-i18next";
import "./Login.scss";
import {
	ValidateTenantName,
	trial,
	Authenticate,
	shouldSendPasswordResetCode,
	RootState,
	AppDispatch,
	useAppDispatch,
	loginActions,
	getUserConfiguration,
	forgotPasswordActions,
} from "../../../../libs/public.api";
import {
	IsTenantAvailableInput,
	TokenAuthServiceProxy,
	AuthenticateModel,
	AuthenticateResultModel,
} from "../../../../libs/public.api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RdsCompLogin } from "../../../rds-components";

export interface LoginProps {
	onForgotPassword: (isForgotPasswordClicked?: boolean) => void;
}
const Login: React.FC<LoginProps> = (props: LoginProps) => {
	const dispatch: any = useAppDispatch();
	const accessToken: any = useSelector(
		(state: RootState) => state.persistedReducer.login.accessToken
	);

	const navigate = useNavigate();
	if (accessToken != undefined) {
		getUserConfiguration("login");
		navigate("/dashboard");
	}

	const loginHandler = (email: string, password: string) => {
		localStorage.setItem("email", JSON.stringify(email));
		localStorage.setItem("password", JSON.stringify(password));
		const authenticateModal = new AuthenticateModel();
		authenticateModal.userNameOrEmailAddress = email;
		authenticateModal.password = password;
		authenticateModal.rememberClient = true;
		dispatch(Authenticate(authenticateModal));
	};

	const forgotPasswordHandler: any = (isForgotPasswordClicked: boolean) => {
		navigate("/forgot-password");
		props.onForgotPassword(isForgotPasswordClicked);
	};

	const {t} = useTranslation();
	
	return (
		<div className="login-background">
			{/* <h1>{t("hi")}</h1> */}
			{/* {accessToken!=undefined && <h1>Loggedin</h1>} */}
			<div
				className="align-items-center d-flex justify-content-center login m-auto"
				style={{ width: 900, height: "100%" }}
			>
				<div className="container-fluid m-2">
					<div className="bg-white row rounded-3 " style={{ height: 524 }}>
						<div className="col-md-6">
							<div className="py-4 px-3">
								<div className="pb-4">
									<div className="text-center">
										<img src="./assets/raaghu_text_logo.svg"></img>
									</div>
								</div>
								<RdsCompLogin
									onLogin={loginHandler}
									onForgotPassword={forgotPasswordHandler}
								/>
							</div>
						</div>
						<div
							className="col-md-6 order-1 order-sm-2 rounded-end position-relative align-items-center p-0"
							style={{
								backgroundRepeat: "no-repeat",
								backgroundColor: "#000",
								height: 524,
							}}
						>
							<video
								className="video position-relative"
								autoPlay
								muted
								loop
								style={{ width: 442, height: 524 }}
							>
								<source
									src="./assets/building_lights.mp4"
									type="video/mp4"
								></source>
							</video>
							<img
								className="position-absolute"
								style={{
									zIndex: "3",
									backgroundSize: "cover",
									top: 240,
									left: 196,
									width: 50,
									height: 50,
								}}
								src="./assets/raaghu_icon.png"
							></img>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
