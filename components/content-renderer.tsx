function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export function ContentRenderer({ body }: { body: string }) {
  const lines = body.split("\n");
  const blocks: React.ReactNode[] = [];
  let listItems: string[] = [];

  function flushList() {
    if (listItems.length > 0) {
      blocks.push(
        <ul key={`list-${blocks.length}`}>
          {listItems.map((item) => (
            <li key={item}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushList();
      continue;
    }
    if (line.startsWith("## ")) {
      flushList();
      blocks.push(<h2 key={`h2-${blocks.length}`}>{line.slice(3)}</h2>);
      continue;
    }
    if (line.startsWith("### ")) {
      flushList();
      blocks.push(<h3 key={`h3-${blocks.length}`}>{line.slice(4)}</h3>);
      continue;
    }
    if (line.startsWith("- ")) {
      listItems.push(line.slice(2));
      continue;
    }
    flushList();
    blocks.push(<p key={`p-${blocks.length}`}>{renderInline(line)}</p>);
  }

  flushList();

  return <div className="rw-prose grid gap-5">{blocks}</div>;
}
