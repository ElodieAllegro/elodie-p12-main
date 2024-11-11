import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../../services/Api";
import Activity from "../../components/activity/Activity";
import Calories from "../../components/calories/Calories";
import Performances from "../../components/performances/Performances";
import AverageSession from "../../components/average-session/AverageSession";
import Scores from "../../components/scores/Scores";
import './dashbord.css';

const Dashboard = () => {
    const params = useParams();
    const [user, setUser] = useState();
    const [averageSession, setAverageSession] = useState();
    const [activity, setActivity] = useState();
    const [performances, setPerformances] = useState();
    const [scores, setScores] = useState();

    useEffect(() => {
        (async () => {
            const api = new Api();

            const userData = await api.getUserData(parseInt(params.userId));
            console.log('userData Data:', userData);
            setUser(userData.data);

            const averageSessionData = await api.getUserAverageSession(parseInt(params.userId));
            console.log(' averageSessionData Data:', averageSessionData);
            setAverageSession(averageSessionData.data);

            const activityData = await api.getUserActivity(parseInt(params.userId));
            console.log(' activityData Data:', activityData);
            setActivity(activityData.data);

            const performancesData = await api.getUserPerformance(parseInt(params.userId));
            console.log('Performances Data:', performancesData);
            setPerformances(performancesData.data);

        })();
    }, [params.userId]);

    if (!user) {
        return null;
    }

    return (
        <div>
            <h1>Bonjour {user.userInfos.firstName}</h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            
            <div style={{ display: 'grid' }}>
                <div className="container-top">
                    <div className="activity-container">
                    <h2>Activité quotidienne</h2> 
                        <Activity data={activity} />
                    </div>
                    <div className="calories-container">
                        <h2></h2>
                        <Calories />
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
        </div>
    );
};

export default Dashboard;
