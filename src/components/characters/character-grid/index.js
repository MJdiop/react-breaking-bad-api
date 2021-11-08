import CharacterItem from '../character-item';
import loader from './../../../img/spinner.gif';

const CharacterGrid = ({ isLoading, state }) => {
  return isLoading ? (
    <img style={imgStyle} src={loader} alt="loader" />
  ) : (
    <div className="cards">
      {state.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </div>
  );
};

const imgStyle = {
  width: '200px',
  margin: 'auto',
  display: 'block',
};

export default CharacterGrid;
