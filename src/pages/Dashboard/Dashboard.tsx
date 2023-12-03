import { useSelector } from "react-redux";
import {
  logOut,
  selectCurrentToken,
  selectCurrentUser,
} from "../../features/auth/authSlice";
import axios from "axios";
import "./Dashboard.scss";

const Dashboard = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  const welcome = user ? `Hello, ${user}!` : "Hello!";

  const testFunction = async (e: any) => {
    try {
      const testResponse = await axios.get("http://localhost:3000/auth/test", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(testResponse.data);
    } catch {
      console.log("error");
    }
  };

  return (
    <div className="s2t-content">
      <div className="s2t-side-menu">
        <p>{welcome}</p>
        <button onClick={logOut}>Log Out</button>
      </div>
      <div className="s2t-tablet">
        <h1>Dashboard</h1>
        <button onClick={testFunction}>Test Authorization Header</button>
      </div>
    </div>
  );
};

export default Dashboard;
