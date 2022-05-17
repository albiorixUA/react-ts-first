import React from "react";
import { IUser } from "./types/types";

interface UserItemsProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: React.FC<UserItemsProps> = ({ user, onClick }) => {
  return (
    <div onClick={() => onClick(user)} style={{ padding: 15 }}>
      {user.id}. {user.name} проживає в місті {user.address.city} на вулиці{" "}
      {user.address.street}
    </div>
  );
};

export default UserItem;
