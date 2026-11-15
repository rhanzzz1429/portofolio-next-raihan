import FormKontak from "@/components/FormKontak";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
    title: "Kontak",
    description: "Hubungi Raihan melalui form kontak,email,atau Github",
};

export default function Kontak() {
    return (
        <main className="w-full mx-auto max-w-5xl px-4 py-10">
            <h1 className="text-3xl font-bold text-primary md:text-4xl">
                Hubungi Saya
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
                Punya pertanyaan atau ingin bekerja sama? isi form berikut.
            </p>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            <Card className="md:col-span-2">
                <CardContent>
                    <FormKontak />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>

                    <CardTitle className="text-2xl font-bold text-primary">Temukan Saya di</CardTitle>

                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                        <li>
                            <a href="https://github.com/rhanzzz1429"
                                target="_blank" className="font-bold text-aksen hover:underline">
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="mailto:rhanzzz1429@gmail.com"
                                className="font-bold text-aksen hover:underline">
                                rhanzzz1429@gmail.com
                            </a>
                        </li>
                    </ul>
                </CardContent>
            </Card>
            </div>
        </main>
    );
}