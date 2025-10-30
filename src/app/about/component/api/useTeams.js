"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchTeamMembers } from "../../../../lib/utils";

export const useGetTeams = () => {
  return useQuery({
    queryKey: ["team-members"],
    queryFn: fetchTeamMembers,
  });
};
