import { InputStyledInterface } from "./component.searchEngine.type";
import { MainSettingsTemplate } from "types/types.mainSettingsTemplate";
import styled, { css, StyledComponent, ThemeProps } from "styled-components";

export const Label: StyledComponent<any, any> = styled.label`
  width: 100%;
  display: block;
  position: relative;
  margin: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small} 0;
`;

export const Input: StyledComponent<any, any> = styled.input<InputStyledInterface>`
  width: 100%;
  border: none;
  height: 4rem;
  max-width: 100%;
  border-radius: 0;
  position: relative;
  -webkit-appearance: none;
  padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
  color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorTextPrimmary};
  background: ${({ theme, error }: { theme: MainSettingsTemplate; error: boolean }): string => (error ? theme.colorDangerBg : theme.colorPrimmaryBg)};
  border: 2px solid ${({ theme, error }: { theme: MainSettingsTemplate; error: boolean }): string => (error ? theme.colorDangerBorder : theme.colorBorder)};

  &[type="search"] {
    -webkit-appearance: none;
  }

  &::-webkit-contacts-auto-fill-button {
    visibility: hidden;
    display: none !important;
    pointer-events: none;
    position: absolute;
    right: 0;
  }

  &::-webkit-textfield-decoration-container {
    display: none; /* or whatever styling you want */
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorTextPrimmary};
  }
`;

export const ButtonSearch: StyledComponent<any, any> = styled.button`
  border: none;
  top: 0.75rem;
  right: 0.5rem;
  cursor: pointer;
  position: absolute;
  background-color: transparent;

  svg {
    height: 2rem;
    fill: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorLinkPrimmary};
  }

  &:hover {
    svg {
      fill: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorLinkActivePrimmary};
    }
  }
`;

export const SearchResultBox = styled.div`
  top: 3.8rem;
  width: 100%;
  z-index: 9999;
  position: absolute;
  border: 2px solid ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorBorder};
  border-top: 0 solid transparent;
  background: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorPrimmaryBg};
`;
export const SearchResultItem = styled.a`
  width: 100%;
  display: block;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  padding: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.main} ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.small};

  &:hover {
    background: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorSecoundBg};
  }
`;

export const SearchResultItemHeader = styled.span`
  width: 100%;
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorTextDesactive};
  padding: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.main} ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.small} 0 ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.small};
`;
