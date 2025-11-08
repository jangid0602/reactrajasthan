// types/google.d.ts
export {};

declare global {
  interface Window {
    google: typeof google;
  }

  namespace google.accounts.oauth2 {
    interface CodeResponse {
      code: string;
    }

    interface CodeClient {
      requestCode(): void;
    }

    function initCodeClient(config: {
      client_id: string;
      scope: string;
      ux_mode: "popup" | "redirect";
      callback: (response: CodeResponse) => void;
    }): CodeClient;
  }

  const google: typeof import("google-one-tap"); // This avoids TS errors when using window.google
}
