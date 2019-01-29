module.exports = {
  schema: {
    title: "Form View",
    description: "",
    type: "view",
    // required: ["firstName", "lastName"],
    properties: {
      componentList: {
        type: "flatList",
        card: "menu",
        spacing: 5,
        numColumns: 2,
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
          }
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