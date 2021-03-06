import { MainSettingsTemplate } from "types/types.mainSettingsTemplate";
import { ButtonLinkInType, ButtonSubmitType, ButtonType } from "../types/component.button.type";
import styled, { css, CSSObject, FlattenInterpolation, StyledComponent, ThemeProps } from "styled-components";

export const styleDefault = css`
  display: flex;
  border: none;
  cursor: pointer;
  font-size: 1.6rem;
  align-items: center;
  transition: all 0.3s;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  justify-content: center;
  color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLinkPrimmary};
  background: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorButtonBg};
  border: 0.1rem solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};

  svg {
    fill: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLinkPrimmary};
  }

  &:hover {
    color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLinkActivePrimmary};
    background: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorPrimmaryBg};

    svg {
      fill: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLinkActivePrimmary};
    }
  }
`;

export const ButtonLinkIn: StyledComponent<any, ButtonLinkInType> = styled.a<ButtonLinkInType>`
  ${styleDefault}
  color: ${({ theme, active }: { theme: MainSettingsTemplate; active?: boolean }): string | false | undefined => active && theme.colorLinkActivePrimmary};
  background-color: ${({ theme, active }: { theme: MainSettingsTemplate; active?: boolean }): string | false | undefined => active && theme.colorPrimmaryBg};
`;

export const ButtonSubmit: StyledComponent<any, ButtonSubmitType> = styled.button<ButtonSubmitType>`
  ${styleDefault}
  color: ${({ theme, active }: { theme: MainSettingsTemplate; active?: boolean }): string | false | undefined => active && theme.colorLinkActivePrimmary};
  background-color: ${({ theme, active }: { theme: MainSettingsTemplate; active?: boolean }): string | false | undefined => active && theme.colorPrimmaryBg};
`;

export const Button: StyledComponent<any, ButtonSubmitType> = styled.button<ButtonSubmitType>`
  ${styleDefault}

  color: ${({ theme, active }: { theme: MainSettingsTemplate; active?: boolean }): string | false | undefined => active && theme.colorLinkActivePrimmary};
  background-color: ${({ theme, active }: { theme: MainSettingsTemplate; active?: boolean }): string | false | undefined => active && theme.colorPrimmaryBg};
  ${({ active }: { active?: boolean }) =>
    active &&
    css`
      cursor: no-drop;
    `};

  svg {
    fill: ${({ theme, active }: { theme: MainSettingsTemplate; active?: boolean }): string | false | undefined => active && theme.colorLinkActivePrimmary} !important;
  }
`;
