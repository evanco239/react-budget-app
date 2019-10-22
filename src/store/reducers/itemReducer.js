const initState = {
  items: [
    { id: 1, title: "title 1", content: "content 1" },
    { id: 2, title: "title 2", content: "content 2" },
    { id: 3, title: "title 3", content: "content 3" }
  ]
};

const itemReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_ITEM":
      console.log("Created ITEM", action.item);
      return state;
    case "CREATE_ITEM_ERROR":
      console.log("Created item error", action.err);
      return state;
    default:
      return state;
  }
};

export default itemReducer;
