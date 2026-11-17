"use client";

import { useActionState } from "react";
import {masukKelola} from "@/app/kelola/actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import TombolKirim from "@/components/TombolKirim";

export default function FormPin() {
    const [state, formAction] = useActionState (masukKelola, {});

    return (
        <form action={formAction} className="space-y-4">
            <div className="space-y-4">
                <Label htmlFor="pin">PIN admin</Label>
                <Input id="pin" name="pin" type="password" placeholder="Masukan PIN"/>
            </div>
            <TombolKirim teks="Masuk" />
            {state.error && <p className="text-sm text-aksen">{state.error}</p>}
        </form>
    );
}