import sound from "./sounds/bell.wav"
const bell = new Audio(sound)
const progressColor = (percentOfCompletion) => {
    switch (true) {
      case percentOfCompletion < 30:
        return "#F24A72";
      case percentOfCompletion >= 30 && percentOfCompletion < 60:
        return "#FD5D5D";
      case percentOfCompletion >= 60 && percentOfCompletion < 99:
        return "#8479E1";
      case percentOfCompletion === 100:
        return "#6FEDD6";
      default:
        break;
    }
  };

  const greetingsMessage = ()=>{
    const hour = new Date().getHours();
    switch (true) {
      case hour >= 12 && hour < 17:
        return("Good afternoon! 🌞 Glad to see you!");
      case hour >= 17 && hour < 23:
        return("Good evening! 🌅 Glad to see you!");
      case hour >= 23 || (hour >= 0 && hour < 5):
        return("Night owl time! 🦉 Have a productive session!");
      case hour >= 5 && hour < 7:
        return(
          "Early bird time! 🐦 Use your advantage over sleepyheads)"
        );
      case hour >= 7 && hour < 12:
        return("Good morning! ☕ Glad to see you!");
      default:
        break;
    }
  }

  const thatHappensInTheEndOfSession = (sessions, sessionLength, loggedUserProjects, projectId, dispatch, timerOnOff, updateProjects) => {
    bell.play()
  
    const updatedSessions = sessions.map((session) =>
      session.seconds === sessionLength
        ? { ...session, value: session.value + 1 }
        : session
    );

    const updatedProjects = loggedUserProjects.map((project) =>
      project.id === projectId
        ? {
            ...project,
            totalWorkTime: project.totalWorkTime + sessionLength,
            sessions: updatedSessions,
          }
        : project
    );
    

    // Here's timout to give the progress bar chance to reach 100% before state updates 
    // and timer component dissapears

    setTimeout(() => {
      dispatch(updateProjects(updatedProjects));
    dispatch(timerOnOff(false));

      window.alert(
        "The session is done! Stop working. Make some notes for upcoming sessions if necessary. Take a brake."
      );
    }, 1000);
    
  };



  export {progressColor, greetingsMessage, thatHappensInTheEndOfSession};