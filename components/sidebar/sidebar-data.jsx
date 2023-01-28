import React from 'react'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SettingsIcon from '@mui/icons-material/Settings';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

export const SidebarData = [
    {
        title: "Admin Permissions",
        icon: <AdminPanelSettingsIcon />,
        link: '/admin/permissions'
    },
    {
        title: "Website Settings",
        icon: <SettingsIcon />,
        link: '/admin/settings'
    },
    {
        title: "Placeholder",
        icon: <AddReactionIcon />,
        link: '/admin/placeholder1'
    },
    {
        title: "Placeholder 2",
        icon: <AddToPhotosIcon />,
        link: '/admin/placeholder2'
    }
]