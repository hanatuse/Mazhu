import React from "react";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { FaBoxes } from "react-icons/fa";
import { MdPlaylistAddCheckCircle } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";

const links = [{
    text: 'Add Bookmark', path: '.', icon: <BsBookmarkPlusFill />
}, {
    text: 'All Bookmarks', path: 'all-marks', icon: <FaBoxes />
}, {
    text: 'Status', path: 'stats', icon: <MdPlaylistAddCheckCircle />
}, {
    text: 'Profile', path: 'profile', icon: <ImProfile />
}, {
    text: 'Admin', path: 'admin', icon: <MdAdminPanelSettings />
}]

export default links