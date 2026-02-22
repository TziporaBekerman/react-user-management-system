import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function useAuth(idToCheck) {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (!user) {
            setIsAuthorized(false);
            navigate('/login');
            return;
        }

        if (user.id === idToCheck) {
            setIsAuthorized(true); 
        } else {
            setIsAuthorized(false);
            navigate('/login'); // ID לא תואם -> עמוד "לא מורשה"
        }
    }, [idToCheck, navigate]);

    return isAuthorized;
}
