module.exports = {
  schema: {
    title: "",
    description: "",
    type: "view",
    // required: ["firstName", "lastName"],
    properties: {
      FlatList: {
        type: "flatList",
        card: "menu",
        spacing: 5,
        numColumns: 2,
        data: [
          {
            key: "1",
            title: "profile",
            icon: "user",
            type: "EvilIcons"
          },
          {
            key: "2",
            title: "Settings",
            icon: "paperclip",
            type: "EvilIcons"
          },
          {
            key: "3",
            title: "Activity",
            icon: "location",
            type: "EvilIcons"
          },
          {
            key: "4",
            title: "Home",
            icon: "ios-bicycle",
            type: "Ionicons"
          },
        ]
      }
      // bio: {
      //   type: "string",
      //   title: "Bio name",
      // },
      // age: {
      //   type: "integer",
      //   title: "Age",
      // },
      // password: {
      //   type: "string",
      //   title: "Password",
      //   minLength: 3
      // }
    },
  },
  uiSchema: {
    // firstName: {
    //   "ui:autofocus": true,
    //   "ui:emptyValue": "",
    // },
    // password: {
    //   "ui:widget": "password",
    //   "ui:help": "Hint: Make it strong!",
    // },
    // bio: {
    //   "ui:widget": "textarea",
    // }
  },
  formData: {
    // lastName: "Norris"
  },
};