import { MainSettingsTemplate } from "types/types.mainSettingsTemplate";

const settings: MainSettingsTemplate = {
  // settings color
  colorTextPrimmary: "#000",
  colorTextSecound: "#FFF",
  colorTextDesactive: "#959595",
  colorLinkPrimmary: "#000",
  colorLinkActivePrimmary: "#505050",
  colorLinkSecound: "#FFF",
  colorLinkActiveSecound: "#000",
  colorPrimmaryBg: "#FFF",
  colorSecoundBg: "#FFCC00",
  colorBorder: "#000",
  colorButtonBg: "#000",
  colorPostPrimmaryBg: "#CCC",
  colorDangerBg: "rgba(255, 0, 0, 0.1)",
  colorDangerBorder: "red",
  colorSuccessBorder: "green",
  colorSuccessBg: "rgba(0, 128, 0, 0.1)",

  // settings break
  break: { small: "0.75rem", main: "1.5rem", big: "3rem" },

  // settings breakpoint
  breakPoint: [
    { type: "xs", break: "0px" },
    { type: "sm", break: "540px" },
    { type: "md", break: "768px" },
    { type: "lg", break: "960px" },
    { type: "xl", break: "1140px" },
    { type: "xxl", break: "1320px" },
  ],

  gridCol: 12,

  // settings max width
  max_width: "128rem",
};

export default settings;
