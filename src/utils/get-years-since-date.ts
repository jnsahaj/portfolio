export default function getYearsSinceDate(isoDate: string) {
    const pastDate = new Date(isoDate);
    const currentDate = new Date();

    const yearsDiff = currentDate.getFullYear() - pastDate.getFullYear();

    const pastMonthDay = new Date(currentDate.getFullYear(), pastDate.getMonth(), pastDate.getDate());

    return pastMonthDay > currentDate ? yearsDiff - 1 : yearsDiff;
}
