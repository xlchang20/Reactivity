import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { useNavigate, useParams, Link } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";

export default function ActivityDetail() {

    const navigate = useNavigate();

    const {id} = useParams();

    const {activity, isLoadingActivity} = useActivities(id);

    if (isLoadingActivity) return <Typography>Loading Application....</Typography>

    if (!activity) return <Typography>Activity Not Found.</Typography>

    return (
    <Card sx={{borderRadius: 3}}>
        <CardMedia 
            component='img'
            src={`/images/categoryImages/${activity.category}.jpg`}
        />
        <CardContent>
            <Typography variant="h5">{activity.title}</Typography>
            <Typography variant="subtitle1" sx={{fontWeight:'bold'}}>{activity.date}</Typography>
            <Typography variant="body1">{activity.description}</Typography>
        </CardContent>
        <CardActionArea>
            <Button component={Link} to={`/manage/${activity.id}`} color="primary">Edit</Button>
            <span onClick={() => navigate('/activities')} color="inherit">Cancel</span>
        </CardActionArea>
    </Card>
  )
}

