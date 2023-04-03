import React from "react";

import { ImageContainer } from "./ImageStyle";

export default function Imagecomponent({ imgdata }:{imgdata:string}) {
  return (
    <div>
      <ImageContainer src={imgdata} alt="img"></ImageContainer>
    </div>
  );
}
