import React from "react";

// Check Icon Component
export const CheckIcon: React.FC<{
  size: number;
  color: string;
}> = ({ size, color, ...rest }) => {
  return (
    <svg
      {...rest} // ✅ this now works!
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
};

// Copy Icon Component
export const CopyIcon: React.FC<{
  size: number;
  color: string;
}> = ({ size, color, ...rest }) => {
  return (
    <svg
      {...rest} // ✅ this now works!
      width={size}
      height={size}
      viewBox="0 0 12 13"
      fill="inherite"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.62 1.5H5.673C4.791 1.5 4.092 1.5 3.5455 1.574C2.9825 1.65 2.527 1.81 2.168 2.1705C1.8085 2.531 1.649 2.9885 1.5735 3.5535C1.5 4.1025 1.5 4.804 1.5 5.6895V8.6085C1.5 9.3625 1.96 10.0085 2.6135 10.2795C2.58 9.8245 2.58 9.187 2.58 8.656V6.151C2.58 5.5105 2.58 4.958 2.639 4.516C2.7025 4.042 2.8455 3.588 3.2125 3.2195C3.5795 2.851 4.032 2.7075 4.504 2.6435C4.944 2.5845 5.494 2.5845 6.1325 2.5845H7.6675C8.3055 2.5845 8.8545 2.5845 9.295 2.6435C9.16305 2.30665 8.93266 2.01737 8.63388 1.81339C8.33509 1.60941 7.98177 1.5002 7.62 1.5Z"
        fill={color}
      />
      <path
        d="M3.2998 6.19814C3.2998 4.83514 3.2998 4.15364 3.7218 3.73014C4.1433 3.30664 4.8218 3.30664 6.1798 3.30664H7.6198C8.9773 3.30664 9.6563 3.30664 10.0783 3.73014C10.5003 4.15364 10.4998 4.83514 10.4998 6.19814V8.60814C10.4998 9.97114 10.4998 10.6526 10.0783 11.0761C9.6563 11.4996 8.9773 11.4996 7.6198 11.4996H6.1798C4.8223 11.4996 4.1433 11.4996 3.7218 11.0761C3.2998 10.6526 3.2998 9.97114 3.2998 8.60814V6.19814Z"
        fill={color}
      />
    </svg>
  );
};
