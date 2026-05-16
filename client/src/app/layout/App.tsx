import { useState } from "react"
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { useActivities } from "../../lib/types/hooks/useActivities";


function App() {
  const [selectedActivity, setSelectedActivity] 
    = useState<Activity | undefined>(undefined);
  const [editMode, SetEditMode] = useState(false);
  const {activities, isPending, error} = useActivities();

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities?.find((x: Activity) => x.id === id));
  };

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  };

  const handleOpenForm = (id?: string) => {
    if (id) handleSelectActivity(id);
    else handleCancelSelectActivity();
    SetEditMode(true);
  };

  const handleFormClose = () => {
    SetEditMode(false);
  };

  if (isPending) return <Typography>Load Application....</Typography>

  if (error) return <Typography>Error loading activities.</Typography>

  return (
    
    <Box sx={{bgcolor: '#eeeeee', minHeight: '100vh'}}>
      <CssBaseline />

      <NavBar openForm={handleOpenForm} />

      <Container maxWidth='xl' sx={{mt: 3}}>
        {!activities && isPending && error ? (
          <Typography>Loading Application....</Typography>
        ) : (
          <ActivityDashboard
            activities={activities ?? []}
            selectActivity={handleSelectActivity}
            cancelSelectActivity ={handleCancelSelectActivity}
            selectedActivity={selectedActivity}
            editMode={editMode}
            openForm={handleOpenForm}
            closeForm={handleFormClose}
          />
        )}
      </Container>
    </Box>
  )
}

export default App
//  function useQuery(
//   arg0: { queryKey: string[]; 
//   queryFn: () => Promise<Activity[]>; }): { data: any; } 
// {
//   throw new Error('Function not implemented. XC_App.tsx');
// }