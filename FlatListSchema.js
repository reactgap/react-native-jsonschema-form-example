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
        numColumns: 1,
        data: [
          {
            key: "1",
            text: "profile",
            logo: "profile"
          },
          {
            key: "2",
            text: "Settings",
            logo: "setting"
          },
          {
            key: "3",
            text: "profile",
            logo: "profile"
          },
          {
            key: "4",
            text: "Home",
            logo: "Home"
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