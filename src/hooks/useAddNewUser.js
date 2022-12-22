import axios from "../service/axios";

const useAddNewUser = () => {
  const addNewUser = async (user) => {
    try {
      const resp = await axios.post("/users/new-user", user);

      return resp;
    } catch (err) {
      console.error(err);
    }
  };

  return [addNewUser];
};

export default useAddNewUser;
