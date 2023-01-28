import styled from "styled-components";
import { SidebarData } from "./sidebar-data";

const SidebarContainer = styled.div`
    height: 100px;
    width: 300px;
    background-color: #2F4050;
`

const SidebarList = styled.ul`
    height: auto;
    width: 100%;
    padding: 0;

`

const SidebarRow = styled.li`
    width: 100%;
    height: 60px;
    border: 1px solid black;
    list-style-type: none;
    margin: 0;
    display: flex;
    flex-direction: row;
    color: white;
    justify-content: center;
    align-items: center;
`

const SidebarIcon = styled.div`
    flex: 30%;
    display: grid;
    place-items: center;
`

const SidebarTitle = styled.div`
    flex: 70%;

`

export default function Sidebar() {


    return (
        <SidebarContainer>
            <SidebarList>
                {SidebarData.map((val, key) => {
                    return (
                        <SidebarRow key={key} onClick={() => { window.location.pathname = val.link }}>
                            <SidebarIcon>{val.icon}</SidebarIcon>
                            <SidebarTitle>{val.title}</SidebarTitle>
                        </SidebarRow>
                    )
                })}
            </SidebarList>

        </SidebarContainer>
    )
}