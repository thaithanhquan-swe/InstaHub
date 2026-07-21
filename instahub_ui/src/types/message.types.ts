export type ChatMessageSender = 'me' | 'them';

export type ChatMessageType = 'text' | 'image';

export interface ChatMessage {
  id: number;
  sender: ChatMessageSender;
  type?: ChatMessageType;
  content?: string;
  mediaUrl?: string;
  createdAt: string;
  dateLabel?: string;
  reaction?: string;
  seen?: boolean;
}

export interface OutgoingChatMessage {
  type: ChatMessageType;
  content?: string;
  mediaUrl?: string;
}

export interface MessageConversation {
  id: number;
  name: string;
  username: string;
  avatar: string;
  status?: string;
  lastMessage?: string;
  time?: string;
  online?: boolean;
  hasStory?: boolean;
  messages: ChatMessage[];
}
