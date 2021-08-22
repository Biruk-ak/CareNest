import { format, formatDistanceToNow, parseISO } from 'date-fns';

export function formatCareDate(iso: string, pattern = 'MMM d, yyyy p') {
  return format(parseISO(iso), pattern);
}

export function relativeCareDate(iso: string) {
  return formatDistanceToNow(parseISO(iso), { addSuffix: true });
}
