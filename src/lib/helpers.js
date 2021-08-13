import moment from 'moment';

export function capitalizeText(text) {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

export function timeAgoInWords(date) {
	return moment(date, 'DD-MM-YYYY').fromNow();
}
