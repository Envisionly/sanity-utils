export type Social = {
	label: string;
	value: string;
};

// List of available social media options, email, and phone
export const socialOptions: Social[] = [
	{ label: "Bluesky", value: "bluesky" },
	{ label: "Discord", value: "discord" },
	{ label: "Email", value: "email" },
	{ label: "Facebook", value: "facebook" },
	{ label: "GitHub", value: "github" },
	{ label: "Instagram", value: "instagram" },
	{ label: "LinkedIn", value: "linkedin" },
	{ label: "Mastodon", value: "mastodon" },
	{ label: "Phone", value: "phone" },
	{ label: "Pinterest", value: "pinterest" },
	{ label: "Reddit", value: "reddit" },
	{ label: "Telegram", value: "telegram" },
	{ label: "Threads", value: "threads" },
	{ label: "TikTok", value: "tiktok" },
	{ label: "Twitter/X", value: "x" },
	{ label: "WhatsApp", value: "whatsapp" },
	{ label: "YouTube", value: "youtube" },
];

export function getSocialLabelByValue(value: string): string | undefined {
	const social = socialOptions.find((option) => option.value === value);
	return social ? social.label : undefined;
}
