import "./App.css";
import FolderFileNode from "./components/FolderFileNode";

export type Node = {
  name: string;
  folders?: Node[];
};
const nodes: Node[] = [
  {
    name: "Movies",
    folders: [
      {
        name: "Romantic",
        folders: [
          {
            name: "70's",
            folders: [{ name: "Back to the future" }, { name: "God father" }],
          },
          {
            name: "80's",
            folders: [{ name: "Notting Hill" }, { name: "Titanic" }],
          },
          {
            name: "90's",
            folders: [{ name: "Forrest Gump" }, { name: "Harry Potter" }],
          },
        ],
      },
      { name: "Action" },
      { name: "Comedy" },
    ],
  },
  {
    name: "Music",
    folders: [{ name: "Hip-Hop" }, { name: "Jazz" }],
  },
  {
    name: "Photos",
    folders: [{ name: "Raw" }, { name: "Jpeg" }, { name: "Png" }],
  },
];
function App() {
  return (
    <div className="pt-5 pl-10">
      {nodes.map((node) => (
        <FolderFileNode key={node.name} node={node} />
      ))}
    </div>
  );
}

export default App;
