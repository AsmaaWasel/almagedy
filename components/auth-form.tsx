"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

export function AuthForm({ mode }: { mode: "sign-in" | "sign-up" }) {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  const isSignUp = mode === "sign-up";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(null);
    setLoading(true);

    const { error } = isSignUp
      ? await authClient.signUp.email({
          name,
          email,
          password,
        })
      : await authClient.signIn.email({
          email,
          password,
          callbackURL: "/dashboard",
        });

    setLoading(false);

    if (error) {
      setError(error.message ?? "حدث خطأ، حاول مرة أخرى.");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  };

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-background flex items-center justify-center px-4"
    >
      <Card className="w-full max-w-md p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">
            {isSignUp ? "إنشاء حساب جديد" : "تسجيل الدخول"}
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            {isSignUp
              ? "أنشئ حسابًا جديدًا للبدء في استخدام لوحة التحكم."
              : "سجل الدخول للوصول إلى لوحة التحكم."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {isSignUp && (
            <div className="space-y-2">
              <Label htmlFor="name">الاسم</Label>

              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="أدخل الاسم"
                autoComplete="name"
                required
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">البريد الإلكتروني</Label>

            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">كلمة المرور</Label>

            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              autoComplete={isSignUp ? "new-password" : "current-password"}
              minLength={8}
              required
            />
          </div>

          {error && (
            <p role="alert" className="text-sm text-red-600 text-center">
              {error}
            </p>
          )}

          <Button type="submit" disabled={loading} className="w-full">
            {loading
              ? "جاري المعالجة..."
              : isSignUp
                ? "إنشاء حساب"
                : "تسجيل الدخول"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {isSignUp ? "لديك حساب بالفعل؟ " : "ليس لديك حساب؟ "}

          <Link
            href={isSignUp ? "/sign-in" : "/sign-up"}
            className="font-semibold text-primary hover:underline"
          >
            {isSignUp ? "تسجيل الدخول" : "إنشاء حساب"}
          </Link>
        </p>
      </Card>
    </main>
  );
}
