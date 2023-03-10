import { he } from "date-fns/locale";
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

export const ChatTextIcon = (props) => {
  const width = props.width;
  const height = props.height;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="#333"
      class={`bi bi-chat-right-dots-fill ${props.className}`}
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

export const TrashIcon = (props) => {
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
          d="M8 1.5V2.5H3C2.44772 2.5 2 2.94772 2 3.5V4.5C2 5.05228 2.44772 5.5 3 5.5H21C21.5523 5.5 22 5.05228 22 4.5V3.5C22 2.94772 21.5523 2.5 21 2.5H16V1.5C16 0.947715 15.5523 0.5 15 0.5H9C8.44772 0.5 8 0.947715 8 1.5Z"
          fill="#000000"
        ></path>
        <path
          d="M3.9231 7.5H20.0767L19.1344 20.2216C19.0183 21.7882 17.7135 23 16.1426 23H7.85724C6.28636 23 4.98148 21.7882 4.86544 20.2216L3.9231 7.5Z"
          fill="#000000"
        ></path>
      </g>
    </svg>
  );
};

export const CollapseToOnIcon = (props) => {
  const width = props.width;
  const height = props.heightl;
  const className = props.className;
  return (
    <svg
      fill="#000000"
      width={width}
      height={height}
      viewBox="0 0 36 36"
      version="1.1"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(180)"
      className={className}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>collapse-line</title>
        <path
          class="clr-i-outline clr-i-outline-path-1"
          d="M29,19.41a1,1,0,0,1-.71-.29L18,8.83,7.71,19.12a1,1,0,0,1-1.41-1.41L18,6,29.71,17.71A1,1,0,0,1,29,19.41Z"
          transform="rotate(180 18 18)"
        ></path>
        <path
          class="clr-i-outline clr-i-outline-path-2"
          d="M29,30.41a1,1,0,0,1-.71-.29L18,19.83,7.71,30.12a1,1,0,0,1-1.41-1.41L18,17,29.71,28.71A1,1,0,0,1,29,30.41Z"
          transform="rotate(180 18 18)"
        ></path>
        <rect x="0" y="0" width="36" height="36" fill-opacity="0"></rect>
      </g>
    </svg>
  );
};

export const CollapseToOffIcon = (props) => {
  const width = props.width;
  const height = props.heightl;
  return (
    <svg
      fill="#000000"
      width={width}
      height={height}
      viewBox="0 0 36 36"
      version="1.1"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(300)"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>collapse-line</title>
        <path
          class="clr-i-outline clr-i-outline-path-1"
          d="M29,19.41a1,1,0,0,1-.71-.29L18,8.83,7.71,19.12a1,1,0,0,1-1.41-1.41L18,6,29.71,17.71A1,1,0,0,1,29,19.41Z"
          transform="rotate(0 18 18)"
        ></path>
        <path
          class="clr-i-outline clr-i-outline-path-2"
          d="M29,30.41a1,1,0,0,1-.71-.29L18,19.83,7.71,30.12a1,1,0,0,1-1.41-1.41L18,17,29.71,28.71A1,1,0,0,1,29,30.41Z"
          transform="rotate(0 18 18)"
        ></path>
        <rect x="0" y="0" width="36" height="36" fill-opacity="0"></rect>
      </g>
    </svg>
  );
};
export const AvatarIcon = (props) => {
  const width = props.width;
  const height = props.heightl;
  const className = props.className;
  return (
    <svg
      className={className}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="-30.61 -30.61 159.96 159.96"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0">
        <rect
          x="-30.61"
          y="-30.61"
          width="159.96"
          height="159.96"
          rx="79.98"
          fill="#ffffff"
          strokewidth="0"
        ></rect>
      </g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <g>
            <path d="M26.417,56.739c0-5.115,1.688-9.838,4.528-13.656c-2.974-2.673-6.893-4.313-11.205-4.313 c-9.272,0-16.789,7.518-16.789,16.789c0,0,3.95,35.276,16.789,35.276c4.962,0,8.592-5.274,11.184-11.739 c-3.025-9.953-4.248-19.888-4.488-22.026L26.417,56.739z"></path>
            <path d="M19.74,37.554c5.617,0,10.503-3.125,13.02-7.729c-2.513-3.413-4.006-7.619-4.006-12.173c0-2.066,0.313-4.06,0.882-5.943 c-2.625-2.358-6.088-3.808-9.896-3.808c-8.188,0-14.826,6.639-14.826,14.827C4.914,30.915,11.552,37.554,19.74,37.554z"></path>
            <path d="M78.996,38.77c-4.312,0-8.23,1.64-11.205,4.313c2.842,3.818,4.528,8.541,4.528,13.656l-0.019,0.33 c-0.24,2.14-1.463,12.073-4.488,22.026c2.592,6.465,6.222,11.739,11.184,11.739c12.839,0,16.789-35.276,16.789-35.276 C95.785,46.288,88.268,38.77,78.996,38.77z"></path>
            <path d="M65.977,29.824c2.517,4.604,7.401,7.729,13.02,7.729c8.188,0,14.826-6.639,14.826-14.826 c0-8.188-6.639-14.827-14.826-14.827c-3.809,0-7.271,1.449-9.896,3.808c0.568,1.884,0.883,3.877,0.883,5.943 C69.982,22.205,68.489,26.411,65.977,29.824z"></path>
            <path d="M49.368,36.751c-11.039,0-19.988,8.949-19.988,19.988c0,0,4.704,41.997,19.988,41.997s19.987-41.997,19.987-41.997 C69.355,45.7,60.407,36.751,49.368,36.751z"></path>
            <circle cx="49.368" cy="17.651" r="17.651"></circle>
          </g>
        </g>
      </g>
    </svg>
  );
};

export const ProjectsIcon = (props) => {
  const width = props.width;
  const height = props.heightl;
  const className = props.className;
  const ref = props.ref;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="-16.64 -16.64 85.28 85.28"
      enable-background="new 0 0 52 52"
      className={className}
      fill="rgba(191, 191, 191, 0.933)"
      ref={ref}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0">
        <rect
          x="-16.64"
          y="-16.64"
          width="85.28"
          height="85.28"
          rx="42.64"
          fill="#ffffff"
          strokewidth="0"
        ></rect>
      </g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M44,2H18c-2.2,0-4,1.8-4,4v2h24c2.2,0,4,1.8,4,4v28h2c2.2,0,4-1.8,4-4V6C48,3.8,46.2,2,44,2z"></path>
        <path d="M38,16c0-2.2-1.8-4-4-4H8c-2.2,0-4,1.8-4,4v30c0,2.2,1.8,4,4,4h26c2.2,0,4-1.8,4-4V16z M20,23 c0,0.6-0.4,1-1,1h-8c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1V23z M28,39c0,0.6-0.4,1-1,1H11c-0.6,0-1-0.4-1-1v-2 c0-0.6,0.4-1,1-1h16c0.6,0,1,0.4,1,1V39z M32,31c0,0.6-0.4,1-1,1H11c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h20c0.6,0,1,0.4,1,1V31z"></path>
      </g>
    </svg>
  );
};

export const GoldMedalIcon = (props) => {
  const width = props.width;
  const height = props.heightl;
  const className = props.className;
  const ref = props.ref;
  return (
    <svg viewBox="-3.5 0 32 32" width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M9.73795 18.8436L12.9511 20.6987L6.42625 32L4.55349 27.8233L9.73795 18.8436Z"
          fill="#CE4444"
        ></path>
        <path
          d="M9.73795 18.8436L6.52483 16.9885L0 28.2898L4.55349 27.8233L9.73795 18.8436Z"
          fill="#983535"
        ></path>
        <path
          d="M14.322 18.8436L11.1088 20.6987L17.6337 32L19.5064 27.8233L14.322 18.8436Z"
          fill="#983535"
        ></path>
        <path
          d="M14.322 18.8436L17.5351 16.9885L24.0599 28.2898L19.5064 27.8233L14.322 18.8436Z"
          fill="#CE4444"
        ></path>
        <path
          d="M22.9936 11.0622C22.9936 17.1716 18.0409 22.1243 11.9314 22.1243C5.82194 22.1243 0.869249 17.1716 0.869249 11.0622C0.869249 4.9527 5.82194 0 11.9314 0C18.0409 0 22.9936 4.9527 22.9936 11.0622Z"
          fill="url(#paint0_linear_103_1801)"
        ></path>
        <path
          d="M20.5665 11.0621C20.5665 15.8311 16.7004 19.6972 11.9315 19.6972C7.16247 19.6972 3.29645 15.8311 3.29645 11.0621C3.29645 6.29315 7.16247 2.42713 11.9315 2.42713C16.7004 2.42713 20.5665 6.29315 20.5665 11.0621Z"
          fill="#A88300"
        ></path>
        <path
          d="M21.0477 11.984C21.0477 16.7641 17.1727 20.6391 12.3926 20.6391C7.61251 20.6391 3.73748 16.7641 3.73748 11.984C3.73748 7.20389 7.61251 3.32887 12.3926 3.32887C17.1727 3.32887 21.0477 7.20389 21.0477 11.984Z"
          fill="#C28B37"
        ></path>
        <path
          d="M20.5868 11.0621C20.5868 15.8422 16.7118 19.7172 11.9317 19.7172C7.15159 19.7172 3.27656 15.8422 3.27656 11.0621C3.27656 6.28205 7.15159 2.40702 11.9317 2.40702C16.7118 2.40702 20.5868 6.28205 20.5868 11.0621Z"
          fill="#C09525"
        ></path>
        <path
          d="M11.9781 5.04096L13.8451 8.77502L17.5792 9.24178L15.0151 12.117L15.7122 16.2431L11.9781 14.3761L8.24404 16.2431L8.94729 12.117L6.37701 9.24178L10.1111 8.77502L11.9781 5.04096Z"
          fill="url(#paint1_linear_103_1801)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_103_1801"
            x1="11.1804"
            y1="4.03192"
            x2="12.6813"
            y2="31.965"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFC600"></stop>
            <stop offset="1" stop-color="#FFDE69"></stop>
          </linearGradient>
          <linearGradient
            id="paint1_linear_103_1801"
            x1="11.9783"
            y1="5.04096"
            x2="11.9783"
            y2="16.2431"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFFCDD"></stop>
            <stop offset="1" stop-color="#FFE896"></stop>
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
};
