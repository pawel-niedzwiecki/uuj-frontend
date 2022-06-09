import styled, { css } from "styled-components";
import { MainSettingsTemplate } from "types/types.mainSettingsTemplate";

export const Section = styled.section`
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.big} 0;

  .carousel {
    .control-arrow,
    &.carousel-slider .control-arrow {
      -webkit-transition: all 0.25s ease-in;
      -moz-transition: all 0.25s ease-in;
      -ms-transition: all 0.25s ease-in;
      -o-transition: all 0.25s ease-in;
      transition: all 0.25s ease-in;
      opacity: 0.4;
      filter: alpha(opacity = 40);
      position: absolute;
      z-index: 2;
      top: 20px;
      background: none;
      border: 0;
      font-size: 32px;
      cursor: pointer;
    }

    .control-arrow {
      &:focus,
      &:hover {
        opacity: 1;
        filter: alpha(opacity = 100);
      }

      &:before {
        margin: 0 5px;
        display: inline-block;
        border-top: 2rem solid transparent;
        border-bottom: 2rem solid transparent;
        content: "";
      }
    }

    &.carousel-slider .control-arrow:before {
      margin: 0 -5px;
      display: inline-block;
      border-top: 2rem solid transparent;
      border-bottom: 2rem solid transparent;
      content: "";
    }

    .control-disabled.control-arrow {
      opacity: 0;
      filter: alpha(opacity = 0);
      cursor: inherit;
      display: none;
    }

    .control-prev.control-arrow {
      left: 0;

      &:before {
        border-right: 2rem solid #000000;
      }
    }

    .control-next.control-arrow {
      right: 0;

      &:before {
        border-left: 2rem solid #000000;
      }
    }
  }

  .carousel-root {
    outline: none;
  }

  .carousel {
    position: relative;
    width: 100%;

    * {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }

    img {
      width: 100%;
      display: inline-block;
      pointer-events: none;
    }

    .carousel {
      position: relative;
    }

    .control-arrow {
      outline: 0;
      border: 0;
      background: none;
      top: 50%;
      margin-top: -13px;
      font-size: 4rem;
    }

    .thumbs-wrapper {
      margin: 20px;
      overflow: hidden;
    }

    .thumbs {
      -webkit-transition: all 0.15s ease-in;
      -moz-transition: all 0.15s ease-in;
      -ms-transition: all 0.15s ease-in;
      -o-transition: all 0.15s ease-in;
      transition: all 0.15s ease-in;
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      -o-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      position: relative;
      list-style: none;
      white-space: nowrap;
    }

    .thumb {
      -webkit-transition: border 0.15s ease-in;
      -moz-transition: border 0.15s ease-in;
      -ms-transition: border 0.15s ease-in;
      -o-transition: border 0.15s ease-in;
      transition: border 0.15s ease-in;
      display: inline-block;
      margin-right: 6px;
      white-space: nowrap;
      overflow: hidden;
      border: 3px solid #fff;
      padding: 2px;

      &:focus {
        border: 3px solid #ccc;
        outline: none;
      }

      &.selected,
      &:hover {
        border: 3px solid #333;
      }

      img {
        vertical-align: top;
      }
    }

    &.carousel-slider {
      position: relative;
      margin: 0;
      overflow: hidden;

      .control-arrow {
        top: 0;
        color: #fff;
        font-size: 26px;
        bottom: 0;
        margin-top: 0;
        padding: 5px;

        &:hover {
          background: rgba(0, 0, 0, 0.2);
        }
      }
    }

    .slider-wrapper {
      overflow: hidden;
      margin: auto;
      width: 100%;
      -webkit-transition: height 0.15s ease-in;
      -moz-transition: height 0.15s ease-in;
      -ms-transition: height 0.15s ease-in;
      -o-transition: height 0.15s ease-in;
      transition: height 0.15s ease-in;

      &.axis-horizontal .slider {
        -ms-box-orient: horizontal;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -moz-flex;
        display: -webkit-flex;
        display: flex;

        .slide {
          flex-direction: column;
          flex-flow: column;
        }
      }

      &.axis-vertical {
        -ms-box-orient: horizontal;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -moz-flex;
        display: -webkit-flex;
        display: flex;

        .slider {
          -webkit-flex-direction: column;
          flex-direction: column;
        }
      }
    }

    .slider {
      margin: 0;
      padding: 0;
      position: relative;
      list-style: none;
      width: 100%;

      &.animated {
        -webkit-transition: all 0.35s ease-in-out;
        -moz-transition: all 0.35s ease-in-out;
        -ms-transition: all 0.35s ease-in-out;
        -o-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;
      }
    }

    .slide {
      min-width: 100%;
      margin: 0;
      position: relative;
      text-align: center;

      img {
        width: 100%;
        vertical-align: top;
        border: 0;
      }

      iframe {
        display: inline-block;
        width: calc(100% - 80px);
        margin: 0 40px 40px;
        border: 0;
      }

      .legend {
        -webkit-transition: all 0.5s ease-in-out;
        -moz-transition: all 0.5s ease-in-out;
        -ms-transition: all 0.5s ease-in-out;
        -o-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
        position: absolute;
        bottom: 40px;
        left: 50%;
        margin-left: -45%;
        width: 90%;
        border-radius: 10px;
        background: #000;
        color: #fff;
        padding: 10px;
        font-size: 12px;
        text-align: center;
        opacity: 0.25;
        -webkit-transition: opacity 0.35s ease-in-out;
        -moz-transition: opacity 0.35s ease-in-out;
        -ms-transition: opacity 0.35s ease-in-out;
        -o-transition: opacity 0.35s ease-in-out;
        transition: opacity 0.35s ease-in-out;
      }
    }

    .control-dots {
      position: absolute;
      bottom: 0;
      margin: 10px 0;
      padding: 0;
      text-align: center;
      width: 100%;
      z-index: 1;

      .dot {
        -webkit-transition: opacity 0.25s ease-in;
        -moz-transition: opacity 0.25s ease-in;
        -ms-transition: opacity 0.25s ease-in;
        -o-transition: opacity 0.25s ease-in;
        transition: opacity 0.25s ease-in;
        opacity: 0.3;
        filter: alpha(opacity = 30);
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
        background: #000000;
        border-radius: 50%;
        width: 8px;
        height: 8px;
        cursor: pointer;
        display: inline-block;
        margin: 0 8px;

        &.selected,
        &:hover {
          opacity: 1;
          filter: alpha(opacity = 100);
        }
      }
    }

    .carousel-status {
      position: absolute;
      top: 0;
      right: 0;
      padding: 5px;
      font-size: 10px;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
      color: #fff;
    }

    &:hover .slide .legend {
      opacity: 1;
    }
  }

  @media (min-width: 960px) {
    .carousel .control-dots {
      bottom: 0;
    }
  }
`;

const styleForAllHeaders = css`
  width: 100%;
  display: block;
  text-align: center;
`;

export const Header = styled.h2`
  ${styleForAllHeaders}
  padding-bottom: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.small};
`;

export const Title = styled.strong`
  ${styleForAllHeaders}
`;

export const AllRating = styled.p`
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  align-items: center;
  padding-top: 0.6rem;
  padding-right: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.small};
`;

export const MeanRating = styled.div`
  display: flex;
  svg {
    width: 3rem;
    display: block;
    margin-right: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.small};
  }
`;

export const RatingBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main} 0;
  background-color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorSecoundBg};
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.big} ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
`;

export const RatingTitle = styled.h5`
  width: 100%;
  display: block;
  text-align: left;
  padding-bottom: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.small};
`;

export const RatingContent = styled.p`
  width: 100%;
  display: block;
  text-align: left;
  padding-bottom: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
`;

export const RatingFaceAuthor = styled.div`
  width: 6rem;
  height: 6rem;
  overflow: hidden;
  border-radius: 100%;
  border: 0.3rem solid ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorBorder};
`;

export const RatingAuthorDataBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: calc(100% - 6rem);
  max-width: calc(100% - 6rem);
  padding-left: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
`;

export const RatingAuthorName = styled.strong`
  width: 100%;
  display: block;
  text-align: left;
`;

export const RatingDateAdds = styled.p`
  width: 100%;
  display: block;
  text-align: left;
  font-size: 1.2rem;
`;

export const RatingAuthor = styled.div`
  width: 100%;
  display: flex;
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.small} 0;

  svg {
    height: 1rem;
    display: block;
    padding-right: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.small};
  }
`;
