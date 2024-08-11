import getYearsSinceDate from "../utils/get-years-since-date";

export default function Age() {
    const BIRTH_DATE_ISO = "2001-07-03T00:00:00Z";
    return <span>{getYearsSinceDate(BIRTH_DATE_ISO)}y old</span>;
}
