type Props = { markdown: string };

export default function LegalDocument({ markdown }: Props) {
  const blocks = parseMarkdown(markdown);
  return (
    <main className="min-h-screen bg-cream-50 py-20">
      <div className="container-x max-w-3xl mx-auto">
        <article className="legal-prose">
          {blocks.map((block, i) => {
            if (block.type === 'h1') return <h1 key={i}>{block.text}</h1>;
            if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>;
            if (block.type === 'h3') return <h3 key={i}>{block.text}</h3>;
            if (block.type === 'p') return <p key={i} dangerouslySetInnerHTML={{ __html: inlineFormat(block.text) }} />;
            if (block.type === 'ul') return (
              <ul key={i}>{block.items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />)}</ul>
            );
            if (block.type === 'table') return (
              <table key={i}>
                <thead><tr>{block.headers.map((h, j) => <th key={j} dangerouslySetInnerHTML={{ __html: inlineFormat(h) }} />)}</tr></thead>
                <tbody>{block.rows.map((row, j) => <tr key={j}>{row.map((cell, k) => <td key={k} dangerouslySetInnerHTML={{ __html: inlineFormat(cell) }} />)}</tr>)}</tbody>
              </table>
            );
            return null;
          })}
        </article>
      </div>
    </main>
  );
}

type Block =
  | { type: 'h1' | 'h2' | 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] };

function parseMarkdown(src: string): Block[] {
  const lines = src.split('\n');
  const blocks: Block[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith('# ')) { blocks.push({ type: 'h1', text: line.slice(2).trim() }); i++; }
    else if (line.startsWith('## ')) { blocks.push({ type: 'h2', text: line.slice(3).trim() }); i++; }
    else if (line.startsWith('### ')) { blocks.push({ type: 'h3', text: line.slice(4).trim() }); i++; }
    else if (line.startsWith('- ')) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith('- ')) { items.push(lines[i].slice(2).trim()); i++; }
      blocks.push({ type: 'ul', items });
    } else if (line.startsWith('|') && lines[i + 1] && lines[i + 1].startsWith('|')) {
      const headers = line.split('|').map((c) => c.trim()).filter(Boolean);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith('|')) { rows.push(lines[i].split('|').map((c) => c.trim()).filter(Boolean)); i++; }
      blocks.push({ type: 'table', headers, rows });
    } else if (line.trim()) { blocks.push({ type: 'p', text: line.trim() }); i++; }
    else { i++; }
  }
  return blocks;
}

function inlineFormat(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}