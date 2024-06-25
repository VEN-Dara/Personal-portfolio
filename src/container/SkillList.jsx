import FeatureItem from "../components/FeatureItem";
import icon from "../assets/images/python_icon.png";
import javascriptIcon from "../assets/images/Js_icon.png";
import djangoIcon from "../assets/images/Django_icon.png";
import reactIcon from "../assets/images/react.png";
import javaIcon from "../assets/images/java.png";
import mysqlIcon from "../assets/images/mysql.png";
import postgresqlIcon from "../assets/images/postgresql.png";
import tailwindIcon from "../assets/images/tailwind.png";
import figmaIcon from "../assets/images/figma.png";
import htmlIcon from "../assets/images/html.png";
import deploymentIcon from "../assets/images/deploy.png";
import antdIcon from "../assets/images/antd.png";

const skills = [
  {
    name: "Python",
    logo: icon,
    description:
      "Skilled in Python, specializing in API development, Telegram bots, and spaCy NLP.",
  },
  {
    name: "JavaScript",
    logo: javascriptIcon,
    description:
      "Proficient in JavaScript for frontend development, including React.js and UI libraries.",
  },
  {
    name: "Django and Django rest framework",
    logo: djangoIcon,
    description:
      "Experienced in Django for building robust APIs with Django REST Framework.",
  },
  {
    name: "React Js",
    logo: reactIcon,
    description: "Skilled in React.js for building dynamic user interfaces.",
  },
  {
    name: "Java",
    logo: javaIcon,
    description:
      "Proficient in Java for enterprise-level application development.",
  },
  {
    name: "Ant Design",
    logo: antdIcon,
    description: "Familiar with Ant Design for responsive UI development.",
  },
  {
    name: "Tailwind CSS",
    logo: tailwindIcon,
    description:
      "Knowledgeable in Tailwind CSS for rapid styling of web applications.",
  },
  {
    name: "Figma",
    logo: figmaIcon,
    description:
      "Proficient in Figma for collaborative design, prototyping, and user interface creation.",
  },
  {
    name: "HTML & CSS",
    logo: htmlIcon,
    description: "Proficient in HTML&CSS for building web page and styling.",
  },
  {
    name: "MySQL",
    logo: mysqlIcon,
    description: "Experienced in MySQL for database management and querying.",
  },
  {
    name: "PostgreSQL",
    logo: postgresqlIcon,
    description: "Familiar with PostgreSQL for relational database management.",
  },
  {
    name: "Deployment",
    logo: deploymentIcon,
    description: "Knowledgeable in deploying applications for production use.",
  },
];

const SkillList = () => {
  return (
    <>
      <div className="px-4 py-16 flex flex-col items-center bg-second dark:bg-zinc-800/90">
        <h1 className=" text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          knowledge
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl text-center">
          Discover My Expertise: Embark on a journey through my diverse skill
          set, cultivated over years of studying computer science.
        </p>
        <div className="mt-4 md:mt-8 max-w-[1424px]">
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-4 gap-y-4 lg:grid-cols-2"
          >
            {skills.map((skill) => {
              return (
                <FeatureItem
                  key={skill.name} // Don't forget to add a unique key for each item in the array
                  logo={skill.logo} // Assuming each skill object has a logo property
                  name={skill.name}
                  description={skill.description}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SkillList;
