import { NextResponse } from "next/server";
import { main } from "../route";
import prisma from "@/prisma";

const GET = async (req, res) => {
  try {
    const id = req.url.split("/blog/")[1];
    await main();
    const post = await prisma.post.findFirst({ where: { id } });
    if (!post)
      return NextResponse.json({ message: "Not Found" }, { status: 404 });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

const PUT = async (req, res) => {
  try {
    const id = req.url.split("/blog/")[1];
    const { title, origin, category, article, likes } = await req.json();

    if (!id) {
      return NextResponse.json({ message: "Invalid post ID", error: "Invalid ID" }, { status: 400 });
    }

    await main();

    const post = await prisma.post.update({
      data: {
        title: title,
        origin: origin,
        category: category,
        article: article,
        likes: likes,
      },
      where: { id },
    });

    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};


const DELETE = async (req, res) => {
  try {
    const id = req.url.split("/blog/")[1];
    await main();
    const post = await prisma.post.delete({ where: { id } });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export { GET, PUT, DELETE };
