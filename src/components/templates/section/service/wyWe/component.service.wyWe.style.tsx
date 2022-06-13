import styled from "styled-components";
import { MainSettingsTemplate } from "types/types.mainSettingsTemplate";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  min-height: 40rem;
  text-align: center;
  position: relative;
  align-items: center;
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.big} 0;
  color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorTextPrimmary};
`;

export const Title = styled.h2`
  width: 100%;
  display: block;
  text-align: center;
  position: relative;
  padding-bottom: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 40rem;
  display: block;
  position: relative;
`;

export const DescriptionBox = styled.div`
  width: 100%;
  display: block;
  position: relative;
  text-align: justify;
  text-justify: inter-word;
  padding-top: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.big};
`;
