import { Link } from 'react-router-dom';
import './ContactUs.css';
import { Stack } from '@mui/material';
export default function ContactUs() {
    return (
        <div className="contactUs">
            <Stack spacing={2} direction="column" padding={4} alignItems="center" justifyContent="center">
                <h1>Contact Us</h1>
                <p>  You can contact us at blah blah blah. </p>
                <Link to="/">Go back to the home page</Link>
            </Stack>
        </div>
    );
}