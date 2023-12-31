import { AddModerator, Favorite, Restore } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";


/**
 * Renders bottom navigation to profile page
 * @param {Array} List of projects
 * @returns {JSX.Element}
 */
function SelectHeader({ handleProjectList }) {
  const [value, setValue] = useState("My Projects");

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction onClick={() => handleProjectList(1)} label="My Projects" icon={<AddModerator />} />
      <BottomNavigationAction onClick={() => handleProjectList(2)} label="Joined Projects" icon={<Favorite />} />
      <BottomNavigationAction onClick={() => handleProjectList(3)} label="History" icon={<Restore />} />
    </BottomNavigation>
  );
}

export default SelectHeader;
