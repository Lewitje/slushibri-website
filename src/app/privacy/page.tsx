import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Slushibri",
  description:
    "How Slushibri collects and uses data. Anonymous auth, on-device location checks, and no tracking.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white/70 backdrop-blur-sm">
        <div className="mx-auto max-w-2xl px-6 py-8">
          <p className="text-sm font-medium tracking-wide text-accent uppercase">
            Slushibri
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted">
            Effective date: July 9, 2026
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-10">
        <div className="space-y-10 text-[15px] leading-7 text-foreground">
          <p className="text-muted">
            Slushibri is a fun, lightweight mobile app for checking the current
            slushie flavor at the Kolibri office, participating in weekly flavor
            voting, and enjoying a humorous &ldquo;table service&rdquo;
            experience.
          </p>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Information We Collect
            </h2>
            <p className="mt-3 text-muted">
              We collect very little information and only what is necessary for
              the app to work:
            </p>
            <ul className="mt-4 space-y-5">
              <li>
                <h3 className="font-medium text-foreground">
                  Anonymous authentication
                </h3>
                <p className="mt-1 text-muted">
                  When you open the app we create an anonymous user session
                  through our backend provider (Supabase). This creates a random
                  user ID on their servers that is{" "}
                  <strong className="font-medium text-foreground">
                    not linked to your name, email, or any personal identity
                  </strong>
                  . This ID is used only to let you vote on each flavor once.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-foreground">
                  Location data (precise)
                </h3>
                <p className="mt-1 text-muted">
                  The app asks for your location (when in use) solely to check
                  whether you are physically at the Kolibri office (within ~100
                  meters).
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">
                  <li>This check happens entirely on your device.</li>
                  <li>
                    Your location coordinates are never sent to our servers or
                    stored.
                  </li>
                  <li>
                    Location is only used to enable or disable certain fun
                    features (voting and placing a &ldquo;table service&rdquo;
                    order).
                  </li>
                </ul>
              </li>
              <li>
                <h3 className="font-medium text-foreground">Voting activity</h3>
                <p className="mt-1 text-muted">
                  When you vote on a slushie flavor, we record your vote (good
                  or bad) tied only to your anonymous user ID. You can see your
                  own past votes. Aggregated vote counts for each flavor are
                  shown publicly so everyone can see the results — these
                  aggregates contain no personal information.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-foreground">Public content</h3>
                <p className="mt-1 text-muted">
                  Slushie flavor names, descriptions, ingredients, and the
                  AI-generated images are stored publicly so the app can display
                  them. This is intentional and part of the app&apos;s
                  features.
                </p>
              </li>
            </ul>
            <blockquote className="mt-5 rounded-lg border border-border bg-white px-4 py-3 text-muted">
              <strong className="font-medium text-foreground">
                &ldquo;Place Order&rdquo; / Table Service
              </strong>{" "}
              is a purely local joke feature. Selecting a chair and tapping
              &ldquo;Place order&rdquo; does not send any data anywhere. It just
              shows a humorous animated tracker that intentionally never finishes
              delivering.
            </blockquote>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              How We Use the Information
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
              <li>
                To power the core features of the app (showing the current
                flavor, letting people vote once per flavor, and the
                geofence-based feature gates).
              </li>
              <li>
                To provide live updates (current flavor and machine status) using
                Supabase realtime.
              </li>
              <li>
                We do <strong className="font-medium text-foreground">not</strong>{" "}
                use any data for advertising, marketing, or selling to third
                parties.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Third-Party Services
            </h2>
            <p className="mt-3 text-muted">
              The app relies on the following service providers:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
              <li>
                <strong className="font-medium text-foreground">Supabase</strong>{" "}
                (backend, database, authentication, storage, edge functions, and
                realtime). Supabase processes the anonymous user IDs and votes on
                our behalf. Their own privacy practices apply:{" "}
                <a
                  href="https://supabase.com/privacy"
                  className="text-accent underline underline-offset-2 hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  supabase.com/privacy
                </a>
                .
              </li>
              <li>
                Standard Expo and React Native libraries (for location,
                networking, etc.). These send only the minimal technical data
                required for the features described above.
              </li>
            </ul>
            <p className="mt-3 text-muted">
              We do not use analytics SDKs, advertising networks, crash
              reporters, or any other third-party tracking.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Data Sharing and Selling
            </h2>
            <p className="mt-3 text-muted">
              We do not sell your data. The only data that leaves your device is:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
              <li>
                Anonymous session and vote data sent to Supabase (necessary for
                the app to function).
              </li>
              <li>
                Standard network requests to load public slushie images and data.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Data Retention and Deletion
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
              <li>
                Anonymous user sessions live in the app and on Supabase until you
                uninstall the app or clear app data.
              </li>
              <li>
                Your past votes remain in the database (tied only to the anonymous
                ID) so that vote totals stay accurate. Because the ID is
                anonymous and not linked to you, these votes cannot be
                attributed to any individual.
              </li>
              <li>
                To remove your local session and stop future votes from being
                associated with the current anonymous ID, simply uninstall the
                app.
              </li>
              <li>
                If you would like us to delete specific votes or data where
                possible, contact us (see below). Note that aggregated historical
                results cannot be retroactively changed without affecting
                everyone else&apos;s experience.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Security</h2>
            <p className="mt-3 text-muted">
              All communication with our backend is encrypted in transit
              (HTTPS/TLS). We use industry-standard practices through Supabase.
              However, no method of transmission or storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Children&apos;s Privacy
            </h2>
            <p className="mt-3 text-muted">
              This app is not directed to children. We do not knowingly collect
              personal information from children under 13 (or the applicable age
              in your jurisdiction).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Changes to This Policy
            </h2>
            <p className="mt-3 text-muted">
              We may update this policy occasionally. When we do, we will update
              the &ldquo;Effective Date&rdquo; at the top. Continued use of the
              app after changes means you accept the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              Contact Us
            </h2>
            <p className="mt-3 text-muted">
              If you have questions about this privacy policy or the data
              practices of Slushibri, please reach out:
            </p>
            <p className="mt-3 text-muted">
              <strong className="font-medium text-foreground">Lewi</strong>
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