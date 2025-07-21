import "./globals.css"

export const metadata = {
  title: "Travista - Discover West Bengal",
  description: "Your ultimate travel companion for exploring West Bengal",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assests/t.webp" type="image/webp" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
