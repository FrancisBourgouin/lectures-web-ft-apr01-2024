// Sad component

export default function Header(props) {
  const { navigateRandomPost } = props;
  return (
    <header className="Header">
      <h1>Super Electronics Forum</h1>
      <button onClick={navigateRandomPost}>View another post!</button>
    </header>
  );
}
