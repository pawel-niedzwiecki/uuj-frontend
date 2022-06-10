import styled from "styled-components";
import { MainSettingsTemplate } from "types/types.mainSettingsTemplate";

export const Section = styled.section`
  width: 100%;
  position: relative;
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.big} 0;

  /**
* ----------------------------------------------
* Demo styles
* ----------------------------------------------
**/
  .accordion {
    border: 0.3rem solid ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorBorder};
  }

  .accordion__item + .accordion__item {
    border-top: 0.3rem solid ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorBorder};
  }

  .accordion__button {
    width: 100%;
    border: none;
    padding: 18px;
    cursor: pointer;
    text-align: left;
    font-weight: bold;
    color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorLinkPrimmary};
  }

  .accordion__button:hover {
    background-color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorPostPrimmaryBg};
  }

  .accordion__button:before {
    content: "";
    width: 10px;
    height: 10px;
    margin-right: 12px;
    display: inline-block;
    transform: rotate(-45deg);
    border-right: 0.3rem solid ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorLinkPrimmary};
    border-bottom: 0.3rem solid ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorLinkPrimmary};
  }

  .accordion__button[aria-expanded="true"]::before,
  .accordion__button[aria-selected="true"]::before {
    transform: rotate(45deg);
  }

  [hidden] {
    display: none;
  }

  .accordion__panel {
    padding: 20px;
    animation: fadein 0.35s ease-in;
  }

  /* -------------------------------------------------- */
  /* ---------------- Animation part ------------------ */
  /* -------------------------------------------------- */

  @keyframes fadein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const Header = styled.h2`
  width: 100%;
  display: block;
  text-align: center;
  margin-bottom: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.big};
`;
