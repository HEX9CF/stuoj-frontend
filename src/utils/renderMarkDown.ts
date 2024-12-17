import { marked } from 'marked';

export const renderMarkDown = (text: string) => {
    return marked(text);
}