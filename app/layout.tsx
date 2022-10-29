import '@src/styles/globals.css'

export default function RootLayout({ children }: { children: any }) {
  return (
    <html>
      <head>
        <title>Thayto Next.js template</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
