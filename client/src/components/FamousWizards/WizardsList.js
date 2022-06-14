import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { FamousWizardsContext } from "./FamousWizardsContext";
import { NavLink } from "react-router-dom";

const WizardsList = () => {
  const { famousWizards } = useContext(FamousWizardsContext);

  // Sorting in alphabetic order
  famousWizards.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <Wrapper>
      {famousWizards.map((wizard, index) => {
        return (
          <Name
            key={`wizardKey: ${wizard.name}, ${index}`}
            to={`/famous-wizard/${wizard.name}`}
          >{`${wizard.name}`}</Name>
        );
      })}
    </Wrapper>
  );
};

export default WizardsList;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
`;

const Name = styled(NavLink)``;
