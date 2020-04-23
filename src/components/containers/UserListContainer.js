import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../redux";
// parameter distructure
function UserListContainer({ userData, fetchUser }) {
  console.log("User Data : ", userData.data);
  useEffect(() => {
    fetchUser();
  }, []);
  return userData.loding ? (
    <h2>Loading Text....</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Uset Lis</h2>
      <div>
        {userData &&
          userData.data &&
          userData.data.map((user) => <p>{user.name}</p>)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
