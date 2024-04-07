import {
	MultiChatSocket,
	MultiChatWindow,
	useMultiChatLogic,
} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
	const chatProps = useMultiChatLogic(
		'ae290b4f-b023-4139-b02c-29f41badc792',
		props.user.username,
		props.user.secret
	);
	return (
		<div style={{ height: '100vh' }}>
			<MultiChatSocket {...chatProps} />
			<MultiChatWindow {...chatProps} style={{ height: '100%' }} /> 
		</div>
	)
}

export default ChatsPage
