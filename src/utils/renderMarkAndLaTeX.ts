import { renderMarkDown } from "./renderMarkDown";
import { renderLaTeX } from "./renderLaTeX";

export const renderMarkAndLaTeX = (text: string) => {
    return renderMarkDown(renderLaTeX(text))
}