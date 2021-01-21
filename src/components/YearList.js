import { ListWrapper } from "../styles";
import years from "../years";
import Year from "./Year";

const YearList = () => {
  const yearList = years.map((year) => {
    return <Year key={year.id} year={year} />;
  });
  return <ListWrapper>{yearList}</ListWrapper>;
};

export default YearList;
