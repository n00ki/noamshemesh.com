import { format, formatDistanceToNow } from 'date-fns';

export function capitalizeText(text) {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

export function timeAgoInWords(date) {
	return formatDistanceToNow(date, { addSuffix: true });
}
