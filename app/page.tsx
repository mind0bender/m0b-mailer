import Endpoint, { EndpointProps } from "./components/endpoint";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import UsageSection from "./components/usage";

export default function Home() {
  const endpoints: EndpointProps[] = [
    {
      method: "POST",
      path: "/api/v1/send",
      desc: "Send an email message",
      reqBody: {
        to: "johndoe@example.com",
        subject: "Welcome to m0b mailer",
        html: "<h1>This is a test</h1>",
        appName: "Kayaws",
      },
      resBody: {
        success: true,
        messageId: "msg_12...xyz",
        retries: 0,
      },
    },
    {
      method: "POST",
      path: "/api/v1/send-dlq",
      desc: "Send dead messages after retries for logging",
      reqBody: {
        to: "johndoe@example.com",
        subject: "Welcome to m0b mailer",
        html: "<h1>This is a test</h1>",
        appName: "Kayaws",
      },
      resBody: {
        success: "true",
      },
    },
  ];
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center font-sans">
      <Navbar />
      <main className="flex grow w-full max-w-7xl flex-col items-center justify-between py-16 sm:py-32 px-8 sm:px-16 sm:items-start gap-16">
        <Hero />
        <div className="px-8 py-2 w-full">
          <hr className="border-t border-t-zinc-800 w-full" />
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-bold my-12">Available Endpoints</h3>
          <div className="w-full flex flex-col justify-center items-center gap-8">
            {endpoints.map((endpoint: EndpointProps) => {
              return (
                <Endpoint
                  key={`${endpoint.method}:${endpoint.path}`}
                  {...endpoint}
                />
              );
            })}
          </div>
        </div>
        <UsageSection />

        <div className="py-6 flex flex-col gap-8 w-full">
          <p className="px-4 py-2 rounded-md bg-yellow-800/10 border border-yellow-700 w-full">
            Developed primarily for internal use and not maintained as a public
            product.
            <br />
            Community contributions are welcome and appreciated.{" "}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
