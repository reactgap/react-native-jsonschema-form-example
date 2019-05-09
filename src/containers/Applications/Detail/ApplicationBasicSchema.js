module.exports = {
  schema: {
    type: "object",
    required: ["firstName", "lastName","nationalID","provinces"],
    properties: {
      firstName: {
        type: "string",
        title: "First name",
        default: "Chuck",
        keyboardAppearance: "dark",
        maxLength: 50
      },
      lastName: {
        type: "string",
        title: "Last name",
        keyboardAppearance: "dark",
        maxLength: 50
      },
      nationalID: {
        type: "string",
        title: "National ID",
        keyboardAppearance: "dark",
        maxLength: 30
      },
      provinces: {
        type: "string",
        title: "Province / Districts",
        mode: "provinces",
      }
    },
  },
  uiSchema: {
    avatar: {
      "ui:widget": "avatar"
    },
    firstName: {
      "ui:autofocus": true,
      "ui:emptyValue": "",
    },
    provinces: {
      "ui:widget": "textFieldPicker"
    },
    district: {
      "ui:widget": "textFieldPicker"
    }
  },
  formData: {
    lastName: ""
  },
};