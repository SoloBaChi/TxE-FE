import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SpeakerCard from "./SpeakerCard";
import image from "../../../assets/speakerImg.png";
import image2 from "../../../assets/speakerImg2.png";
import image3 from "../../../assets/speakerImg3.png";
import "../../Landing.css";
import "./Speakers.css";

const Speakers = () => {
	const initialSpeakers = [
		{ name: "Speaker 1", position: "CEO", imageURL: image },
		{ name: "Speaker 2", position: "CTO", imageURL: image2 },
		{ name: "Speaker 3", position: "COO", imageURL: image },
		{ name: "Speaker 4", position: "Designer", imageURL: image2 },
		{ name: "Speaker 5", position: "Engineer", imageURL: image3 },
	];

	const [displaySpeakers, setDisplaySpeakers] = useState(initialSpeakers);

	const handleSwap = (direction) => {
		const newDisplaySpeakers = [...displaySpeakers];
		if (direction === "left") {
			const lastSpeaker = newDisplaySpeakers.pop();
			newDisplaySpeakers.unshift(lastSpeaker);
		} else if (direction === "right") {
			const firstSpeaker = newDisplaySpeakers.shift();
			newDisplaySpeakers.push(firstSpeaker);
		}
		setDisplaySpeakers(newDisplaySpeakers);
	};

	return (
		<div
			id="speakers"
			className="px-8 mb-20 relative flex flex-col items-center bg-black justify-center">
			<button
				className="p-3 lg:mx-8 hover:bg-bgColor border-2 border-white rounded-full text-white absolute top-0 left-0 speaker-arrows left"
				onClick={() => handleSwap("left")}>
				<IoIosArrowBack size={24} />
			</button>
			<div className="flex mt-20 center-card items-center justify-center -space-x-14">
				{displaySpeakers.map((speaker, index) => (
					<SpeakerCard
						key={speaker.name}
						speaker={speaker}
						position={index}
						currentIndex={2}
					/>
				))}
			</div>
			<button
				className="p-3 lg:mx-8 hover:bg-bgColor border-2 border-white rounded-full text-white absolute top-0 right-0 speaker-arrows right"
				onClick={() => handleSwap("right")}>
				<IoIosArrowForward size={24} />
			</button>
		</div>
	);
};

export default Speakers;
