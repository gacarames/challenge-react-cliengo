import React from 'react';

export interface INewUser {
  name: string;
  email: string;
  phone: string;
  country: string;
}

export interface IUser extends INewUser {
  id: string;
}

export interface IUserProps {
  user: IUser;
}

export interface IUserItemProps extends IUserProps {
  user: IUser;
  onDelete: (id: string) => void;
  onEdit: (user: IUser) => void;
}

export interface IUserDisplayProps extends IUserProps {
  onDelete: (id: string) => void;
  onEditMode: () => void;
}

export interface IUserEditProps extends IUserProps {
  ref: React.RefObject<HTMLElement>;
  onEdit: (user: IUser) => void;
  onEditMode: () => void;
}
