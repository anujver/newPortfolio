import netflix from "../assets/photo3.jpg";
import youtube from "../assets/photo2.jpg";

const Projects = () => {
  return (
    <>
      <div
        className="mainContainer mt-56 ml-20 sm:text-left text-center sm:ml-36 h-[280px] rounded-lg w-[1100px] mr-16 mb-20"
        id="Projects"
      >
        <h1 className="text-white text-3xl ml-10 mt-12 pt-5 hover:underline underline-offset-8 hover:text-red-600 ">
          Projects
        </h1>

        <p className="text-white ml-9 mt-3 hover:underline hover:text-red-500">
          Check out some of my work right here
        </p>
        <hr className="mt-5" />
        {/* FIRST LIST */}
        <div className="projects flex mt-12 ml-2 h-[800px]">
          {/* Project */}
          <div className="projectOne shadow-lg shadow-red-500  overflow-x-auto no-scrollbar  h-[780px] w-96 rounded-lg ml-7">
            <div className="pera w-[350px] ml-4 ">
              <p className="text-white ">My personal projects</p>
              <hr className="mt-3 " />
            </div>
            <div className="netflix h-96 mt-5 ">
              <div
                className="img h-52 w-[348px] ml-4 mt-4 rounded-lg bg-cover"
                style={{
                  border: "1px solid white",
                  backgroundImage: `url(${netflix})`,
                }}
              ></div>
              <h1 className="text-2xl ml-28 mt-4 text-white hover:text-red-500 hover:underline">
                Netflix clone
              </h1>
              <h1 className=" ml-[140px] mt-1 text-white hover:text-red-500 hover:underline">
                <a href="https://youtube-clone-zolk.vercel.app/">Check out</a>
              </h1>
              <h1 className=" mt-3 text-center text-white hover:text-red-500 hover:underline">
                Technolgies used : HTML , CSS , React JS ,<br /> Google Firebase
                database
              </h1>
            </div>
            <div className="Youtube rounded-lg -mt-5 h-96 ">
              <div
                className="img h-52  w-[348px] ml-4  rounded-lg bg-cover"
                style={{
                  border: "1px solid white",
                  backgroundImage: `url(${youtube})`,
                }}
              ></div>
              <h1 className="text-2xl ml-28 mt-4 text-white hover:text-red-500 hover:underline">
                Youtube clone
              </h1>
              <h1 className=" ml-[140px] mt-1 text-white hover:text-red-500 hover:underline">
                <a href="https://youtube-clone-eta-swart.vercel.app/">
                  {" "}
                  Check out
                </a>
              </h1>
              <h1 className=" mt-3 text-center text-white hover:text-red-500 hover:underline">
                Technolgies used : HTML , CSS , React JS
              </h1>
            </div>
          </div>
          {/* SECOND LIST */}
          <div className="projectsTWO h-[800px] w-96 ml-56">
            <div className="pera w-[350px] h-16 mt-32 ">
              <p className="text-white ">
                Projects i have worked on during internship and college Time
                with Team
              </p>
              <hr className="mt-3" />
            </div>
            <div className="projects h-[500px] rounded-xl w-96 shadow-lg shadow-red-500 mt-5">
              <ul>
                <li className="text-white pt-8 pl-5">
                  Hostel managment website <br /> (React JS , Tailwind CSS ,
                  Node JS)
                </li>
                <li className="text-white pt-7 pl-5">
                  E-commerce shopping website <br />
                  (HTML , CSS , React JS , Tailwind CSS)
                </li>
                <li className="text-white pt-7 pl-5">
                  Car rental website <br /> (HTML , CSS , React JS , Tailwind
                  CSS)
                </li>
                <li className="text-white pt-7 pl-5">
                  Online Food delivery website <br /> (HTML , CSS , React JS ,
                  Bootstrap)
                </li>
                <li className="text-white pt-7 pl-5">
                  Online Job portal <br /> (Node JS , MongoDB)
                </li>
                <li className="text-white pt-7 pl-5">
                  My portfolio <br /> (HTML , CSS , React JS , Tailwind CSS)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
