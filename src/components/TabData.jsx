const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>MongoDB</li>
  <li>PostgreSQL</li>
  <li>Express</li>
  <li>Node.js</li>
  <li>React</li>
  <li>JavaScript</li>
  <li>Python</li>
  <li>Tailwind CSS</li>
  <li>Bootstrap</li>
        
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
            <h4 className="font-bold">BS Computer Science</h4>
            <p>GC University Faisalabad</p>
            <p>2019-23</p>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        {/* <li>AI Developer (PIAIC)</li> */}
        <li>Full-Stack Web Development (App Brewery)</li>
        <li>Web Development (Technolangs)</li>
        <li>MTA: Intro to Javascript (Microsoft)</li>
        <li>SEARCH ENGINE OPTIMIZATION (DigiSkills)</li>

      </ul>
    ),
  },
];


export default TAB_DATA;