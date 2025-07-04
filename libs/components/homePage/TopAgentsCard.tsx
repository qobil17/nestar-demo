import { Stack } from "@mui/material";

const TopAgentsCard = () => {
  return (
    <Stack className="top-agent-card">
      <img src="/img/profile/ned.jpg" alt="" />
        <strong className="agent-title">Ned</strong>
        <span className="agents-type">Agent</span>
    </Stack>
  );
};

export default TopAgentsCard;
