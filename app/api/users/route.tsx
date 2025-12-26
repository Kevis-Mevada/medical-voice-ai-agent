import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function POST(req:NextRequest){
    const user=await currentUser();
    try {
        const users=await db.select().from(usersTable)
        //@ts-ignore
        .where(eq(usersTable.email,user?.primaryEmailAddress?.emailAddress));
        if(users?.length===0){
            const result=await db.insert(usersTable).values({
                //@ts-ignore
                name:user?.firstName,
                email:user?.primaryEmailAddress?.emailAddress,
                credits:10,
               
            }).returning();
            return NextResponse.json(result[0]);
        }
        return NextResponse.json(users[0]);

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}