import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { FamousWizardsContext } from "./FamousWizardsContext";
import CircularProgress from "@mui/material/CircularProgress";
import CommonRoomError from "../CommonRoom/CommonRoomError";
import WizardsList from "./WizardsList";

const List = () => {
    const { status } = useContext(FamousWizardsContext);
    

    return (
        <Wrapper>
            {status === "loading" && <CircularProgress />}
            {status === "error" && <CommonRoomError />}
            {status === "idle" && <WizardsList />}            
        </Wrapper>
    );
};

export default List;

const Wrapper = styled.div``;