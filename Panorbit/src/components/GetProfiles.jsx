import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AppContest } from "../contextApi/ContextProvider";
import style from "../css/getprofile.module.css";

const GetProfiles = () => {
  const { data, loading, error, getAllData } = useContext(AppContest); // getting data from contest api

  useEffect(() => {
    getAllData();
  }, []);

  // -------- loading ---------
  if (loading) {
    return <h3 style={{ color: "teal" }}>Loading....</h3>;
  }

  // --------- error ---------
  if (error) {
    return <h3 style={{ color: "red" }}>server error....</h3>;
  }

  return (
    <div className={style.card_bottom}>
      {/* --------- Data maping ------ */}
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <NavLink
              to={`/homepage/${item.id}`}
            >
              <div className={style.maping_div}>
                <img src={item.profilepicture} alt="profile image" />
                <p>{item.name}</p>
              </div>
            </NavLink>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default GetProfiles;
