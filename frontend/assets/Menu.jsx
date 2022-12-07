export const Menu = ({ color, width, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "24"}
      height={width || "24"}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={className + " " + "feather feather-menu"}
      viewBox="0 0 24 24"
    >
      <path d="M3 12L21 12"></path>
      <path d="M3 6L21 6"></path>
      <path d="M3 18L21 18"></path>
    </svg>
  );
};
