export default function Kontak() {
    return (
        <main className="mx-auto max-w-5xl px-4 py-10">
            <h1 className="text-3xl font-bold text-utama md:text-4xl">Hubungi Saya</h1>
            <p className="mt-3 text-lg text-gray-700">Punya pertanyaan atau ingin bekerja sama? Isi form berikut.</p>
            
        <div className="flex flex-row gap-6">
            <section className=" mx-auto w-100 mt-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:col-span-2">
                <form className="space-y-4">
                    <div>
                        <label htmlFor="nama" className="block font-semibold">
                            Nama lengkap
                        </label>
                        <input type="text" id="nama" name="nama" placeholder="Contoh: Budi Santoso" required className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-semibold">
                            Email
                        </label>
                        <input type="text" id="email" name="email" placeholder="nama@gmail.com" required className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-semibold">
                            Nomor Hp
                        </label>
                        <input type="text" id="nomor" name="nomor" placeholder="081234567" required className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2" />
                    </div>
                    <div>
                        <label htmlFor="keperluan" className="block font-semibold">Keperluan</label>
                        <select id="keperluan" name="keperluan" defaultValue="" className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2">
                            <option value="" disabled className="font-semibold">-- Pilih keperluan --</option>
                            <option value="bisnis">Bisnis</option>
                            <option value="pribadi">Pribadi</option>
                            <option value="lainnya">Lainnya</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-semibold">
                            Pesan
                        </label>
                        <textarea type="text" id="pesan" name="pesan" placeholder="Tuliskan pesan anda" required className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2" />
                    </div>
                </form>

                <button className="mt-5 rounded-lg bg-aksen text-white px-5 py-2">
                    Kirim Pesan
                </button>
            </section>

            <aside className="mx-auto w-55 mt-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:col-span-2 ">
                <h3 className="font-bold text-xl">Temukan saya di</h3>
                <ul>
                    <li className="font-semibold mt-3 text-aksen"><a href="https://github.com/rhanzzz1429">GitHub</a></li>
                    <li className="font-semibold text-aksen">rhanzzz1429@gmail.com</li>
                </ul>
            </aside>
            </div>
        </main>
    );
}