// Renders a static tag chip by default. Pass `interactive` + `pressed` +
// `onToggle` to use it as a toggleable filter button instead (used in
// ArchiveScreen for the status and tag filters).
function TagPill({ label, interactive = false, pressed = false, onToggle }) {
  if (!interactive) {
    return <span className="tag">{label}</span>;
  }

  return (
    <button
      type="button"
      className="tag"
      aria-pressed={pressed}
      onClick={onToggle}
    >
      {label}
    </button>
  );
}

export default TagPill;
