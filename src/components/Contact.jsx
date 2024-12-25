const Contact = () => {
  return (
    <>
      <div
        className="mainContainer mt-56 ml-20 sm:text-left text-center sm:ml-36 h-[280px] rounded-lg w-[1100px] mr-16 mb-20"
        id="Contact"
      >
        <h1 className="text-white text-3xl ml-10 mt-12 pt-5 hover:underline underline-offset-8 hover:text-red-600 ">
          Contact
        </h1>

        <p className="text-white ml-9 mt-3 hover:underline hover:text-red-500">
          Let's work together
        </p>
        <hr className="mt-5" />
        <div className="container h-[630px]">
          <div className="contactDeatils rounded-lg ml-96 mt-20 text-center w-96  h-[500px] shadow-lg shadow-red-500">
            <h1 className="text-white text-2xl pt-12 hover:text-red-500 ">
              Contact Via Email
            </h1>
            <p className="text-white mt-3  hover:text-red-500">
              vanuj9634@gmail.com
            </p>
            <h1 className="text-white text-2xl mt-12 hover:text-red-500">
              Message me on WhatsApp
            </h1>
            <p className="text-white mt-3  hover:text-red-500">
              +91 8359086759
            </p>
            <h1 className="text-white text-2xl mt-12 hover:text-red-500 ">
              Contact Via Phone.no
            </h1>
            <p className="text-white mt-3 hover:text-red-500">+91 8359086759</p>{" "}
            <h1 className="text-white text-2xl hover:text-red-500 mt-12">
              Message My LinkedIN account
            </h1>
            <p className="text-white mt-3  hover:text-red-500">
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

export default Contact;
