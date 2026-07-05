import TagPill from "./TagPill.jsx";

function FilterGroup({ label, options, selected, onToggle }) {
  return (
    <div className="filter-group">
      <span className="label">{label}</span>
      <div className="filter-options">
        {options.map((option) => (
          <TagPill
            key={option.value}
            label={option.display}
            interactive
            pressed={selected.has(option.value)}
            onToggle={() => onToggle(option.value)}
          />
        ))}
      </div>
    </div>
  );
}

export default FilterGroup;
