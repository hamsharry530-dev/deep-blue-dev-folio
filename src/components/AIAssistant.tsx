import { useEffect } from "react";

const AIAssistant = () => {
  useEffect(() => {
    // Load Botpress script
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/desk/webchat/v4.0/inject.js";
    script.async = true;
    script.onload = () => {
      const bp = (window as any).botpress;
      if (!bp) return;

      bp.on("webchat:ready", () => {
        bp.open();
      });

      bp.init({
        botId: "e283dfb1-96e9-4653-bf75-90f83fb172df",
        configuration: {
          version: "v2",
          botName: "Your Brand Assistant",
          botDescription: "",
          website: {},
          email: {},
          phone: {},
          termsOfService: {},
          privacyPolicy: {},
          color: "#3276EA",
          variant: "solid",
          headerVariant: "glass",
          themeMode: "light",
          fontFamily: "inter",
          radius: 4,
          feedbackEnabled: false,
          footer: "[⚡ by Botpress](https://botpress.com/?from=webchat)",
          soundEnabled: false,
          proactiveMessageEnabled: false,
          proactiveBubbleMessage: "Hi! 👋 Need help?",
          proactiveBubbleTriggerType: "afterDelay",
          proactiveBubbleDelayTime: 10,
        },
        clientId: "5b3398b0-aae2-46d3-ae0c-fe4d4b330ba4",
        selector: "#webchat",
      });
    };
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="animate-fade-in">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                AI Assistant
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Chat with My AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Interact with my personal AI assistant. You can ask professional info about me.
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div
            id="webchat"
            style={{ width: "100%", height: "500px" }}
          />
        </div>
      </div>

      <style>{`
        #webchat .bpWebchat {
          position: unset;
          width: 100%;
          height: 100%;
          max-height: 100%;
          max-width: 100%;
        }
        #webchat .bpFab {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default AIAssistant;
