import prisma from "@/prisma";
import { NextResponse } from "next/server";

async function main() {
  try {
    await prisma.$connect();
  } catch (err) {
    return Error("Database Connection Unsuccessful");
  }
}

const GET = async (req, res) => {
  try {
    await main();
    const posts = await prisma.post.findMany();
    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

const POST = async (req, res) => {
  try {
    const { title, origin, category, usecase, description, likes, linkdoc, linkmodel } = await req.json();
    await main();
    const post = await prisma.post.create({
      data: { title, origin, category, usecase, description, likes, linkdoc, linkmodel },
    });
    return NextResponse.json({ message: "Success", post }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

const PUT = async (req, res) => {
  try {
    const { title, origin, category, usecase, description, likes, linkdoc, linkmodel } = await req.json();
    await main();
    const post = await prisma.post.create({
      data: { title, origin, category, usecase, description, likes, linkdoc, linkmodel },
    });
    return NextResponse.json({ message: "Success", post }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export { GET, POST, PUT, main };