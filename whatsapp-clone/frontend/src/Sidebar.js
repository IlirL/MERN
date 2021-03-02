import React from 'react'
import './Sidebar.css'

import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import { Avatar, IconButton } from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVerticon from '@material-ui/icons/MoreVert'
import {SearchOutlined} from '@material-ui/icons'
import SidebarChat from './SidebarChat'
function Sidebar() {
    return (
        <div className  = "sidebar">
            {/* <h1>I am a sidebar</h1> */}
        <div className="sidebar__header">
           <Avatar src = 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png'/>
           
            <div className="sidebar__headerRight">
                <IconButton>
                     <DonutLargeIcon />
                 </IconButton>
                
            <IconButton>
                <ChatIcon/>
            </IconButton>
            <IconButton>
                <MoreVerticon />
            </IconButton>
           
            </div>
        </div>

        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <SearchOutlined />
                <input placeholder = "Search or Start new Chat" type = "text"/>
            </div>
        </div>

        <div className="sidebar__chats">
            <SidebarChat />
             <SidebarChat />
             <SidebarChat />
        </div>

        </div>
    )
}

export default Sidebar
