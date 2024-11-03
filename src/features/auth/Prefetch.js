import { store } from "../../app/store";
import { notesApiSlice } from "../notes/notesApiSlice";
import { usersApiSlice } from "../users/usersApiSlice";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Prefetch = () => {
  useEffect(() => {
    store.dispatch(notesApiSlice.endpoints.getNotes.initiate());
    store.dispatch(usersApiSlice.endpoints.getUsers.initiate());
  }, []);

  return <Outlet />;
};
export default Prefetch;
