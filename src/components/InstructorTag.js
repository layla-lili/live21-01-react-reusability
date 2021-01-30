import {Emoji, GoToGithub, Name, TagWrapper} from "./styles";


const InstructorTag  = ({ github, name, emoji }) => {
  // Create the InstructorTag component here


return (
  <TagWrapper onClick={()=> window.open(`https://github.com/${github}`)}>
   <Emoji>{emoji}</Emoji>
   <Name>{name}</Name>
   <GoToGithub>Go to Github</GoToGithub>

  </TagWrapper>
);
};

//   <div
//     className="TagWrapper"
//     onClick={() => window.open(`https://github.com/DarthHamza`)}
//   >
//     <span className="Emoji">🌚</span>
//     <span className="Name">Hamza</span>
//     <span className="GoToGithub">Go to GitHub</span>
//   </div>;
//   return <></>;
// };

export default InstructorTag;
