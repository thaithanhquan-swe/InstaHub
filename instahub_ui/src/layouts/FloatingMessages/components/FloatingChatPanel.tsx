import type {
  MessageConversation,
  OutgoingChatMessage,
} from '@/types/message.types';

import FloatingChatHeader from './FloatingChatHeader';
import FloatingMessageComposer from './FloatingMessageComposer';
import FloatingMessageList from './FloatingMessageList';

interface FloatingChatPanelProps {
  conversation: MessageConversation;
  onBack: () => void;
  onClose: () => void;
  onExpand: () => void;
  onSendMessage: (message: OutgoingChatMessage) => void;
  onReactMessage: (messageId: number, emoji: string) => void;
}

function FloatingChatPanel({
  conversation,
  onBack,
  onClose,
  onExpand,
  onSendMessage,
  onReactMessage,
}: FloatingChatPanelProps) {
  return (
    <>
      <FloatingChatHeader
        conversation={conversation}
        onBack={onBack}
        onClose={onClose}
        onExpand={onExpand}
      />

      <FloatingMessageList
        conversation={conversation}
        onReactMessage={onReactMessage}
      />

      <FloatingMessageComposer onSendMessage={onSendMessage} />
    </>
  );
}

export default FloatingChatPanel;
