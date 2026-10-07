import ManualShell from "@/components/ManualShell";
import "@/styles/globals.css";

export const metadata = {
  title: { default: "Manual de Aplicativos React | SME", template: "%s | Manual SME" },
  description: "Padrões de interface, React, arquitetura, integrações e segurança para aplicativos da SME.",
};

export default function RootLayout({ children }) {
  return <html lang="pt-BR"><body><ManualShell>{children}</ManualShell></body></html>;
}
