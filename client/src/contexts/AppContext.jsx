import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    const { user, isSignedIn, isLoaded } = useUser()

    const [searchFilter, setSearchFilter] = useState({
        title: '',
        location: ''
    })

    const [isSearched, setIsSearched] = useState(false)
    const [jobs, setJobs] = useState([])
    const [showRecruiterLogin, setShowRecruiterLogin] = useState(false)
    const [showAdminLogin, setShowAdminLogin] = useState(false)

    // function to fetch jobs from api
    const fetchJobs = async () => {
        setJobs(jobsData)
    }

    // Sync Clerk user to MongoDB whenever a user logs in
    const syncUserToDB = async () => {
        if (!isLoaded || !isSignedIn || !user) return;
        try {
            await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/sync-user`,
                {
                    clerkId: user.id,
                    name: `${user.firstName || ""} ${user.lastName || ""}`.trim() || user.username || "User",
                    email: user.primaryEmailAddress?.emailAddress || "",
                    image: user.imageUrl || "",
                }
            );
            console.log("User synced to DB successfully");
        } catch (error) {
            console.error("Failed to sync user:", error.message);
        }
    };

    useEffect(() => {
        fetchJobs()
    }, [])

    // Trigger sync whenever login state changes
    useEffect(() => {
        if (isLoaded && isSignedIn) {
            syncUserToDB()
        }
    }, [isLoaded, isSignedIn, user])

    const value = {
        setSearchFilter, searchFilter,
        isSearched, setIsSearched,
        jobs, setJobs,
        showRecruiterLogin, setShowRecruiterLogin,
        showAdminLogin, setShowAdminLogin
    }

    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)
}
