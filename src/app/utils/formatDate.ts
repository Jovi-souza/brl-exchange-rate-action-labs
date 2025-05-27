import { format } from 'date-fns';

export function formatDate(date: string | Date, dateHour: boolean) {
  if(dateHour) {
    return format(new Date(date), "dd/MM/yyyy - HH'h'mm");
  } else {
    return format(new Date(date), "dd/MM/yyyy");
  }
}
