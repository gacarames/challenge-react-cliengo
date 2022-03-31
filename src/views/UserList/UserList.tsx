import React, { FC } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { deleteUser, updateUser } from "../../redux/slices/userSlice";
import User from "../../components/User";
import { IUser } from "../../utils/interfaces";
import { StyledListHeader, StyledListBody } from "./styled";
import { StyledHeading } from "../../components/styledComponents";

const UserList: FC = (): JSX.Element => {
  const dispatch = useDispatch()

  const users = useSelector((state: RootStateOrAny) => state.users.users);

  const handleDeleteUser = (id: string) => {
    dispatch(deleteUser({ id: id }))
  }

  // const handleUpdateUser = (user: IUser) => {
  //   dispatch(updateUser({ ...user }))
  // }

  const handleUpdateUser = (data: any): void => {
    console.log(data);
    dispatch(
      updateUser({
        id: data.id,
        name: data.name,
        email: data.email,
        phone: data.phone,
        country: data.country
      })
    );
  };

  return (
    <section>
      <StyledHeading>User list</StyledHeading>
      <StyledListHeader>
        <ul>
          <li>Name</li>
          <li>Email</li>
          <li>Phone</li>
          <li>Country</li>
          <li>Actions</li>
        </ul>
      </StyledListHeader>
      <StyledListBody>
        {users && users.map((user: IUser, i: number): JSX.Element => (
          <li key={i}>
            <User
              user={user}
              onEdit={handleUpdateUser}
              onDelete={handleDeleteUser}
            />
          </li>
        ))}
      </StyledListBody>
    </section>
  );
};

export default UserList;
