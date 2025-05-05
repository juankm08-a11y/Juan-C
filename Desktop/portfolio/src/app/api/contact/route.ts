import { NextResponse } from "next/server";
import { connectToDB } from "@/app/lib/mongodb";
import { Contact } from "@/models/Contact";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function GET() {
  try {
    await connectToDB();
    const contacts = await Contact.find();
    return NextResponse.json(contacts, { status: 200 });
  } catch (error) {
    console.error("Error en el GET /api/contact", error);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, surname, email, message } = body;

    await connectToDB();

    const newContact = new Contact({ name, surname, email, message });
    await newContact.save();

    await transporter.sendMail({
      from: `"Portfolio "<${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `Nuevo mensaje de ${name} ${surname}`,
      text: `De ${name} ${surname} <${email}>
      Mensaje: ${message}`,
      html: `  <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name} ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>`,
    });

    return NextResponse.json(
      { message: "Mensaje enviado exitosamente" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error en el POST /api/contact", error);
    return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
  }
}
