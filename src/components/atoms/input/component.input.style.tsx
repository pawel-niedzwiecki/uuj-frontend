import { InputStyledInterface } from "./component.input.type";
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
