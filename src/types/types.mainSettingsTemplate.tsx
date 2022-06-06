export type MainSettingsTemplate = {
  colorTextPrimmary: string;
  colorTextSecound: string;
  colorTextDesactive: string;
  colorLinkPrimmary: string;
  colorLinkActivePrimmary: string;
  colorLinkSecound: string;
  colorLinkActiveSecound: string;
  colorPrimmaryBg: string;
  colorSecoundBg: string;
  colorBorder: string;
  colorButtonBg: string;
  colorPostPrimmaryBg: string;
  colorDangerBg: string;
  colorDangerBorder: string;
  colorSuccessBorder: string;
  colorSuccessBg: string;

  break: { small: string; main: string; big: string };
  breakPoint: { type: string; break: string }[];
  gridCol: number;
  max_width: string;
};
