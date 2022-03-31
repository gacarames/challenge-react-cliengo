import React, { FC } from "react";
import { IUserDisplayProps } from "../../utils/interfaces";
import { StyledPrimaryButton, StyledDeleteButton } from "../styledComponents";

const UserDisplay: FC<IUserDisplayProps> = ({ user, onDelete, onEditMode }) => {
    return (
        <>
            <span>{user.name}</span>
            <span>{user.email}</span>
            <span>{user.phone}</span>
            <span>{user.country}</span>
            <span>
                <StyledPrimaryButton onClick={onEditMode} >&#x270e;</StyledPrimaryButton>
                {' '}< StyledDeleteButton onClick={() => onDelete(user.id)} >&times;</StyledDeleteButton></span>
        </>
    )
}

export default UserDisplay