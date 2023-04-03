import React, { useState } from "react";

import {
  Container,
  IconCardContainer
} from "../Card/CardStyle";
import Iconcomponent from "../Icon/Iconcomponent.tsx";
import Imagecomponent from "../Image/Imagecomponent.tsx";
import Labelcomponent from "../Label/Labelcomponent.tsx";

export default function Cardcomponent() {
  const [CardData, SetCardData] = useState<{
    imagedata: string;
    title: string;
    subtitle: string;
  }>({
    imagedata:
      "https://www.simpleimageresizer.com/_uploads/photos/1830eada/kingfisher-2046453__340_50.jpg",
    title: "List Item Title",
    subtitle: "List Item Subtitle",
  });

  console.log("in card compoenent" + CardData.imagedata);

  return (
    <div role="root">
      <Container>
        <Imagecomponent
          imgdata={CardData.imagedata}
          data-testid="Imagecomponent"
        />

        <Labelcomponent
          labeldatahead={CardData.title}
          labeldatasubhead={CardData.subtitle}
          data-testid="Labelcardcontainer"
        />
        <IconCardContainer>
          <Iconcomponent data-testid="Iconcomponent" />
        </IconCardContainer>
      </Container>
    </div>
  );
}
