import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDown,
    faAngleUp,
    faAngleDoubleUp,
} from "@fortawesome/free-solid-svg-icons";

const PriorityIcon = (props) => {
    let icon;
    let color;

    if (props.priority === "low") {
        icon = faAngleDown;
        color = "green";
    } else if (props.priority === "medium") {
        icon = faAngleUp;
        color = "orange";
    } else if (props.priority === "high") {
        icon = faAngleDoubleUp;
        color = "red";
    } else return null;

    return (
        <span data-toggle="tooltip" title={props.priority}>
            <FontAwesomeIcon icon={icon} size={props.size} color={color} />
        </span>
    );
};

export default PriorityIcon;
