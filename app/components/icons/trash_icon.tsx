type Props = {
  color?: string;
};

const TrashIcon = ({ color = "#737380" }: Props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7585 14.0001H5.23855C4.54055 14.0001 3.96055 13.4614 3.90855 12.7647L3.31055 4.66675H12.6665L12.0885 12.7614C12.0385 13.4594 11.4579 14.0001 10.7585 14.0001V14.0001Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99984 7.33325V11.3333"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.6665 4.66659H13.3332"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3332 4.66667L10.6578 2.86533C10.4625 2.34467 9.96517 2 9.40917 2H6.5905C6.0345 2 5.53717 2.34467 5.34184 2.86533L4.6665 4.66667"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2867 7.33325L10.0001 11.3333"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.71344 7.33325L6.0001 11.3333"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TrashIcon;
