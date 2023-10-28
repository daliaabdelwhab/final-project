import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  let tabContent;
  switch (activeTab) {
    case 0:
      return (tabContent = (
        <div>
          {" "}
          <h1 className="heading-f"> "Where To ?"</h1>{" "}
        </div>
      ));
      break;
    case 1:
      return (tabContent = "when");
      break;
    case 2:
      return (tabContent = "why");
      break;
    default:
      tabContent = null;
  }

  return (
    <div>
      <div className="tabs">
        <div
          className={`tab ${activeTab === 0 ? "active" : ""}`}
          onClick={() => handleTabClick(0)}
        >
          Tab 1
        </div>
        <div
          className={`tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          Tab 2
        </div>
        <div
          className={`tab ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          Tab 3
        </div>
      </div>
      <div className="tab-content">
        <div>{tabContent}</div>
      </div>
    </div>
  );
};

export default Tabs;
