import iconCalories from "../../assets/calories-icon.svg";
import iconCarbs from "../../assets/carbs-icon.svg";
import iconFat from "../../assets/fat-icon.svg";
import iconProtein from "../../assets/protein-icon.svg";
import './calories.css';

const Calories = ({ data }) => {
    if (!data) return null;

    return (
        <div className="calories">
            <div className="calorie-item">
                <img src={iconCalories} alt="Calories icon" />
                <div className="text">
                <p>{(data.calorieCount / 1000).toFixed(3)} kCal</p>
                <p>Calories</p>
                </div>
                
                
            </div>
            <div className="calorie-item">
                <img src={iconProtein} alt="Protein icon" />
                <div className="text">
                <p>{data.proteinCount} g</p>
                <p>Proteines</p>
                </div>
                
            </div>
            <div className="calorie-item">
                <img src={iconCarbs} alt="Carbohydrates icon" />
                <div className="text">
                <p>{data.carbohydrateCount}g</p>
                <p>Lipides</p>
                </div>
              
            </div>
            <div className="calorie-item">
                <img src={iconFat} alt="Fat icon" />
                <div className="text">
                <p>{data.lipidCount}g</p>
                <p>Glucides</p>
                </div>
                
            </div>
           
            
            
        </div>
    );
};

export default Calories;
