
export type Gender = 'chico' | 'chica';
export type Preference = 'chicos' | 'chicas' | 'ambos';
export type NewsType = 'imagen' | 'icono';
// Added InteractionType definition used for daily dynamics (TOP, MEH, NOP)
export type InteractionType = 'TOP' | 'MEH' | 'NOP';

export interface UserProfile {
  userId: string;
  nombre: string;
  edad: number;
  universidad: string;
  carrera: string;
  palabraClave1: string;
  palabraClave2: string;
  genero: Gender;
  busca: Preference;
  fotos: string[];
  topsRecibidos: number;
  diasParticipados: number;
  monedas: number;
  mehsAceptados: number;
  isProfileComplete: boolean;
  engagementScore: number;
  lastLogin: string;
  totalVecesMostrado: number;
}

export interface DailyInteraction {
  interactionId: string;
  sourceUserId: string;
  targetUserId: string;
  interactionType: InteractionType;
  timestamp: string;
}

export interface NewsItem {
  newsId: string;
  type: NewsType;
  imageUrl?: string;
  iconName?: string;
  title: string;
  introduction: string;
  fullContent: string;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
}

export interface ChatSession {
  chatId: string;
  participants: string[];
  lastInteractionType: InteractionType;
  messages: Message[];
  status: 'pending' | 'active';
}
