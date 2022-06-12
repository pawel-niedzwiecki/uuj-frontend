import React from "react";
import { Article, Img, BoxContent, AuthorData, BoxAuthor, AuthorAvatar, Text } from "./component.animation.shortNews.style";

export const ComponentShortNewsAnimation = ({ last = false, style }: { last?: boolean; style?: any }) => (
  <Article last={last} style={style}>
    <Img />
    <BoxContent>
      <Text height={3.3} className="title" />
      <BoxAuthor>
        <AuthorAvatar />
        <AuthorData>
          <Text height={1.4} style={{ marginLeft: "0.5rem", marginBottom: "0.5rem" }} />
          <Text height={1} style={{ marginLeft: "0.5rem" }} />
        </AuthorData>
      </BoxAuthor>
      <Text height={7} />
      <Text height={2.5} style={{ width: "8rem", marginLeft: "auto", marginTop: "1rem" }} />
    </BoxContent>
  </Article>
);
