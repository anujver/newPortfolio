import image from "../assets/Image.png";


const Banner = () => {
  return (
    <>
      <div
        className="maincontainer mt-40  w-full
         h-[500px] flex"
        id="Home"
      >
        <div className="imageandtextcontainer flex">
          <div className="textarea w-[800px]">
            <h1 className="text-white text-600 mt-5 ml-32  sm:ml-48 hover:text-red-500  text-7xl  hover:animate-bounce ">
              {" "}
              I'm a Full Stack <br /> Web Developer
            </h1>

            <p className="text-white ml-32 sm:ml-48  mt-10 hover:text-red-500">
              I am passout with skilled in building websites and desgining
              software. <br /> i love to work on web application using
              technologies like React, Tailwind, Node JS, Express, Bootsrap and
              MongoDB.
            </p>
            
              {" "}
              <button
                className="bg-blue-600 w-32 h-11 ml-32 sm:ml-48 hover:bg-red-500  mt-10  text-white"
                style={{ borderRadius: "8px" }}
              >
                Portfolio
              </button>
            
          </div>
          <div className="details mr-20 h-[350px] text-center sm:ml-20  w-[400px] overflow-x-auto no-scrollbar">
            <div
              className="image relative h-96 w-96 ml-1 rounded-lg -mt-5 bg-cover hover:animate-bounce  hover:shadow-red-500 shadow-lg "
              style={{
                backgroundImage: `url(${image})`,
              }}
            ></div>
            <p className="text-white -mt-12">Scroll down</p>
            <br />
            <p className="text-white mt-8">
              Hello..!! <br /> i'm Anuj verma <br />
              <br /> Education : <br /> iam from khandwa and currently living in
              indore, i've complete my B-tech from SAGE university indore i also
              complete my diploma from Govt polytechnic college khandwa with
              Aggregate 7.33 CGPA. <br />
              <br />
              Experience : <br /> i'm highly motivated and result oriented
              professional with 6 months of internship experience. i've worked
              on variety of live projects like E-commerce shopping webSite,
              Hostel managment, carRental website.
              <br />
              <br />
              Skills : <br /> i'm skilled in HTML-5 , CSS-3 , JavaScript , React
              JS , Node JS , Express JS , MongoDB , Tailwind , and Redux , i'm
              passionate about this web developmetn field and i'm eager to learn
              new things from my past experinces.
              <br />
              <br />
              Contact Details : <br />
              Phone no : 8359086759 <br />
              Email ID : vanuj9634@gmail.com <br /> Linked in :{" "}
              <a href="https://www.linkedin.com/in/anuj-verma-440957242">
                Anuj verma
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
