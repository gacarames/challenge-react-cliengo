import React, { FC, useRef } from "react";
import { IUserItemProps } from "../../utils/interfaces";
import StyledUser from "./styled";
import useEdit from "../../hooks/useEdit";
import UserDisplay from "../UserDisplay";
import UserEdit from "../UserEdit";

const User: FC<IUserItemProps> = ({ user, onDelete, onEdit }): JSX.Element => {
  const [IsBeingEdited, setIsBeingEdited] = useEdit();
  const ref = useRef<HTMLElement>(null)

  const handleEditMode = () => {
    setIsBeingEdited()
  }

  return (
    <StyledUser>
      {IsBeingEdited ?
        <UserEdit ref={ref} user={user} onEdit={onEdit} onEditMode={handleEditMode} /> :
        <UserDisplay user={user} onDelete={onDelete} onEditMode={handleEditMode} />
      }
    </StyledUser>
  );
};

export default User;
