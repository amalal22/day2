import { instance } from ".";

const getAllItem = async () => {
  console.log("first");
  const res = await instance.get("/mini-project/api/items");
  // console.log("red", res);
  return res.data;
};

const getItemById = async (_id) => {
  const res = await instance.get(`/mini-project/api/items/${_id}`);
  return res.data;
};
export { getAllItem, getItemById };
