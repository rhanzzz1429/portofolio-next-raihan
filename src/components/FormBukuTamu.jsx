"use client";

import { useActionState } from "react";
import { kirimPesan } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function FormBukuTamu() {

    const [state, formAction] = useActionState(kirimPesan, {});
    return (
        <form action={formAction} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="nama">Nama</Label>
                <Input id="nama" name="nama" placeholder="Contoh: Budi Santoso" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="pesan">Pesan</Label>
                <Textarea id="pesan" name="pesan" rows={4} maxLength={300}
                    placeholder="Tulis kesan atau sapaanmu" />
            </div>
            <Button type="submit" size="lg">
                Kirim Pesan
            </Button>

            {state.error && <p className="text-sm text-aksen">{state.error}</p>}

            {state.berhasil && <p className="text-sm font-medium text-primary">{state.berhasil}</p>}

        </form>
    );
}