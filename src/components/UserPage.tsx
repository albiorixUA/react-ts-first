import React, { useEffect, useState } from "react";
import { IUser } from "./types/types";
import axios from "axios";
import List from "./List";
import UserItem from "./UserItem";
import { useNavigate } from "react-router";

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get<IUser[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        alert(error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <UserItem
          onClick={() => navigate(`${user.id}`)}
          user={user}
          key={user.id}
        />
      )}
    />
  );
};

export default UserPage;
