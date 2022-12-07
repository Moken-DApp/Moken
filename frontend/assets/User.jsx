export const User = ({ color, width, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "24"}
      height={width || "24"}
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className={className + " " + "feather feather-user"}
    >
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
};
