import { createContext, useState, useEffect, useContext } from 'react';
import api from '../utils/api';
import toast from 'react-hot-toast';
import { auth } from '../firebase';
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider
} from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                // Perform backend sync
                (async () => {
                    try {
                        const token = await currentUser.getIdToken();
                        const { data } = await api.post('/auth/firebase', { token });
                        localStorage.setItem('accessToken', data.accessToken);
                        setUser(data);
                    } catch (error) {
                        console.error("Backend sync failed:", error.response?.data || error.message);
                        // Fallback to minimal user
                        setUser((prev) => prev ?? {
                            name: currentUser.displayName || 'User',
                            email: currentUser.email,
                            memberId: 'N/A',
                            walletBalance: 0,
                            capabilities: [
                                'can_view_dashboard',
                                'can_view_reports',
                                'can_edit_settings',
                                'can_place_order',
                                'can_add_money'
                            ],
                            role: 'ASSOCIATE_MEMBER'
                        });

                        if (error.response?.status === 403) {
                            await signOut(auth);
                            setUser(null);
                            toast.error("Account suspended");
                        } else {
                            toast.error("Unable to sync account. Limited features available.");
                        }
                    } finally {
                        setLoading(false);
                    }
                })();
            } else {
                localStorage.removeItem('accessToken');
                setUser(null);
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success('Login successful!');
            return true;
        } catch (error) {
            console.error('Login Error:', error);
            const message = error.message || 'Login failed';
            toast.error(message);
            return false;
        }
    };

    const register = async (email, password, additionalData) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const token = await userCredential.user.getIdToken();
            const { data } = await api.post('/auth/firebase', { 
                token,
                ...additionalData
            });
            localStorage.setItem('accessToken', data.accessToken);
            setUser(data);
            toast.success('Registration successful!');
            return true;
        } catch (error) {
             console.error('Registration Error:', error);
            const message = error.message || 'Registration failed';
            toast.error(message);
            return false;
        }
    };

    const googleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            toast.success('Google Login successful!');
            return true;
        } catch (error) {
            if (error?.code === 'auth/popup-blocked') {
                const provider = new GoogleAuthProvider();
                await signInWithRedirect(auth, provider);
                return true;
            }
            const message = error?.message || 'Google Login failed';
            toast.error(message);
            return false;
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('accessToken');
            setUser(null);
            toast.success('Logged out');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const changePassword = async (currentPassword, newPassword) => {
        try {
            const user = auth.currentUser;
            if (!user) throw new Error('No user logged in');

            // Re-authenticate user
            const credential = EmailAuthProvider.credential(user.email, currentPassword);
            await reauthenticateWithCredential(user, credential);

            // Update password
            await updatePassword(user, newPassword);
            toast.success('Password updated successfully');
            return true;
        } catch (error) {
            console.error('Password Update Error:', error);
            const message = error.message || 'Failed to update password';
            toast.error(message);
            return false;
        }
    };

    const hasCapability = (capability) => {
        return user?.capabilities?.includes(capability) || false;
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, googleLogin, logout, hasCapability, changePassword }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
