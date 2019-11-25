import {userService} from "../service";

export const listActions = {
  addServiceToList,
  removeServiceFromList
};

function addServiceToList(service) {
  let user = userService.getLoggedInUser();

  let serviceList = user.serviceList;
  if (!serviceList) {
    serviceList = [];
  }
  // serviceList = [];
  serviceList.push(service);
  user = {
    ...user,
    serviceList
  };
  userService.updateLoggedInUser(user);
  return user;
}

function removeServiceFromList(id) {
  let intId= parseInt(id);
  let user = userService.getLoggedInUser();

  let serviceList = user.serviceList;
  if (!serviceList) {
    serviceList = [];
  }

  let filteredList = serviceList.filter(service => {
    return service.id !== intId;
  });
  user = {
    ...user,
    serviceList: filteredList
  };
  userService.updateLoggedInUser(user);
  return user;
}