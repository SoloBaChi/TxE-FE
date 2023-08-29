import React, { useState } from "react";
import { Icon } from "../../icons/Icons";
import TxELogo from "../../assets/txelogo-orange.svg";
import ScrollToContainerLink from "../scroll/ScrollToContainerLink";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Landing.css";
import FormBtn from "../../registrationPage/eventregistration/components/Buttons/FormButton";
import BtnPrimary from "../buttons/BtnPrimary";

const Navbar = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu((prevShowMenu) => !prevShowMenu);
	};

	const closeMenu = () => {
		setShowMenu(false);
	};

	return (
		<div className="flex bg-black justify-between items-center py-4 px-4 md:px-8 lg:px-6 sticky top-0 z-50">
			<div onClick={() => location.pathname !== "/" && navigate("/")}>
				<img
					src={TxELogo}
					className="w-24"
					alt=""
				/>
			</div>
			<div className="relative h-14 flex justify-between">
				<ul
					className={`hidden lg:flex flex-row-reverse h-full items-center font-bold ${
						showMenu ? "lg:hidden" : ""
					}`}>
					<Link
						to={"https://chat.whatsapp.com/JG3Wc5uiNtSKdLqUK2z6Dt"}
						target="_blank"
						className="p-2 mx-3 cursor-pointer  rounded-lg text-gray-100 navlink font-normal"
						onClick={closeMenu}>
						Join Our Community
					</Link>
					<ScrollToContainerLink to={"testimonials"}>
						<li
							className="p-2 mx-3 cursor-pointer  rounded-lg text-gray-100  navlink font-normal"
							onClick={closeMenu}>
							Testimonials
						</li>
					</ScrollToContainerLink>
					<ScrollToContainerLink to={"speakers"}>
						<li
							className="p-2 mx-3 cursor-pointer rounded-lg text-gray-100 navlink font-normal"
							onClick={closeMenu}>
							Speakers
						</li>
					</ScrollToContainerLink>
					<ScrollToContainerLink to={"event-schedule"}>
						<li
							className="p-2 mx-3 cursor-pointer rounded-lg text-gray-100 navlink font-normal"
							onClick={closeMenu}>
							Event Schedule
						</li>
					</ScrollToContainerLink>
				</ul>

				{/* small devices */}
				{!showMenu && (
					<div
						className="p-3 text-white z-50 small-nav"
						onClick={toggleMenu}>
						<Icon.BarMenu className="lg:hidden text-2xl font-semibold cursor-pointer text-white" />
					</div>
				)}
				{showMenu && (
					<div
						className="fixed flex justify-between h-screen bg-black text-white top-0 left-0 right-0 bottom-0 shadow-md p-4 z-50"
						onClick={toggleMenu}
						style={{ opacity: 0.95, transition: "opacity 1s ease" }}>
						<ul className="w-full h-fit flex flex-col font-bold mt-16 p-4 space-y-6 z-50">
							<ScrollToContainerLink to={"testimonials"}>
								<li
									className="p-2 cursor-pointer"
									onClick={closeMenu}>
									Testimonials
								</li>
							</ScrollToContainerLink>
							<ScrollToContainerLink to={"speakers"}>
								<li
									className="p-2 cursor-pointer"
									onClick={closeMenu}>
									Speakers
								</li>
							</ScrollToContainerLink>
							<ScrollToContainerLink to={"event-schedule"}>
								<li
									className="p-2 cursor-pointer"
									onClick={closeMenu}>
									Event Schedule
								</li>
							</ScrollToContainerLink>

							<Link
								to={"https://chat.whatsapp.com/JG3Wc5uiNtSKdLqUK2z6Dt"}
								className="p-2 cursor-pointer text-white"
								onClick={closeMenu}>
								Join Our Community
							</Link>
						</ul>
						<Icon.CancelMenu className="lg:hidden text-2xl mt-4 font-semibold cursor-pointer" />
						<div className="absolute h-full justify-center items-center w-full">
							<img
								src={TxELogo}
								className="absolute bottom-10 w-2/5 animate-bounce"
								alt="logo"
							/>
						</div>
					</div>
				)}
			</div>

			<div className="hidden lg:flex cursor-pointer w-1/2 lg:w-1/6 h-fit">
				<BtnPrimary
					btnName={"Register"}
					onClick={() => navigate("/register")}
				/>
			</div>
		</div>
	);
};

export default Navbar;
