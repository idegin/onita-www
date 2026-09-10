export const agentAvatars = {
  "corporate-woman": "/ai-avatars/corporate-woman.jpg",
  "afro-glasses-woman": "/ai-avatars/afro-glasses-woman.jpg",
  "senior-man": "/ai-avatars/senior-man.jpg",
  "gele-woman": "/ai-avatars/gele-woman.jpg",
  "sunglasses-man": "/ai-avatars/sunglasses-man.jpg",
  "locs-man": "/ai-avatars/locs-man.jpg",
  "braids-woman": "/ai-avatars/braids-woman.jpg",
  "cap-man": "/ai-avatars/cap-man.jpg",
  "bearded-man": "/ai-avatars/bearded-man.jpg",
  "hijab-woman": "/ai-avatars/hijab-woman.jpg",
  "turtleneck-man": "/ai-avatars/turtleneck-man.jpg",
  "pixie-woman": "/ai-avatars/pixie-woman.jpg",
} as const;

export type AgentAvatarKey = keyof typeof agentAvatars;

export const agentAvatarKeys = Object.keys(agentAvatars) as AgentAvatarKey[];

export function getAgentAvatar(key: AgentAvatarKey): string {
  return agentAvatars[key];
}
