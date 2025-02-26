// App.js
import { TabForm } from "./components/TabForm";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h2>Tabs!</h2>
      <TabForm />
    </div>
  );
}
// TabForm.js
import { Profile } from "./Profile";
import { Interests } from "./Interests";
import { Settings } from "./Settings";
import { useState } from "react";

export const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "Chaitanya",
    age: "25",
    email: "chaitanya@gmail.com",
    interests: ["carroms", "cricket"],
    theme: "dark",
  });
  const tabs = [
    { name: "Profile", component: Profile },
    { name: "Interests", component: Interests },
    { name: "Settings", component: Settings },
  ];
  const ActiveTabComponent = tabs[activeTab].component;
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const handleNextClick = () => {
    setActiveTab((prevTab) => prevTab + 1);
  };
  const handlePrevClick = () => {
    setActiveTab((prevTab) => prevTab - 1);
  };
  const handleNextClickk = () => {
    setActiveTab((prevTab) => prevTab + 1);
  };
  return (
    <div>
      <div className="tab-container">
        {tabs.map((t, index) => (
          <div
            key={index}
            className={activeTab === index ? "activeStyle" : "tabs"}
            onClick={() => handleTabClick(index)}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} />
      </div>
      {activeTab !== 0 && <button onClick={handlePrevClick}>Prev</button>}
      {activeTab !== tabs.length - 1 && (
        <button onClick={handleNextClick}>Next</button>
      )}
      {activeTab === tabs.length - 1 && <button>Submit</button>}
    </div>
  );
};

// Profile.js
import { useState } from "react";
export const Profile = ({ data, setData }) => {
  const { name, email, age } = data;
  const handleDataChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };
  return (
    <div>
      <div>
        <label>Name : </label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleDataChange(e, "name")}
        />
      </div>
      <div>
        <label>Age : </label>
        <input
          type="number"
          value={age}
          onChange={(e) => handleDataChange(e, "age")}
        />
      </div>
      <div>
        <label>Email : </label>
        <input
          type="email"
          value={email}
          onChange={(e) => handleDataChange(e, "email")}
        />
      </div>
    </div>
  );
};
//interests.js
export const Interests = ({ data, setData }) => {
  const { interests } = data;
  const handleDataChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((item) => item !== e.target.name),
    }));
    // console.log(interests);
  };
  return (
    <div>
      <div>
        <input
          type="checkbox"
          name="carroms"
          checked={interests.includes("carroms")}
          onChange={handleDataChange}
        />
        <label htmlFor="">Carroms</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="cricket"
          checked={interests.includes("cricket")}
          onChange={handleDataChange}
        />
        <label htmlFor="">Cricket</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="javascript"
          checked={interests.includes("javascript")}
          onChange={handleDataChange}
        />
        <label htmlFor="">JavaScript</label>
      </div>
    </div>
  );
};
//settings.js
export const Settings = ({ data, setData }) => {
  const { theme } = data;
  const handleDataChange = (e) => {
    setData((prevState) => ({ ...prevState, theme: e.target.name }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="dark"
            checked={theme === "dark"}
            onChange={handleDataChange}
          />
          Dark
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="light"
            checked={theme === "light"}
            onChange={handleDataChange}
          />
          Light
        </label>
      </div>
    </div>
  );
};
/*
.App {
  font-family: sans-serif;
  text-align: center;
}

.tab-container {
  display: flex;
}

.tabs {
  border: 1px solid black;
  padding: 5px;
  cursor: pointer;
}

.tab-body {
  display: flex;
  border: 1px solid black;
  height: 200px;
  padding: 10px;
}
.activeStyle {
  border: 1px solid black;
  padding: 5px;
  cursor: pointer;
  background-color: aqua;
}
  */
