import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

import Sidebar from "@/components/dashboard/sidebar";
import Header from "@/components/dashboard/header";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/sign-in");
  }

  return (
    <div
      className="
   flex
   h-screen
   bg-gray-50
   "
    >
      <Sidebar user={session.user} />

      <div
        className="
    flex-1
    flex
    flex-col
    "
      >
        <Header user={session.user} />

        <main
          className="
     flex-1
     overflow-auto
     p-8
     "
        >
          {children}
        </main>
      </div>
    </div>
  );
}
