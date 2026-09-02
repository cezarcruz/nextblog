import { ImageResponse } from "next/og";

export const alt = "Cezar Cruz - Desenvolvedor de Software";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f3f4f6",
          padding: 48,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ffffff",
            border: "5px solid #000000",
            boxShadow: "14px 14px 0px 0px #000000",
            padding: "48px 64px",
            width: "100%",
            maxWidth: 1000,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#facc15",
              border: "3px solid #000000",
              boxShadow: "4px 4px 0px 0px #000000",
              padding: "6px 20px",
              fontSize: 22,
              fontWeight: 900,
              color: "#000000",
              textTransform: "uppercase",
              letterSpacing: 2,
              marginBottom: 24,
            }}
          >
            cezarcruz.com.br
          </div>

          <h1
            style={{
              fontSize: 64,
              fontWeight: 900,
              color: "#000000",
              margin: 0,
              marginBottom: 12,
              letterSpacing: -1,
            }}
          >
            Cezar Cruz
          </h1>

          <p
            style={{
              fontSize: 30,
              color: "#4b5563",
              margin: 0,
              marginBottom: 36,
              fontWeight: 600,
            }}
          >
            Desenvolvedor de Software • Java & Cloud AWS
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {["Java", "AWS", "Kotlin", "Docker", "Linux", "Spring Boot"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    backgroundColor: "#e5e7eb",
                    color: "#000000",
                    border: "3px solid #000000",
                    boxShadow: "4px 4px 0px 0px #000000",
                    padding: "8px 18px",
                    fontSize: 20,
                    fontWeight: 700,
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

