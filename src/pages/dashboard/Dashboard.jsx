import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../../services/Api";
import Activity from "../../components/activity/Activity";
import Calories from "../../components/calories/Calories";
import Performances from "../../components/performances/Performances";
import AverageSession from "../../components/average-session/AverageSession";
import Scores from "../../components/scores/Scores";
import "./dashbord.css";

const Dashboard = () => {
  const params = useParams();
  const [user, setUser] = useState();
  const [averageSession, setAverageSession] = useState();
  const [activity, setActivity] = useState();
  const [performances, setPerformances] = useState();
  const [error, setError] = useState(null)
  // const [scores, setScores] = useState();

  useEffect(() => {
    (async () => {
      const api = new Api();

try {
      const userData = await api.getUserData(parseInt(params.userId));
      if (userData.error) throw new Error(userData.error);
      setUser(userData.data);

      const averageSessionData = await api.getUserAverageSession(
        parseInt(params.userId)
      );
      console.log(" averageSessionData Data:", averageSessionData);
      setAverageSession(averageSessionData.data);

      const activityData = await api.getUserActivity(parseInt(params.userId));
      console.log(" activityData Data:", activityData);
      setActivity(activityData.data);

      const performancesData = await api.getUserPerformance(
        parseInt(params.userId)
      );
      console.log("Performances Data:", performancesData);
      setPerformances(performancesData.data);
    } catch (err) {
      console.error("Erreur lors de la récupération des données :", err.message);
      setError("Une erreur est survenue lors du chargement des données. Veuillez réessayer plus tard.");
    }
    })();
  }, [params.userId]);

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!user) {
    return <p>Utilisateur non trouvée.</p>;
  }

  return (
    <div className="container">
      <h1>
        <span className="bonjour">Bonjour </span>
        <span className="prenom">{user.userInfos.firstName}</span>
      </h1>

      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

      <div className="container">
        <div className="container-groupe">
          <div className="container-top">
            <div className="activity-container">
              <div className="activity-title">
                <h2>Activité quotidienne</h2>
                <div className="legend">
                  <span className="legend-item">
                    <span
                      className="legend-color"
                      style={{ backgroundColor: "#282D30" }}
                    ></span>
                    Poids (kg)
                  </span>
                  <span className="legend-item">
                    <span
                      className="legend-color"
                      style={{ backgroundColor: "#E60000" }}
                    ></span>
                    Calories brûlées (kCal)
                  </span>
                </div>
              </div>
              <Activity data={activity} />
            </div>
          </div>
          <div className="container-bottom">
            <div className="average-session-container">
              <h2>Durée moyenne des sessions</h2>
              <AverageSession data={averageSession} />
            </div>
            <div className="performances-container">
              <Performances data={performances} />
            </div>
            <div className="score-container">
              <h2>Scores</h2>
              <Scores data={user.todayScore} />
            </div>
          </div>
        </div>

        <div className="container-droit">
          <Calories data={user.keyData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
