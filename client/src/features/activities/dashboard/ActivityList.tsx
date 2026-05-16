import { Box, Typography } from "@mui/material";
import ActivityCard from "./ActivityCard";
import { useActivities } from "../../../lib/hooks/useActivities";

export default function ActivityList() {

  const {activities, isPending, error} = useActivities();

  if (!activities || isPending || error) return <Typography>Load Application....</Typography>
  
  return (
    <Box sx={{display: 'flex', flexDirection: 'Column', gap: 3}}>
        {activities.map(activity => (
            <ActivityCard 
              key={activity.id} 
              activity={activity} 
            />
        ))}
    </Box>
  )
}
