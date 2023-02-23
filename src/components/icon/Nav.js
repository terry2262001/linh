const Nav = ({ ...props }) => {
  return (
    <svg width="20px" height="18px" className="cursor-pointer" {...props}>
      <path
        fillRule="evenodd"
        fill="#292D32"
        d="M-0.000,-0.000 L20.000,-0.000 L20.000,2.000 L-0.000,2.000 L-0.000,-0.000 Z"
      ></path>
      <path
        fillRule="evenodd"
        fill="#292D32"
        d="M-0.000,8.000 L15.000,8.000 L15.000,10.000 L-0.000,10.000 L-0.000,8.000 Z"
      ></path>
      <path
        fillRule="evenodd"
        fill="#292D32"
        d="M-0.000,16.000 L20.000,16.000 L20.000,18.000 L-0.000,18.000 L-0.000,16.000 Z"
      ></path>
    </svg>
  );
};

export default Nav;
