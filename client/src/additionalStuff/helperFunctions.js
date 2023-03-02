import axios from "axios";
import { setAlert } from "../redux/slices/sessionAlert";
import { timerOnOff } from "../redux/slices/timerState";
import { addSession } from "../redux/slices/userSlice";
import sound from "./sounds/bell.wav";
const bell = new Audio(sound);
const progressColor = (percentOfCompletion) => {
  switch (true) {
    case percentOfCompletion < 30:
      return "rgba(242, 74, 114, 0.5)";
    case percentOfCompletion >= 30 && percentOfCompletion < 60:
      return "rgba(253, 93, 93, 0.55)";
    case percentOfCompletion >= 60 && percentOfCompletion < 99:
      return "rgba(132, 121, 225, 0.6)";
    case percentOfCompletion === 100:
      return "rgba(111, 237, 214, 0.65)";
    default:
      break;
  }
};

const greetingsMessage = () => {
  const hour = new Date().getHours();
  switch (true) {
    case hour >= 12 && hour < 17:
      return "Good afternoon! 🌞 Glad to see you!";
    case hour >= 17 && hour < 23:
      return "Good evening! 🌅 Glad to see you!";
    case hour >= 23 || (hour >= 0 && hour < 5):
      return "Night owl time! 🦉 Have a productive session!";
    case hour >= 5 && hour < 7:
      return "Early bird time! 🐦 Use your advantage over sleepyheads)";
    case hour >= 7 && hour < 12:
      return "Good morning! ☕ Glad to see you!";
    default:
      break;
  }
};

const thatHappensInTheEndOfSession = async (
  sessionLength,
  loggedUserProjects,
  projectId,
  dispatch,
  loggedUser
) => {
  const projectIndex = loggedUserProjects.findIndex(
    (project) => project._id === projectId
  );
  try {
    const response = await axios.post("user/addSession", {
      loggedUser,
      projectId,
      sessionLength,
    });

    if (response && response.status === 200) {
      await bell.play();
      dispatch(timerOnOff(false));
      dispatch(
        addSession({
          projectIndex,
          sessionIndex: response.data.currentSessionIndex,
          newValue: response.data.value,
        })
      );
      dispatch(setAlert(true));
    }
  } catch (err) {
    dispatch(timerOnOff(false));
    err.response
      ? window.alert(err.response.data)
      : window.alert("Check your internet connection");
  }
};

export { progressColor, greetingsMessage, thatHappensInTheEndOfSession };
