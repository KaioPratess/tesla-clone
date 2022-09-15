import { useEffect, useRef } from 'react';

function ArrowDown(props) {
  const arrow = useRef();

  useEffect(() => {
    if (props.currentSec === 'Model 3') {
      arrow.current.style.visibility = 'visible';
      setTimeout(() => {
        arrow.current.classList.add('bounce');
      }, 2000);
    } else {
      arrow.current.style.visibility = 'hidden';
    }
  }, [props.currentSec]);

  return (
    <>
      <a
        href={props.link}
        className="arrow-down fade-in-top"
        ref={arrow}
        onClick={props.goTo}
      >
        <svg
          width="38px"
          height="38px"
          viewBox="0 0 24 24"
          id="arrow_down"
          data-name="arrow down"
        >
          <defs>
            <clipPath id="clip-path">
              <rect
                id="Mask"
                width="24"
                height="24"
                fill="none"
                stroke="#393c41"
                strokeWidth="1"
              />
            </clipPath>
          </defs>
          <g
            id="_20x20_arrow-back--grey"
            data-name="20x20/arrow-back--grey"
            transform="translate(0 24) rotate(-90)"
          >
            <rect
              id="Mask-2"
              data-name="Mask"
              width="24"
              height="24"
              fill="none"
            />
            <g
              id="_20x20_arrow-back--grey-2"
              data-name="20x20/arrow-back--grey"
              clipPath="url(#clip-path)"
            >
              <g id="Group_2" data-name="Group 2" transform="translate(8 7)">
                <path
                  id="Rectangle"
                  d="M0,6.586V0H6.586"
                  transform="translate(0.686 5.157) rotate(-45)"
                  fill="none"
                  stroke="#393c41"
                  strokeMiterlimit="10"
                  strokeWidth="1.5"
                />
              </g>
            </g>
          </g>
        </svg>
      </a>
    </>
  );
}

export default ArrowDown;
