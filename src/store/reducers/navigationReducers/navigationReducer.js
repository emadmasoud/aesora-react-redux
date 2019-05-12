import { FETCH_NAVIGATION } from "../../actions/actionTypes";

const initalState = {
  menulist: [
    { name: "DashBord" , icon: "fas fa-home", children:
    [
      { name: "Edit", url: "/edit" },
      { name: "Profile", url: "/profile" }, 
      { name: "Details", url: "/profile" ,children: [
        { name: "Educations", url: "/education"},
        { name: "Experience", url: "/experience"},
        { name: "Update", url: "/update"},
      ]
    },
    ]
    },
    { name: "Project" , icon: "fas fa-home" , children:[
      { name: "Manage", icon: "far fa-dot-circle", url: "/manage" },
      { name: "Create", icon: "far fa-dot-circle", url: "/create" },
      { name: "Store", icon: "far fa-dot-circle", url: "/store" },
      { name: "Edit", icon: "far fa-dot-circle", url: "/edit" },
      { name: "Update", icon: "far fa-dot-circle", url: "/update" },
      { name: "Destroy", icon: "far fa-dot-circle", url: "/destroy" },
    ]
    },
    { name: "Task" , icon: "fas fa-home" , children:[
      { name: "Manage", icon: "far fa-dot-circle", url: "/manage" },
      { name: "Create", icon: "far fa-dot-circle", url: "/create" },
      { name: "Store", icon: "far fa-dot-circle", url: "/store" },
      { name: "Edit", icon: "far fa-dot-circle", url: "/edit" },
      { name: "Update", icon: "far fa-dot-circle", url: "/update" },
      { name: "Destroy", icon: "far fa-dot-circle", url: "/destroy" },
    ]
    },
    { name: "Roles" , icon: "fas fa-home" , children:[
      { name: "Manage", icon: "far fa-dot-circle", url: "/manage" },
      { name: "Edit", icon: "far fa-dot-circle", url: "/edit" },
    ]
    },
    { name: "Users" , icon: "fas fa-home" , children:[
      { name: "Manage", icon: "far fa-dot-circle", url: "/manage" },
      { name: "Create", icon: "far fa-dot-circle", url: "/create" },
      { name: "Store", icon: "far fa-dot-circle", url: "/store" },
      { name: "Edit", icon: "far fa-dot-circle", url: "/edit" },
      { name: "Update", icon: "far fa-dot-circle", url: "/update" },
      { name: "Destroy", icon: "far fa-dot-circle", url: "/destroy" },
    ]
    },
  ]
};

export default (state = initalState, action) => {
  switch (action.type) {
    case FETCH_NAVIGATION:
      return {
        ...state,
        menulist: state.menulist
        
      };

    default: {
      return state;
    }
  }
};
