export const deleterec = (payload) => {
  return {
    type: "DELETE",
    payload,
  };
};
export const editrec = (payload) => {
  return {
    type: "EDIT",
    payload,
  };
};
export const canceupdate = (payload) => {
  return {
    type: "CANCEL",
    payload,
  };
};
export const updatedata = (payload) => {
  return {
    type: "UPDATE",
    payload,
  };
};
export const changeadd = (payload) => {
  return {
    type: "ADD",
    payload,
  };
};
export const addnewrec = (payload) => {
  return {
    type: "ADD_NEW",
    payload,
  };
};
