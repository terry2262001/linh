const LayoutSign = ({ children }) => {
  return (
    <div className="container grid grid-cols-3">
      <div className="col-span-3 md:col-span-2 flex items-start justify-center flex-col">
        <p className="text-[5rem] font-light">
          Book<span className="text-primary text-[6rem] font-normal">W</span>orm
        </p>
        <p className="italic">Sit back, relax, grab a book and enjoy the day</p>
      </div>
      <div className="flex items-start justify-center flex-col mt-[100px] col-span-3 md:col-span-1">
        {children}
      </div>
    </div>
  );
};

export default LayoutSign;
