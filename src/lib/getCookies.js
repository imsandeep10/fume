'use server';

import { cookies } from "next/headers";

const getCookies = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token"); 
  return token?.value; 
};

export default getCookies;
