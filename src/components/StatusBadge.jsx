import { statusLabel } from "../utils/status.js";

function StatusBadge({ status }) {
  return <span className={`badge ${status}`}>{statusLabel(status)}</span>;
}

export default StatusBadge;
