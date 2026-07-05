import { renderMarkdown } from "../utils/markdown.js";

function MarkdownContent({ markdown }) {
  return (
    <div className="prose" dangerouslySetInnerHTML={{ __html: renderMarkdown(markdown) }} />
  );
}

export default MarkdownContent;
