import MessagesClient from './components/MessagesClient';

interface MessagesPageProps {
  searchParams: Promise<{
    conversation?: string | string[];
  }>;
}

async function MessagesPage({ searchParams }: MessagesPageProps) {
  const { conversation } = await searchParams;
  const conversationParam = Array.isArray(conversation)
    ? conversation[0]
    : conversation;
  const parsedConversationId = Number(conversationParam);
  const initialConversationId = Number.isInteger(parsedConversationId)
    ? parsedConversationId
    : null;

  return <MessagesClient initialConversationId={initialConversationId} />;
}

export default MessagesPage;
