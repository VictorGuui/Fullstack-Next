import Link from "next/link" 

export default function Home() {
  return (

      <main className="py-4 px-48">
        <Link href = {"/dashboard"}>Va para o dashboard</Link>
      </main>
  )
}
