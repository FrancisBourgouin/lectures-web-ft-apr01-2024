export default function CityList(props) {
  const { cityHistory, onClick } = props;

  const parsedCities = cityHistory.map((city) => (
    <li key={city}>
      <button onClick={() => onClick(city)}>{city}</button>
    </li>
  ));
  return <ul className="CityList">{parsedCities}</ul>;
}
