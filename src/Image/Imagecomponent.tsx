import React from "react";
import { data } from "../Interfaces/Card";
import { ImageContainer } from "./ImageStyle";


export default function Imagecomponent(imgdata: data) {


  console.log(imgdata.imgdata.imagedata);
  const { imgdata: { imagedata }} = imgdata;


  return (
    <div>
          <ImageContainer src={imagedata}>
          </ImageContainer>
       
     

    </div>
  );
}
