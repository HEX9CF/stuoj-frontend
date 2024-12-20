import katex from 'katex';
import 'katex/dist/katex.min.css';

export const renderLaTeX = (text: string): string => {
    try {
        // 正则表达式匹配所有 $...$ 之间的内容
        const regex = /\$(.*?)\$/g;
        let match;
        let result = text;

        while ((match = regex.exec(text)) !== null) {
            const formula = match[1];
            const renderedFormula = katex.renderToString(formula, {
                throwOnError: false,
            });

            // 使用渲染后的公式替换原字符串中的公式部分
            result = result.replace(`$${formula}$`, renderedFormula);
        }

        return result;
    } catch (error) {
        console.error('LaTeX rendering error:', error);
        return text;
    }
};