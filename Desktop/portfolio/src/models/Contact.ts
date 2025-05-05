import { model, models, Schema } from "mongoose";

const ContactSchema = new Schema(
  {
    name: String,
    surname: String,
    email: String,
    message: String,
  },
  { collection: "contact" }
);

export const Contact = models.Contact || model("Contact", ContactSchema);
