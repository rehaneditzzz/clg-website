import { Link } from 'react-router-dom';

const Programme = () => {
  return (
    <div className="btn bg-purple-500 px-6 py-2 rounded-bl-xl rounded-tr-xl">
      <Link to={"/programme"}>Program</Link>
    </div>
  );
};

export default Programme;
