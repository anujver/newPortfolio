const Navbar = () => {
  return (
    <>
      <div className="navbar container h-20 w-full flex">
        <div className="itemsContainer sm:ml-[195px] flex h-36 ml-32 sm:w-[1160px]">
          <div className="name w-96 mt-10">
            <h1 className="text-white text-4xl hover:text-red-500 ">
              Anuj Verma
            </h1>
          </div>
          <div className="Message w-96 mt-12 ml-[330px] sm:ml-[350px]">
            <p className="text-red-500 text-2xl">" Welcome To My Portfolio "</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
