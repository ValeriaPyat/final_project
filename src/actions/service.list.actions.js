import {userService} from "../service";

export const listActions = {
  addServiceToList
};

function addServiceToList(service) {
    let user = userService.getLoggedInUser();

    let serviceList = user.serviceList;
    if (!serviceList){
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