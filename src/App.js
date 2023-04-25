import "./App.css";
import Profilecard from "./component/profile.card/Profilecard";
import Resume from "./component/resume/Resume";
import {React,  useState } from "react";

function App() {
  const users = [
    {
      name: "Raju Shrivastava",
      designation: "SOFTWARE ENGINEER",
      jobDescription:
        "Writes, tests, and maintains software code, collaborating with cross-functional teams.",
      image: "https://picsum.photos/id/64/200/300",
    },
    {
      name: "Aakanksha Gaikwad",
      designation: "FRONT-END ENGINEER",
      jobDescription:
        "Develops user-facing features using HTML, CSS, and JavaScript.",
      image: "https://picsum.photos/id/65/200/300",
    },
    {
      name: "John leo",
      designation: "SENIOR SOFTWARE ENGINEER",
      jobDescription:
        "Leads development projects, designs software architecture, and mentors junior developers.",
      image: "https://picsum.photos/id/61/200/300",
    },
  ];

  const [selectedUser, setSelectedUser] = useState(null);
  const [showResume, setShowResume] = useState(false);

  const handleSeeMoreClick = (user) => {
    setSelectedUser(user);
    setShowResume(true);
  };

  const handleBackButtonClick = () => {
    setShowResume(false);
  };

  if (showResume) {
    return (
      <Resume
        name={selectedUser.name}
        designation={selectedUser.designation}
        jobdesc={selectedUser.jobDescription}
        onBackButtonClick={handleBackButtonClick}

      />
    );
  }

  return (
    <div className="App">
      {users.map((user, index) => (
        <Profilecard
          key={index}
          image={user.image}
          designation={user.designation}
          name={user.name}
          jobdesc={user.jobDescription}
          onSeeMoreClick={() => handleSeeMoreClick(user)}
        />
      ))}
    </div>
  );
}

export default App;
