export function EvidenceMatrix({ rows }: { rows: readonly (readonly [string, string])[] }) {
  return (
    <div className="rw-evidence-matrix">
      {rows.map(([artifact, value], index) => (
        <div key={artifact} className={`grid gap-4 p-4 md:grid-cols-[220px_1fr] ${index < rows.length - 1 ? "rw-evidence-row" : ""}`}>
          <strong>{artifact}</strong>
          <span className="rw-body">{value}</span>
        </div>
      ))}
    </div>
  );
}
