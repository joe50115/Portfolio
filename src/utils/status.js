export function statusLabel(status) {
  return { completed: "Completed", "in-progress": "In Progress", planned: "Planned" }[status] || status;
}

export const ALL_STATUSES = ["completed", "in-progress", "planned"];
