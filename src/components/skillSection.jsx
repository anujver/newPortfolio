import html from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import JavaScript from "../assets/JavaScript.png";
import Tailwind from "../assets/Tailwind.png";
import Bootstrap from "../assets/Bootstrap.png";
import ReactJS from "../assets/React-JS.png";
import Redux from "../assets/Redux.png";
import NodeJS from "../assets/Node-JS.png";
import ExpressJS from "../assets/Express-JS.png";
import MongoDB from "../assets/MongoDB.png";

const SkillSection = () => {
  return (
    <>
      <div
        className="skillMainContainer sm:text-left text-center  h-[680px] w-[1100px] mt-[950px] ml-28 sm:ml-44 "
        id="SkillsSet"
      >
        <h1 className="text-white text-3xl ml-5 mt- pt-5 hover:underline underline-offset-8 hover:text-red-600 ">
          Skills
        </h1>
        <p className="text-white ml-5 mt-3 hover:underline hover:text-red-500">
          Technologies which i used in my projects
        </p>
        <hr className="mt-5" />
        <div className="skillpages flex w-[1050px] ">
          {/* Left side SkillSet */}
          <div className="skillLeft w-96 mt-8 -ml-5 h-[540px]">
            <div className="html ml-24 flex w-[350px] h-[106px] ">
              <div
                className="logo h-24 w-24 ml-5 mt-1 bg-contain bg-center"
                style={{
                  backgroundImage: `url(${html})`,
                }}
              ></div>
              <div className="text">
                <h1 className="text-white text-3xl mt-6 ml-16">HTML</h1>
                <p className="text-white text-[13px] mt-1 ml-2">
                  (Hyper Text Markup Language)
                </p>
              </div>
            </div>
            <div className="CSS mt-6 ml-12 flex w-[350px] h-[106px] ">
              <div
                className="logo h-20 w-20 ml-7 mt-1 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${CSS})`,
                }}
              ></div>
              <div className="text">
                <h1 className="text-white text-3xl mt-6 ml-16">CSS</h1>
                <p className="text-white text-[13px] mt-1 ml-6">
                  (Cascading Style Sheet)
                </p>
              </div>
            </div>
            <div className="JavaScript mt-8 flex w-[350px] h-[106px] ">
              <div
                className="logo h-24 w-24 ml-5 mt-1 bg-contain bg-center"
                style={{
                  backgroundImage: `url(${JavaScript})`,
                }}
              ></div>
              <div className="text">
                <h1 className="text-white text-3xl mt-6 ml-8">JavaScript</h1>
                <p className="text-white text-[13px] mt-1 ml-10">
                  (Scripting Language)
                </p>
              </div>
            </div>
            <div className="Tailwind mt-8 ml-12 flex w-[350px] h-[106px] ">
              <div
                className="logo h-24 w-24 ml-5 mt-1 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${Tailwind})`,
                }}
              ></div>
              <div className="text">
                <h1 className="text-white text-3xl mt-6 ml-7">Tailwind</h1>
                <p className="text-white  text-[13px] mt-1 ml-8">
                  (CSS FrameWork)
                </p>
              </div>
            </div>
            <div className="Bootstrap mt-8 ml-[68px] flex w-[350px] h-[106px] ">
              <div
                className="logo h-24 w-24 ml-10 mt-1 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${Bootstrap})`,
                  backgroundSize: "130px",
                }}
              ></div>
              <div className="text">
                <h1 className="text-white text-3xl mt-6 ml-8">Bootstrap</h1>
                <p className="text-white text-[13px] mt-1 ml-12">
                  (CSS FrameWork)
                </p>
              </div>
            </div>
          </div>
          {/*Middle Page */}
          <div className="middlePage w-96 mt-8 h-[40px]">
            <div className="h-64 w-64 ml-12 mt-52 shadow-red-500 shadow-2xl text-center rounded-full">
              <h1 className="bg-transparent text-white text-3xl pt-[95px] ">
                M.E.R.N
              </h1>
              <h1 className="bg-transparent  text-3xl text-red-500 ">Stack</h1>
            </div>
          </div>
          {/* Right Side skillSet */}
          <div className="skillRight w-96 mt-8 -ml-24 bg-transparent h-[540px]">
            <div className="ReactJS  flex w-[350px] h-[106px] ">
              <div className="text">
                <h1 className="text-white text-3xl mt-6 ml-16">React JS</h1>
                <p className="text-white text-[13px] mt-1 ml-16">
                  (JavaScript Library)
                </p>
              </div>
              <div
                className="logo h-24 w-24 ml-5 mt-1 bg-contain bg-center"
                style={{
                  backgroundImage: `url(${ReactJS})`,
                }}
              ></div>
            </div>
            <div className="Redux mt-6 ml-20 flex w-[350px] h-[106px] ">
              <div className="text">
                <h1 className="text-white text-3xl mt-6 ml-16">Redux</h1>
                <p className="text-white text-[13px] mt-1 ml-6">
                  (State Managment Library)
                </p>
              </div>
              <div
                className="logo h-20 w-20 ml-7 mt-1 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${Redux})`,
                  backgroundSize: "180px",
                }}
              ></div>
            </div>
            <div className="NodeJS bg-transparent mt-8 ml-36 flex w-[350px] h-[106px] ">
              <div className="text">
                <h1 className="text-white text-3xl mt-6 ml-8">Node JS</h1>
                <p className="text-white text-[13px] mt-1 -ml-5">
                  (JavaScript Runtime environment)
                </p>
              </div>
              <div
                className="logo bg-transparent h-24 w-24 ml-5 mt-1 bg-contain bg-center"
                style={{
                  backgroundImage: `url(${NodeJS})`,
                }}
              ></div>
            </div>
            <div className="ExpressJS mt-8 ml-20 flex w-[350px] h-[106px] ">
              <div className="text">
                <h1 className="text-white text-3xl mt-6 ml-7">Express JS</h1>
                <p className="text-white  text-[13px] mt-1 ml-8">
                  (Node JS FrameWork)
                </p>
              </div>
              <div
                className="logo h-24 w-24 ml-5 mt-1 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${ExpressJS})`,
                }}
              ></div>
            </div>
            <div className="MongoDB mt-8 ml-10 flex w-[350px] h-[106px] ">
              <div className="text">
                <h1 className="text-white text-3xl mt-6 ml-8">MongoDB</h1>
                <p className="text-white text-[13px] mt-1 ml-5">
                  (Non-relational DataBase)
                </p>
              </div>
              <div
                className="logo h-24 w-24 ml-2 mt-1 bg-contain bg-center"
                style={{
                  backgroundImage: `url(${MongoDB})`,
                  backgroundSize: "100px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="temp h-36"></div>
    </>
  );
};

export default SkillSection;

//HTML-5
//CSS-3
//JavaScript
//ReactJS
//Node JS
//Express JS
//MongoDB
//Redux
//Tailwind CSS
//Bootstrap
