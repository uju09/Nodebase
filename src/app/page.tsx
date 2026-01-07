"use client"
import { Button } from "@/components/ui/button";
import { prisma } from '../lib/prisma'
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const trpc = useTRPC();
  const { data: user } = useQuery(trpc.getUsers.queryOptions());
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-amber-400">Home</h1>
      <Button>Button</Button>
      <h4 className="text-black">{JSON.stringify(user)}</h4>
    </div>
  );
}

export default Home;