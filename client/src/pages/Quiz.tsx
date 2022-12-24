import QuizContainer from "../components/QuizContainer";
import { useLocation } from "react-router-dom";

type Props = {
  playerName: string;
};

const Quiz = (props: Props) => {
  let location = useLocation();
  const playerName = location.state?.playerName ?? props.playerName;
  return (
    <div>
      <QuizContainer playerName={playerName} />
    </div>
  );
};

export default Quiz;
