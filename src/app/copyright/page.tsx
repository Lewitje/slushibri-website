import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Copyright — Slushibri",
  description: "Copyright and intellectual property notice for the Slushibri app.",
};

export default function CopyrightPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white/70 backdrop-blur-sm">
        <div className="mx-auto max-w-2xl px-6 py-8">
          <p className="text-sm font-medium tracking-wide text-accent uppercase">
            Slushibri
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
            Copyright
          </h1>
          <p className="mt-2 text-sm text-muted">Last updated: July 9, 2026</p>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-10">
        <div className="space-y-10 text-[15px] leading-7 text-foreground">
          <p className="text-lg font-medium text-foreground">
            © 2026 Lewi Hussey. All rights reserved.
          </p>

          <p className="text-muted">
            Slushibri, including its name, visual design, user interface,
            original text, and the overall app experience, is the intellectual
            property of Lewi Hussey unless otherwise noted below.
          </p>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              App content
            </h2>
            <p className="mt-3 text-muted">
              Slushie flavor names, descriptions, ingredients, voting results,
              and AI-generated cup and ingredient artwork created for Slushibri
              are part of the app and may not be copied, redistributed, or used
              commercially without permission.
            </p>
            <p className="mt-3 text-muted">
              Slushibri is an informal internal app built for the Kolibri office.
              It is not a commercial product and is provided for entertainment
              and office use.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Third-party materials
            </h2>
            <p className="mt-3 text-muted">
              Slushibri uses open-source libraries and third-party services,
              including Expo, React Native, Supabase, and Google Gemini. All
              trademarks, service marks, and logos belonging to third parties
              remain the property of their respective owners.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Permissions
            </h2>
            <p className="mt-3 text-muted">
              If you would like permission to reuse Slushibri content, or if you
              believe material in the app infringes your rights, please contact:
            </p>
            <p className="mt-3 text-muted">
              <strong className="font-medium text-foreground">Lewi Hussey</strong>
              <br />
              Email:{" "}
              <a
                href="mailto:slushibri@lewi.co"
                className="text-accent underline underline-offset-2 hover:text-foreground"
              >
                slushibri@lewi.co
              </a>
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}