import axios from "axios";

export const postClientInformation = async (data = {}) => {
  let response = {};
  await axios
    .post("http://localhost:1100/record/add", { data: JSON.stringify(data) })
    .then((res) => {
      response = res;
    });
  return response;
};

export const approvalStatus = async () => {
  await axios.get("http://localhost:1100/approve_status").then((res) => {
    console.log(res);
  });
};
