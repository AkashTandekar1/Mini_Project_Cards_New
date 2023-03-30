import React from 'react'
import { data } from "../Interfaces/Card";
import { H2Container,H3Container } from './LabelStyle';


export default function Labelcomponent(labeldata:data) {



   const {labeldata : { title : [Title1, Title2] }} = labeldata


  return (
       <div>
         <H2Container>{Title1}</H2Container>
         <H3Container>{Title2}</H3Container>
       </div>
  )




}
