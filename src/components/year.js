import moment from "moment";

const generateYearOptions = () => {
  const currentYear = moment().year();
  const startYear = 1995; // Change this to your desired start year
  const years = [];

  for (let year = currentYear; year >= startYear; year--) {
    years.push(year);
  }

  return years;
};

export default generateYearOptions;
