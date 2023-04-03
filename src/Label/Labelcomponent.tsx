import React from "react";

import { H2Container, H3Container } from "./LabelStyle";

interface BioProps {
  labeldatahead: string;
  labeldatasubhead: string;
}

export default function Labelcomponent({
  labeldatahead,
  labeldatasubhead,
}: BioProps) {
  return (
    <div>
      <H2Container title="h1">{labeldatahead}</H2Container>
      <H3Container title="h2">{labeldatasubhead}</H3Container>
    </div>
  );
}
