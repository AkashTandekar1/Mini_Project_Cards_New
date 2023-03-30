import React, { useState } from "react";
import Imagecomponent from "../Image/Imagecomponent.tsx";
import Labelcomponent from "../Label/Labelcomponent.tsx";
import Iconcomponent from "../Icon/Iconcomponent.tsx";
import {
  Container,
  CardContainer,
  LabelCardContainer,
  IconCardContainer,
} from "../Card/CardStyle";

export default function Cardcomponent() {
  const [CardData, SetCardData] = useState<{
    imagedata: string;
    title: string[];
  }>({
    imagedata:
      "https://www.simpleimageresizer.com/_uploads/photos/79b43382/kingfisher-2046453__340_50.jpg",
    title: ["List Item Title", "List Item Title Subtitle"]
  });

  return (
    <div role='root'>
      <Container data-testid="child">
        <CardContainer>
          <Imagecomponent imgdata={CardData} />
        </CardContainer>

        <LabelCardContainer>
          <Labelcomponent labeldata={CardData} />
        </LabelCardContainer>

        <IconCardContainer>
          <Iconcomponent />
        </IconCardContainer>
        
      </Container>
    </div>
  );
}
