import { format, parse } from 'date-fns';

export const formatDate = (date: string) => {
    const inputDate = parse(date,'M/d/yyyy', new Date())
    const formattedDate = format(inputDate, 'MMMM d, yyyy')
    return formattedDate
}