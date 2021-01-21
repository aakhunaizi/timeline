import {
  ListTitle,
  ListYear,
  ListDescription,
  YearWrapper,
  Down,
} from "../styles";
const Year = (props) => {
  const year = props.year;
  return (
    <YearWrapper>
      <ListTitle>{year.title}</ListTitle>
      <ListYear>{year.year}</ListYear>
      <ListDescription className="year-description">
        {year.description}
      </ListDescription>
      <img src={year.image} alt={year.name} />
      <Down>👇</Down>
    </YearWrapper>
  );
};

export default Year;
