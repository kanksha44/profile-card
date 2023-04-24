import "./App.css";
import Profilecard from "./component/profile.card/Profilecard";

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

  return (
    <div className="App">
      {users.map((user, index) => (
        <Profilecard
          key={index}
          image={user.image}
          designation={user.designation}
          name={user.name}
          jobdesc={user.jobDescription}
          onSeeMoreClick={() => alert(user.name)}
        />
      ))}
    </div>
  );
}

export default App;
