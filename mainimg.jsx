import "./mainimg.css";

const Main_Photo = () => {
  return (
    <div className="are_of_display">
      <img className="intro_pic" src={require('./intro.jpg')} alt="Deakin University" />
    </div>
  );
};

export default Main_Photo;