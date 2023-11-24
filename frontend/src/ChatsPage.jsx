import {
	MultiChatSocket,
	MultiChatWindow,
	useMultiChatLogic,
} from "react-chat-engine-advanced";
const ChatsPage = (props) => {
	const chatProps = useMultiChatLogic(
		"bcf85f6d-af44-4b99-a573-d49b95d6c6af",
		props.user.username,
		props.user.secret
	);
	return (
		<div style={{ height: "100vh" }}>
			<MultiChatSocket {...chatProps} />
			<MultiChatWindow {...chatProps} style={{ height: "100%" }} />
		</div>
	);
};
export default ChatsPage;
