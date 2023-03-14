import WidgetUpload from "components/cloudinary/WidgetUpload";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
const AdminPageStyle = styled.div`
  /* style ở đây */
`;
const AdminPage = () => {
  const users = [
    {
      id: 1,
      full_name: "Longpro",
      address: "Nha Trang",
      phone_number: "0987654321",
      email: "long123@gmail.com",
      username: "test12345",
    },
    {
      id: 2,
      full_name: "Linh",
      address: "HCM",
      phone_number: "0969552196",
      email: "danglinh@gmail.com",
      username: "danglinh",
    },
    {
      id: 3,
      full_name: "Phu Lon",
      address: "Phu Yen",
      phone_number: "01234567",
      email: "phutran@gmail.com",
      username: "phutran",
    },
  ];

  return (
    <AdminPageStyle>
      {users.map((user) => {
        return (
          <>
            <p>ID {user.id}</p>
            <p>full_name {user.full_name}</p>
            <p>address {user.address}</p>
            <p>phone_number {user.phone_number}</p>
            <p>email {user.email}</p>
            <p>username {user.username}</p>
          </>
        );
      })}
      <WidgetUpload></WidgetUpload>
    </AdminPageStyle>
  );
};

export default AdminPage;
