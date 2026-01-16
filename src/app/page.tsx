import { Button } from "@/components/ui/button";
import { prisma } from '../lib/prisma'
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { authClient } from "@/lib/auth-client";
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";


const Home = async () => {

  await requireAuth();
  const data = await caller.getUsers();
  return (
    <div >
      <h1 className="text-black">Hello</h1>
      <h2>{JSON.stringify(data)}</h2>
      <Button>Log out</Button>
    </div>
  );
}

export default Home;