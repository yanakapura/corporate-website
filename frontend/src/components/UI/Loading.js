import spinner from "../../lib/Spinner.svg";
import './Loading.scss'


const Loading = () => {
  return (
     <div className="loading">
      <img src={spinner}/>
      <h2>Подождите...</h2>
     </div>
  );
};

export default Loading;

export const LoadingSpinner = () => {
    return (
        <div className="loading">
         <img src={spinner}/>
        </div>
     );
}
