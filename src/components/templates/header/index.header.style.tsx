import Link from "next/link";
import styled from "styled-components";
import { MainSettingsTemplate } from "types/types.mainSettingsTemplate";

export const Header = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  display: block;
  position: fixed;
  z-index: 9999999;
  padding-top: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.small};
  background: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorSecoundBg};

  .brand {
    display: block;
    min-width: 9.5rem;
    position: relative;
    align-items: center;
    justify-content: center;
    margin-right: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};

    svg {
      display: block;
    }
  }

  .col {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    @media all and (min-width: 768px) {
      flex-wrap: nowrap;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: calc(100% - 168px);
  margin-right: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.small};

  @media all and (min-width: 768px) {
    max-width: 100%;
    margin-right: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.big};
  }
`;

interface MenuType {
  menuPower: boolean;
}

export const Menu = styled.ul<MenuType>`
  width: 100%;
  max-width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding-top: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
  display: ${({ menuPower }) => (menuPower ? "flex" : "none")};

  @media all and (min-width: 768px) {
    flex-wrap: nowrap;
    display: flex !important;
  }
`;

export const MenuItem = styled.li`
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  padding-bottom: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};

  @media all and (min-width: 768px) {
    padding-right: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
    &:last-child {
      padding-right: 0;
    }
  }
`;

interface BoxContactType {
  power: boolean;
}

export const BoxContact = styled.a<BoxContactType>`
  width: 100%;

  font-size: 2rem;
  padding: 1.5rem;
  font-weight: bold;
  justify-content: center;
  border: 0.3rem solid #fff;
  border-bottom: 0 solid #fff;
  display: ${({ power }) => (power ? "flex" : "none")};

  @media all and (min-width: 768px) {
    border-right: 0;
  }

  &:hover {
    color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorLinkPrimmary};
    background-color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorPrimmaryBg};
  }

  &:last-child {
    border-right: 0.3rem solid #fff;
  }
`;

export const Hambuger = styled.button`
  padding: 0;
  height: 3rem;
  border: none;
  display: flex;
  width: 3.5rem;
  cursor: pointer;
  position: relative;
  flex-direction: column;
  background-color: transparent;
  justify-content: space-between;
  margin-left: ${({ theme }) => theme.break.main};

  @media all and (min-width: 768px) {
    display: none;
  }

  span {
    left: 0;
    width: 100%;
    height: 0.3rem;
    transition: all 0.3s;
    background-color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorLinkPrimmary};
  }

  &:hover {
    span {
      background-color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorLinkActivePrimmary};

      &:nth-child(1) {
        animation-duration: 2s;
        animation-name: hambugerFirstLine;
        animation-iteration-count: infinite;

        @keyframes hambugerFirstLine {
          0% {
            width: 100%;
          }
          25% {
            width: 10%;
          }
          50% {
            width: 100%;
          }
          75% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }
      }
      &:nth-child(2) {
        animation-duration: 1.3s;
        animation-name: hambugerSecondLine;
        animation-iteration-count: infinite;

        @keyframes hambugerSecondLine {
          0% {
            width: 100%;
          }
          25% {
            width: 20%;
          }
          50% {
            width: 100%;
          }
          75% {
            width: 50%;
          }
          100% {
            width: 100%;
          }
        }
      }
      &:nth-child(3) {
        animation-duration: 1.3s;
        animation-name: hambugerThirdLine;
        animation-iteration-count: infinite;

        @keyframes hambugerThirdLine {
          0% {
            width: 100%;
          }
          25% {
            width: 10%;
          }
          50% {
            width: 100%;
          }
          75% {
            width: 90%;
          }
          100% {
            width: 100%;
          }
        }
      }
    }
  }
`;
