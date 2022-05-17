import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { IUser } from "./types/types";

const UsersItemPage: React.FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get<IUser>(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(response.data);
      } catch (error) {
        alert(error);
      }
    }
    fetchUser();
  }, [id]);

  return (
    <div>
      <button
        style={{ margin: 10 }}
        type="button"
        onClick={() => navigate("/users")}
      >
        Go back
      </button>
      <h1>Сторінка користувача {user?.name}</h1>
      <div style={{}}>
        <b>Місто: </b> {user?.address.city}
        <br />
        <b>Адреса: </b>
        {user?.address.street}
        <br />
        <b>Поштовий код: </b>
        {user?.address.zipcode}
        <br />
        <b>Email: </b>
        {user?.email}
      </div>
    </div>
  );
};

export default UsersItemPage;
