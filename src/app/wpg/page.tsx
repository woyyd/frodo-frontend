import Link from "next/link";

export default function WePlayGame() {
    return <div>
        <h1>We Play games here</h1>

        <Link href={"http://localhost:8080/auth/steam?returnUrl=aHR0cDovL2xvY2FsaG9zdDozMDAwCg==gc"}> LOG IN USING STEAM</Link>
    </div>
}
