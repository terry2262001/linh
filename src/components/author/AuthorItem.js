const AuthorItem = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <img
        src={require("../images/DangLinh.jpg")}
        alt=""
        className="object-cover w-[142px] h-[142px] rounded-full"
      />
      <div className="mt-5 text-center">
        <p>Dang Linh</p>
        <p className="text-lightGray">2 Published Books</p>
      </div>
    </div>
  );
};

export default AuthorItem;
