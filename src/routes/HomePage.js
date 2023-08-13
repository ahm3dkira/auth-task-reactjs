import './HomePage.css';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
export default function HomePage() {
    return (
        <div className="homePage">
            <Stack spacing={2} direction="column" padding={4} alignItems="center" justifyContent="center">
                <h1> Welcome to the home page! </h1>
                <p>
                    {/* this is the home page for auth secrets app  */}
                    All users can see this page but only you can see your <Link to="/secret">secret</Link>.
                </p>
            </Stack>
        </div>
    );
}