import styled from "styled-components";

export const OuterWrapper = styled.div` //section?
width: 100%;
height: 100%;
display: flex;
`

export const InnerWrapper = styled.div`` //section?

const sizes = {
    tablet: '668px',
    laptop: '1024px',
    desktop: '2560px'
};

export const Devices = {
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    desktop: `(min-width: ${sizes.desktop})`
};