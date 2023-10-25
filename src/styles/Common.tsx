import {portfolioTheme} from "./PortfolioTheme";

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    fMin?: number
    fMax?: number
}

export const font = ({family, weight, color, lineHeight, fMin, fMax}: FontPropsType) => `
    font-family: ${family || "Poppins"};
    font-weight: ${weight || 400};
    color: ${color || portfolioTheme.colors.font};
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vh - 360px)/(1440 - 360) * (${fMax} - ${fMin}) + ${fMin}px );
`