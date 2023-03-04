import React from "react";

export const HeartIcon = (props) => {
  const classNameOfSelectedIcon = props.classNameOfSelectedIcon;
  return (
    <svg
      name="hearIcon"
      viewBox="0 0 16 13"
      width="16"
      height="13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNameOfSelectedIcon}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#000000"
        d="M6.94474 0.78748C6.18939 0.289888 5.28442 0 4.35417 0C1.91583 0 0 1.89907 0 4.31608C0 7.2 2.48474 8.99368 4.09284 10.203C4.1829 10.2707 4.2702 10.3364 4.35417 10.4C5.9375 11.6 7.91667 12.8 7.91667 12.8C7.91667 12.8 9.89583 11.6 11.4792 10.4C11.5632 10.3364 11.6504 10.2707 11.7405 10.203C13.3486 8.99368 15.8333 7.12512 15.8333 4.31608C15.8333 1.89907 13.9175 0 11.4792 0C10.549 0 9.64393 0.289888 8.8886 0.78748C8.52546 1.02672 8.19684 1.31398 7.91667 1.64011C7.6365 1.31398 7.30788 1.02672 6.94474 0.78748Z"
      ></path>
    </svg>
  );
};

export const ChatTextIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="#333"
      class="bi bi-chat-right-dots-fill "
      viewBox="0 0 16 16"
    >
      <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </svg>
  );
};

export const ToolIcon = (props) => {
  const width = props.width;
  const height = props.heightl;
  return (
    <svg
      fill="#000000"
      height={height}
      width={width}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 290 290"
      transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
      stroke="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M285.857,52.128l-42.557,42.557c-3.887,3.887-10.184,3.887-14.072,0l-33.914-33.914c-3.887-3.887-3.887-10.186,0-14.071 l42.557-42.556c-26.965-9.211-58.012-3.066-79.518,18.441c-22.459,22.457-28.162,55.313-17.129,83.063l-45.361,45.359 c-25.279-9.078-54.639-3.505-74.889,16.747c-27.967,27.966-27.965,73.308,0,101.271c27.961,27.964,73.303,27.966,101.27,0 c20.252-20.253,25.826-49.614,16.748-74.893l45.359-45.359c27.75,11.032,60.607,5.33,83.065-17.127 C288.922,110.141,295.068,79.095,285.857,52.128z M99.793,246.573L61.291,256.89l-28.182-28.181l10.318-38.501l38.5-10.318 l28.184,28.182L99.793,246.573z"></path>
      </g>
    </svg>
  );
};

export const CategoryIcon = (props) => {
  const width = props.width;
  const height = props.heightl;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M2 6.47762C2 5.1008 2 4.4124 2.22168 3.86821C2.52645 3.12007 3.12007 2.52645 3.86821 2.22168C4.4124 2 5.1008 2 6.47762 2V2C7.85443 2 8.54284 2 9.08702 2.22168C9.83517 2.52645 10.4288 3.12007 10.7336 3.86821C10.9552 4.4124 10.9552 5.1008 10.9552 6.47762V6.47762C10.9552 7.85443 10.9552 8.54284 10.7336 9.08702C10.4288 9.83517 9.83517 10.4288 9.08702 10.7336C8.54284 10.9552 7.85443 10.9552 6.47762 10.9552V10.9552C5.1008 10.9552 4.4124 10.9552 3.86821 10.7336C3.12007 10.4288 2.52645 9.83517 2.22168 9.08702C2 8.54284 2 7.85443 2 6.47762V6.47762Z"
          fill="#000000"
        ></path>
        <path
          d="M2 17.5224C2 16.1456 2 15.4572 2.22168 14.913C2.52645 14.1649 3.12007 13.5712 3.86821 13.2665C4.4124 13.0448 5.1008 13.0448 6.47762 13.0448V13.0448C7.85443 13.0448 8.54284 13.0448 9.08702 13.2665C9.83517 13.5712 10.4288 14.1649 10.7336 14.913C10.9552 15.4572 10.9552 16.1456 10.9552 17.5224V17.5224C10.9552 18.8992 10.9552 19.5876 10.7336 20.1318C10.4288 20.88 9.83517 21.4736 9.08702 21.7783C8.54284 22 7.85443 22 6.47762 22V22C5.1008 22 4.4124 22 3.86821 21.7783C3.12007 21.4736 2.52645 20.88 2.22168 20.1318C2 19.5876 2 18.8992 2 17.5224V17.5224Z"
          fill="#000000"
        ></path>
        <path
          d="M13.0449 17.5224C13.0449 16.1456 13.0449 15.4572 13.2666 14.913C13.5714 14.1649 14.165 13.5712 14.9131 13.2665C15.4573 13.0448 16.1457 13.0448 17.5225 13.0448V13.0448C18.8994 13.0448 19.5878 13.0448 20.1319 13.2665C20.8801 13.5712 21.4737 14.1649 21.7785 14.913C22.0002 15.4572 22.0002 16.1456 22.0002 17.5224V17.5224C22.0002 18.8992 22.0002 19.5876 21.7785 20.1318C21.4737 20.88 20.8801 21.4736 20.1319 21.7783C19.5878 22 18.8994 22 17.5225 22V22C16.1457 22 15.4573 22 14.9131 21.7783C14.165 21.4736 13.5714 20.88 13.2666 20.1318C13.0449 19.5876 13.0449 18.8992 13.0449 17.5224V17.5224Z"
          fill="#000000"
        ></path>
        <path
          clip-rule="evenodd"
          d="M16.7725 9.47766C16.7725 9.89187 17.1082 10.2277 17.5225 10.2277C17.9367 10.2277 18.2725 9.89187 18.2725 9.47766V7.22766H20.5225C20.9367 7.22766 21.2725 6.89187 21.2725 6.47766C21.2725 6.06345 20.9367 5.72766 20.5225 5.72766H18.2725V3.47766C18.2725 3.06345 17.9367 2.72766 17.5225 2.72766C17.1082 2.72766 16.7725 3.06345 16.7725 3.47766L16.7725 5.72766H14.5225C14.1082 5.72766 13.7725 6.06345 13.7725 6.47766C13.7725 6.89187 14.1082 7.22766 14.5225 7.22766H16.7725L16.7725 9.47766Z"
          fill="#000000"
          fill-rule="evenodd"
        ></path>
      </g>
    </svg>
  );
};

export const LinkIcon = (props) => {
  const width = props.width;
  const height = props.heightl;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8.65 14.77C8.54 15.07 8.25 15.26 7.95 15.26C7.86 15.26 7.78 15.25 7.69 15.21C6.88 14.91 6.2 14.32 5.77 13.55C4.77 11.75 5.39 9.4 7.14 8.31L9.48 6.86C10.34 6.33 11.35 6.17 12.31 6.42C13.27 6.67 14.08 7.3 14.57 8.18C15.57 9.98 14.95 12.33 13.2 13.42L12.94 13.61C12.6 13.85 12.13 13.77 11.89 13.44C11.65 13.1 11.73 12.63 12.06 12.39L12.37 12.17C13.49 11.47 13.87 10.02 13.26 8.91C12.97 8.39 12.5 8.02 11.94 7.87C11.38 7.72 10.79 7.81 10.28 8.13L7.92 9.59C6.84 10.26 6.46 11.71 7.07 12.83C7.32 13.28 7.72 13.63 8.2 13.81C8.59 13.95 8.79 14.38 8.65 14.77ZM16.92 15.65L14.58 17.1C13.99 17.47 13.33 17.65 12.66 17.65C12.36 17.65 12.05 17.61 11.75 17.53C10.79 17.28 9.98 16.65 9.5 15.77C8.5 13.97 9.12 11.62 10.87 10.53L11.13 10.34C11.47 10.1 11.94 10.18 12.18 10.51C12.42 10.85 12.34 11.32 12.01 11.56L11.7 11.78C10.58 12.48 10.2 13.93 10.81 15.04C11.1 15.56 11.57 15.93 12.13 16.08C12.69 16.23 13.28 16.14 13.79 15.82L16.13 14.37C17.21 13.7 17.59 12.25 16.98 11.13C16.73 10.68 16.33 10.33 15.85 10.15C15.46 10.01 15.26 9.58 15.41 9.19C15.55 8.8 15.99 8.6 16.37 8.75C17.18 9.05 17.86 9.64 18.29 10.41C19.28 12.21 18.67 14.56 16.92 15.65Z"
          fill="#a9e504"
        ></path>
      </g>
    </svg>
  );
};

export const InstagramIcon = (props) => {
  const width = props.width;
  const height = props.heightl;
  const className = props.className;
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        
        <rect
          x="2"
          y="2"
          width="28"
          height="28"
          rx="6"
          fill="url(#paint0_radial_87_7153)"
        ></rect>
        <rect
          x="2"
          y="2"
          width="28"
          height="28"
          rx="6"
          fill="url(#paint1_radial_87_7153)"
        ></rect>
        <rect
          x="2"
          y="2"
          width="28"
          height="28"
          rx="6"
          fill="url(#paint2_radial_87_7153)"
        ></rect>
        <path
          d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
          fill="white"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
          fill="white"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
          fill="white"
        ></path>
        <defs>
          <radialGradient
            id="paint0_radial_87_7153"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
          >
            <stop stop-color="#B13589"></stop>
            <stop offset="0.79309" stop-color="#C62F94"></stop>
            <stop offset="1" stop-color="#8A3AC8"></stop>
          </radialGradient>
          <radialGradient
            id="paint1_radial_87_7153"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
          >
            
            <stop stop-color="#E0E8B7"></stop>
            <stop offset="0.444662" stop-color="#FB8A2E"></stop>
            <stop offset="0.71474" stop-color="#E2425C"></stop>
            <stop offset="1" stop-color="#E2425C" stop-opacity="0"></stop>
          </radialGradient>
          <radialGradient
            id="paint2_radial_87_7153"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
          >
            
            <stop offset="0.156701" stop-color="#406ADC"></stop>
            <stop offset="0.467799" stop-color="#6A45BE"></stop>
            <stop offset="1" stop-color="#6A45BE" stop-opacity="0"></stop>
          </radialGradient>
        </defs>
      </g>
    </svg>
  );
};

export const FacebookIcon = (props) => {
  const width = props.width;
  const height = props.heightl;
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={width}
      height={height}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="#1877F2"
          d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
        ></path>
        <path
          fill="#ffffff"
          d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
        ></path>
      </g>
    </svg>
  );
};

export const SendIcon = (props) => {
  const width = props.width;
  const height = props.heightl;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        
        <path
          opacity="0.15"
          d="M20 4L3 11L10 14L13 21L20 4Z"
          fill="#000000"
        ></path>
        <path
          d="M20 4L3 11L10 14M20 4L13 21L10 14M20 4L10 14"
          stroke="#000000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </g>
    </svg>
  );
};
