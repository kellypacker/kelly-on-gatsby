import { useEffect, useState } from 'react';
import { richTextFromMarkdown } from '@contentful/rich-text-from-markdown';

export function RichTextFromMarkdown(props) {
    const content = props.markdownContent;

    const [richTextContent, setRichTextContent] = useState();

    const getRichText = async (text) => {
        const documentReturned = await richTextFromMarkdown(text);
        // @ts-expect-error not sure of the type
        setRichTextContent(documentReturned);
    };

    useEffect(() => {
        getRichText(content);
    }, [content]);

    return <>{richTextContent}</>;
}

export default RichTextFromMarkdown;
