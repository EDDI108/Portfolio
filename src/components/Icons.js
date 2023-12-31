export const VkIcon = ({ className, ...rest }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		style={{
			fill: '#017dbc',
		}}
		viewBox='0 0 512 512'
		width='1em'
		height='1em'
		{...rest}
		className={`w-full h-auto ${className}`}
	>
		<path
			d='M31.49 63.49C0 94.982 0 145.672 0 247.04v17.92c0 101.369 0 152.059 31.49 183.549C62.982 
      480 113.672 480 215.04 480h17.92c101.369 0 152.059 0 183.549-31.491C448 417.019 448 
      366.329 448 264.96v-17.92c0-101.369 0-152.059-31.491-183.55C385.019 32 334.329 
      32 232.96 32h-17.92C113.671 32 62.981 32 31.49 63.49ZM75.6 168.268h51.147c1.68 
      85.493 39.386 121.706 69.253 129.173V168.267h48.16V242c29.493-3.173 60.48-36.773 
      70.933-73.733h48.16a142.258 142.258 0 0 1-65.52 92.96 147.348 147.348 0 0 1 76.72 93.52H321.44a92.154 
      92.154 0 0 0-77.28-66.64v66.64h-5.787c-102.106 0-160.346-70-162.773-186.48Z'
			className={className} // Добавлено
		/>
	</svg>
);

export const GithubIcon = ({ className, ...rest }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='1em'
		height='1em'
		viewBox='0 0 512 512'
		{...rest}
		className={`w-full h-auto ${className}`}
	>
		<path fill='none' d='M0 0h512v512H0z' />
		<path
			fill='currentColor'
			d='M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 
      11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 
      1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 
      1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 
      7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 
      2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 
      48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 
      88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 
      11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z'
		/>
	</svg>
);
export const LinkArrow = ({ className, ...rest }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		className={`w-full h-auto ${className}`}
		{...rest}
	>
		<path fill='none' d='M0 0h24v24H0z' />
		<path
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5'
		/>
	</svg>
);

export const CircularText = ({ className, ...rest }) => (
	<svg xmlns="http://www.w3.org/2000/svg"
      width="200pt" 
      height="200pt" 
      viewBox="0 0 250 250"
      xmlSpace='preserve'
		className={`w-full h-auto ${className}`}
		{...rest}
>

<g transform="translate(200, 200)">
   <animateTransform
    attributeName="transform"
    type="rotate"
    from="0 50 50"   /* Начальный угол вращения */
    to="30 50 50"   /* Конечный угол вращения */
    dur="5s"
    repeatCount="indefinite"
  />
<path d="M1325 2268 c-12 -38 -42 -198 -37 -202 13 -13 38 -4 47 16 15 33 31
32 45 -2 12 -28 55 -58 67 -46 2 2 -7 26 -20 52 l-25 49 40 26 39 26 -26 7
c-18 5 -37 0 -61 -15 -19 -12 -37 -19 -40 -16 -3 3 -1 22 5 44 16 57 14 73 -9
73 -11 0 -23 -6 -25 -12z"/>
<path d="M1112 2210 c-33 -31 -30 -92 4 -119 41 -32 124 -23 124 13 0 17 -27
29 -35 16 -9 -14 -49 -12 -63 2 -33 33 10 86 54 66 32 -15 54 3 34 27 -19 23
-91 20 -118 -5z"/>
<path d="M897 2194 c-22 -12 -26 -18 -17 -29 8 -10 17 -10 39 -2 15 5 37 7 47
3 20 -9 22 -8 -53 -37 -17 -6 -23 -17 -23 -39 0 -41 37 -60 78 -40 15 7 37 12
50 11 17 -2 22 3 22 21 0 36 -19 96 -36 113 -20 19 -71 19 -107 -1z m91 -91
c-4 -23 -58 -31 -58 -9 0 15 14 24 43 25 12 1 17 -5 15 -16z"/>
<path d="M683 2175 c-29 -13 -53 -27 -53 -32 0 -14 75 -183 82 -183 3 0 36 13
72 30 68 30 88 55 78 93 -3 10 -16 24 -29 30 -15 6 -22 16 -18 25 3 8 -2 25
-10 38 -20 31 -54 30 -122 -1z m85 -37 c2 -11 -8 -23 -27 -32 -38 -20 -38 -20
-51 4 -9 16 -6 22 17 34 34 19 57 16 61 -6z m49 -75 c3 -7 -15 -22 -38 -33
-42 -22 -58 -17 -59 16 0 28 89 43 97 17z"/>
<path d="M1527 2128 c-25 -20 -38 -64 -27 -92 11 -31 49 -56 85 -59 32 -2 46
20 18 29 -39 13 -63 28 -63 41 0 17 0 17 55 -7 26 -11 51 -20 56 -20 18 0 10
79 -11 100 -23 23 -87 27 -113 8z m83 -33 c21 -25 7 -34 -30 -19 -27 12 -32
17 -20 24 21 14 36 12 50 -5z"/>
<path d="M1696 2005 c-46 -63 -47 -67 -30 -80 17 -13 21 -11 39 13 40 54 54
63 75 52 27 -14 25 -33 -6 -80 -26 -39 -25 -60 1 -60 20 0 75 84 75 114 0 23
-40 66 -62 66 -5 0 -17 9 -27 21 -16 20 -17 19 -65 -46z"/>
<path d="M346 1953 c-5 -13 1 -24 20 -39 l27 -22 -23 -7 c-29 -9 -53 -66 -41
-99 23 -58 95 -74 137 -28 14 15 34 36 45 48 l21 21 -77 69 c-84 76 -99 84
-109 57z m100 -114 c19 -22 13 -43 -19 -63 -19 -12 -57 17 -57 44 0 40 46 52
76 19z"/>
<path d="M1852 1877 c-36 -38 -29 -79 21 -131 l43 -45 76 67 c79 69 86 80 66
100 -9 9 -18 6 -40 -15 -20 -19 -28 -22 -28 -12 0 8 -9 25 -20 37 -29 31 -89
30 -118 -1z m96 -29 c19 -19 14 -45 -10 -62 -12 -9 -26 -16 -30 -16 -12 0 -38
31 -38 45 0 35 53 58 78 33z"/>
<path d="M240 1720 c-11 -11 -20 -32 -20 -46 0 -14 -4 -23 -9 -19 -6 3 -15 -3
-20 -14 -10 -17 -4 -24 52 -57 34 -20 65 -39 69 -41 4 -2 12 5 18 16 9 18 5
24 -30 46 -49 31 -59 51 -36 73 16 16 20 15 66 -10 49 -28 50 -28 61 -7 6 11
9 22 7 23 -31 23 -101 56 -117 56 -12 0 -30 -9 -41 -20z"/>
<path d="M2117 1550 c-49 -16 -91 -30 -93 -32 -10 -10 39 -128 62 -149 31 -29
88 -32 127 -6 41 27 50 76 26 153 -11 35 -23 64 -27 63 -4 0 -47 -14 -95 -29z
m87 -46 c3 -9 6 -31 6 -50 0 -63 -80 -85 -114 -31 -29 45 -25 59 29 78 63 22
71 23 79 3z"/>
<path d="M154 1522 c-19 -12 -34 -49 -34 -81 0 -25 4 -31 21 -31 11 0 18 4 14
10 -9 15 5 58 22 65 22 8 23 5 10 -42 -8 -32 -8 -45 2 -57 17 -20 55 -21 71
-1 11 13 28 66 33 104 4 26 -110 53 -139 33z m96 -76 c0 -14 -5 -28 -11 -32
-17 -10 -32 12 -24 35 9 29 35 27 35 -3z"/>
<path d="M2134 1316 c-17 -8 -34 -21 -38 -31 -18 -49 8 -135 34 -109 7 7 8 19
2 35 -10 30 -4 61 11 56 7 -2 13 -27 15 -55 3 -47 5 -52 26 -52 12 0 32 10 44
23 39 42 22 118 -31 137 -16 5 -30 10 -31 10 -1 -1 -15 -7 -32 -14z m76 -51
c11 -13 11 -21 0 -43 -12 -25 -13 -26 -21 -7 -11 27 -11 65 0 65 5 0 14 -7 21
-15z"/>
<path d="M103 1117 c-90 -9 -93 -11 -93 -35 0 -23 3 -24 38 -19 l37 7 -3 -39
c-3 -30 1 -44 17 -60 30 -30 90 -28 120 3 21 22 22 30 16 90 -6 53 -11 66 -24
64 -9 0 -58 -5 -108 -11z m78 -47 c26 -14 25 -56 -2 -70 -25 -14 -44 -8 -59
19 -8 17 -7 24 10 41 23 23 25 23 51 10z"/>
<path d="M2173 1092 c-76 -23 -83 -27 -83 -51 0 -22 11 -32 70 -63 38 -21 72
-38 75 -38 3 0 5 9 5 20 0 13 -12 28 -31 38 -66 37 -67 39 -19 53 52 14 73 31
68 51 -2 12 -17 10 -85 -10z"/>
<path d="M182 913 c-24 -8 -50 -26 -59 -40 -15 -22 -15 -27 0 -59 10 -19 17
-43 17 -54 0 -30 13 -31 86 -7 70 24 80 32 65 55 -6 10 -17 10 -53 1 -52 -14
-78 -8 -78 19 0 25 15 37 66 52 33 10 40 16 37 31 -6 22 -23 23 -81 2z"/>
<path d="M2069 881 c-37 -38 -42 -101 -8 -101 15 0 19 5 15 15 -8 22 11 65 29
65 18 0 18 2 0 -50 -22 -62 -20 -70 18 -70 75 0 110 98 53 146 -37 32 -71 30
-107 -5z m101 -60 c0 -18 -18 -41 -32 -41 -11 0 -10 13 2 45 11 28 30 26 30
-4z"/>
<path d="M294 717 c-3 -9 4 -25 15 -36 21 -21 29 -61 12 -61 -5 0 -23 23 -39
52 l-30 51 -26 -26 c-29 -30 -33 -55 -11 -96 29 -57 103 -61 139 -9 22 31 20
59 -6 98 -27 39 -46 48 -54 27z m-19 -88 c16 -30 16 -31 -7 -27 -17 2 -24 11
-26 31 -4 36 14 34 33 -4z"/>
<path d="M1966 673 c-4 -9 -1 -20 6 -25 45 -29 169 -98 176 -98 8 0 22 22 22
35 0 5 -179 105 -189 105 -5 0 -12 -8 -15 -17z"/>
<path d="M417 544 c-3 -3 -1 -15 6 -25 10 -16 7 -23 -15 -46 -22 -22 -29 -24
-42 -14 -21 17 -37 5 -30 -24 3 -12 1 -26 -6 -30 -8 -5 -6 -12 6 -26 9 -10 22
-15 28 -11 6 4 20 7 31 7 14 0 19 6 18 19 -1 10 12 30 27 43 16 13 32 33 35
44 11 35 -35 86 -58 63z"/>
<path d="M1859 521 c-35 -35 -38 -77 -8 -115 44 -56 149 -12 149 64 0 74 -86
105 -141 51z m83 -28 c21 -19 23 -44 6 -61 -17 -17 -38 -15 -60 5 -22 20 -23
37 -2 57 20 20 33 20 56 -1z"/>
<path d="M1717 466 c-16 -13 -16 -15 3 -39 25 -31 25 -37 1 -37 -25 0 -61 -45
-61 -76 0 -12 12 -36 26 -53 33 -40 69 -40 119 -1 21 17 42 30 46 30 19 0 7
25 -52 106 -33 46 -61 84 -62 84 -1 0 -10 -7 -20 -14z m61 -118 c17 -17 15
-53 -3 -68 -26 -21 -65 3 -65 39 0 38 41 56 68 29z"/>
<path d="M511 391 c-38 -59 -40 -94 -6 -118 14 -10 35 -26 47 -36 11 -9 25
-17 29 -17 5 0 29 28 54 62 41 56 43 62 27 74 -15 11 -22 6 -59 -34 l-41 -47
-23 22 -23 22 32 45 c38 52 38 52 13 65 -16 9 -24 4 -50 -38z"/>
<path d="M698 286 c-25 -19 -39 -62 -29 -88 19 -51 81 -79 123 -57 46 25 59
63 37 112 -19 43 -94 62 -131 33z m92 -45 c20 -39 -22 -82 -60 -61 -22 12 -25
31 -10 61 14 25 56 25 70 0z"/>
<path d="M1540 293 c-19 -7 -60 -44 -60 -55 0 -13 29 -9 56 8 18 12 30 14 46
7 20 -9 16 -12 -35 -33 -31 -13 -57 -28 -57 -32 0 -17 49 -58 70 -58 12 0 34
7 49 15 89 46 25 182 -69 148z m66 -108 c-6 -15 -47 -21 -60 -8 -4 4 8 15 26
24 33 17 45 11 34 -16z"/>
<path d="M1367 233 c-18 -5 -18 -23 -1 -84 5 -17 -15 -44 -36 -51 -6 -2 -8
-11 -4 -21 4 -12 12 -16 23 -11 14 5 28 8 67 13 7 1 6 26 -5 81 -8 44 -17 79
-20 79 -3 -1 -14 -3 -24 -6z"/>
<path d="M954 189 c-8 -45 -26 -69 -55 -69 -13 0 -19 -7 -19 -21 0 -17 5 -20
25 -17 14 3 25 1 25 -3 0 -5 10 -9 23 -9 20 0 25 8 38 75 14 64 14 75 2 80
-27 10 -33 5 -39 -36z"/>
<path d="M1188 173 c-3 -38 -3 -38 -50 -41 -33 -2 -48 -8 -48 -17 0 -9 15 -15
48 -17 43 -3 47 -5 50 -30 3 -28 2 -28 -52 -28 -49 0 -56 -2 -56 -20 0 -18 7
-20 75 -20 l75 0 0 105 c0 97 -1 105 -19 105 -16 0 -20 -8 -23 -37z"/>
</g>
</svg>
);

export const SunIcon = ({ className, ...rest }) => (
	<svg
	  xmlns="http://www.w3.org/2000/svg"
	  width="24"
	  height="24"
	  viewBox="0 0 24 24"
	  {...rest}
	  className={`w-full h-auto ${className}`}
	>
	  <g
		fill="none"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
	  >
		<g strokeDasharray="2">
		  <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
			<animate
			  fill="freeze"
			  attributeName="stroke-dashoffset"
			  dur="0.2s"
			  values="4;2"
			/>
		  </path>
		  <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
			<animate
			  fill="freeze"
			  attributeName="stroke-dashoffset"
			  begin="0.2s"
			  dur="0.2s"
			  values="4;2"
			/>
		  </path>
		</g>
		<path
		  fill="currentColor"
		  d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
		  opacity="0"
		>
		  <set attributeName="opacity" begin="0.5s" to="1" />
		</path>
	  </g>
	  <g fill="currentColor" fillOpacity="0">
		<path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
		  <animate
			id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
			fill="freeze"
			attributeName="fill-opacity"
			begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
			dur="0.4s"
			values="0;1"
		  />
		  <animate
			fill="freeze"
			attributeName="fill-opacity"
			begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
			dur="0.4s"
			values="1;0"
		  />
		</path>
		<path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
		  <animate
			fill="freeze"
			attributeName="fill-opacity"
			begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
			dur="0.4s"
			values="0;1"
		  />
		  <animate
			fill="freeze"
			attributeName="fill-opacity"
			begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
			dur="0.4s"
			values="1;0"
		  />
		</path>
		<path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
		  <animate
			fill="freeze"
			attributeName="fill-opacity"
			begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
			dur="0.4s"
			values="0;1"
		  />
		  <animate
			fill="freeze"
			attributeName="fill-opacity"
			begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
			dur="0.4s"
			values="1;0"
		  />
		</path>
		<path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
		  <animate
			fill="freeze"
			attributeName="fill-opacity"
			begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
			dur="0.4s"
			values="0;1"
		  />
		  <animate
			fill="freeze"
			attributeName="fill-opacity"
			begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
			dur="0.4s"
			values="1;0"
		  />
		</path>
	  </g>
	  <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
		<circle cx="12" cy="12" r="12" fill="#fff" />
		<circle cx="22" cy="2" r="3" fill="#fff">
		  <animate
			fill="freeze"
			attributeName="cx"
			begin="0.1s"
			dur="0.4s"
			values="22;18"
		  />
		  <animate
			fill="freeze"
			attributeName="cy"
			begin="0.1s"
			dur="0.4s"
			values="2;6"
		  />
		  <animate
			fill="freeze"
			attributeName="r"
			begin="0.1s"
			dur="0.4s"
			values="3;12"
		  />
		</circle>
		<circle cx="22" cy="2" r="1">
		  <animate
			fill="freeze"
			attributeName="cx"
			begin="0.1s"
			dur="0.4s"
			values="22;18"
		  />
		  <animate
			fill="freeze"
			attributeName="cy"
			begin="0.1s"
			dur="0.4s"
			values="2;6"
		  />
		  <animate
			fill="freeze"
			attributeName="r"
			begin="0.1s"
			dur="0.4s"
			values="1;10"
		  />
		</circle>
	  </mask>
	  <circle
		cx="12"
		cy="12"
		r="6"
		fill="currentColor"
		mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
	  >
		<set attributeName="opacity" begin="0.5s" to="0" />
		<animate
		  fill="freeze"
		  attributeName="r"
		  begin="0.1s"
		  dur="0.4s"
		  values="6;10"
		/>
	  </circle>
	</svg>
  );
  
  export const MoonIcon = ({ className, ...rest }) => (
	<svg
	  xmlns="http://www.w3.org/2000/svg"
	  width="24"
	  height="24"
	  viewBox="0 0 24 24"
	  {...rest}
	  className={`w-full h-auto ${className}`}
	>
	  <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
	  <g
		fill="none"
		stroke="currentColor"
		strokeDasharray="2"
		strokeDashoffset="2"
		strokeLinecap="round"
		strokeWidth="2"
	  >
		<path d="M0 0">
		  <animate
			fill="freeze"
			attributeName="d"
			begin="1.2s"
			dur="0.2s"
			values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
		  />
		  <animate
			fill="freeze"
			attributeName="stroke-dashoffset"
			begin="1.2s"
			dur="0.2s"
			values="2;0"
		  />
		</path>
		<path d="M0 0">
		  <animate
			fill="freeze"
			attributeName="d"
			begin="1.5s"
			dur="0.2s"
			values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
		  />
		  <animate
			fill="freeze"
			attributeName="stroke-dashoffset"
			begin="1.5s"
			dur="1.2s"
			values="2;0"
		  />
		</path>
		<animateTransform
		  attributeName="transform"
		  dur="30s"
		  repeatCount="indefinite"
		  type="rotate"
		  values="0 12 12;360 12 12"
		/>
	  </g>
	  <g fill="currentColor">
		<path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
		  <animate
			fill="freeze"
			attributeName="fill-opacity"
			dur="0.4s"
			values="1;0"
		  />
		</path>
		<path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
		  <animate
			fill="freeze"
			attributeName="fill-opacity"
			begin="0.2s"
			dur="0.4s"
			values="1;0"
		  />
		</path>
	  </g>
	  <g
		fill="currentColor"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
	  >
		<path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
		<set attributeName="opacity" begin="0.6s" to="0" />
	  </g>
	  <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
		<circle cx="12" cy="12" r="12" fill="#fff" />
		<circle cx="18" cy="6" r="12" fill="#fff">
		  <animate
			fill="freeze"
			attributeName="cx"
			begin="0.6s"
			dur="0.4s"
			values="18;22"
		  />
		  <animate
			fill="freeze"
			attributeName="cy"
			begin="0.6s"
			dur="0.4s"
			values="6;2"
		  />
		  <animate
			fill="freeze"
			attributeName="r"
			begin="0.6s"
			dur="0.4s"
			values="12;3"
		  />
		</circle>
		<circle cx="18" cy="6" r="10">
		  <animate
			fill="freeze"
			attributeName="cx"
			begin="0.6s"
			dur="0.4s"
			values="18;22"
		  />
		  <animate
			fill="freeze"
			attributeName="cy"
			begin="0.6s"
			dur="0.4s"
			values="6;2"
		  />
		  <animate
			fill="freeze"
			attributeName="r"
			begin="0.6s"
			dur="0.4s"
			values="10;1"
		  />
		</circle>
	  </mask>
	  <circle
		cx="12"
		cy="12"
		r="10"
		fill="currentColor"
		mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
		opacity="0"
	  >
		<set attributeName="opacity" begin="0.6s" to="1" />
		<animate
		  fill="freeze"
		  attributeName="r"
		  begin="0.6s"
		  dur="0.4s"
		  values="10;6"
		/>
	  </circle>
	</svg>
  );
