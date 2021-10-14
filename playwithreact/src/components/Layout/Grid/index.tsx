import * as React from "react";
import Footer from "../../Footer";
import {
  GridContainer,
  GridFooter,
  GridMan,
  Main,
  SubgridContainer,
} from "./Grid.css";

const Grid = () => {
  return (
    <GridContainer>
      <Main>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tenetur,
        natus, maxime ut reiciendis tempore rerum dignissimos nulla, dolorum
        blanditiis magnam fuga pariatur. Fugiat hic mollitia repellat laudantium
        consequuntur nihil. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Dolorum iusto reiciendis quod deleniti amet sint nisi eos quaerat
        perspiciatis, ea ipsam repellat vel laboriosam aliquam placeat
        provident, suscipit deserunt. Alias. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Quas, eius! Minus, ratione! Totam
        assumenda ratione incidunt saepe ea harum maxime iusto repellat
        dignissimos numquam! Tempora autem voluptatum nesciunt voluptates
        adipisci!
      </Main>
      <SubgridContainer>
        <GridMan rowStart={3} colStart={2} rowEnd={4} colEnd={4} />
        {/* <GridMan />
          <GridMan />
          <GridMan />
          <GridMan />
          <GridMan />
          <GridMan /> */}
      </SubgridContainer>

      <GridFooter>
        <Footer />
      </GridFooter>
    </GridContainer>
  );
};
export default Grid;
