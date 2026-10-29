import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import Kartu from "@/components/Kartu";
import Footer from "@/components/Footer";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const dataHobi = [
  "Bersepeda",
  "Memancing",
  "Bermain game",
];

const dataRencana = [
  "Menuntaskan Kelas Industri UBIG sampai lulus",
  "Magang di perusahaan sesuai bidang web development",
  "Bekerja sebagai Web Developer",
];

const dataJadwal = [
  { hari: "Senin", waktu: "18.30 - 21.30", kegiatan: "Mengerjakan Tugas UBIG" },
  { hari: "Selasa", waktu: "19.00 - 20.00", kegiatan: "Merangkum Modul Pembelajaran" },
  { hari: "Rabu", waktu: "18.00 - 20.00", kegiatan: "Membuat Video Presentasi dan Pengumpulan Tugas" },
  { hari: "Kamis", waktu: "19.00 - 22.00", kegiatan: "Meet dan Membaca Modul Pembelajaran" },
  { hari: "Minggu", waktu: "18.00 - 20.00", kegiatan: "Mengerjakan tugas untuk hari senin/tugas UBIG" },
];

export default function Home() {
  return (
    <>
    <main className="mx-auto w-full max-w-5xl grow px-4 py-10">
      <Hero
        nama="Mukhammad Raihan Apriliansyah"
        tagline="Siswa kelas XI SMKN 1 Pasuruan & Junior Web Developer di Kelas Industri UBIG."
      />

      <div className="mt-10 space-y-6">

        <Kartu judul="Tentang Saya">
          <p className="leading-relaxed">
            Saya adalah siswa Rekayasa Perangkat Lunak yang memiliki ketertarikan pada web development dan UI/UX design.
          </p>
          <p>
            Saya senang mengubah sebuah ide menjadi website atau aplikasi yang memiliki tampilan menarik, mudah digunakan, dan tetap memiliki fungsi yang baik.
          </p>
        </Kartu>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Kartu judul="Hobi">
            <ul className="list-disc list-inside space-y-1">
              {dataHobi.map((hobi, index) => (
                <li key={index}>{hobi}</li>
              ))}
            </ul>
          </Kartu>

          <Kartu judul="Cita-cita">
            <p className="mb-2">
              Menjadi <strong>Full Stack Web Developer</strong>. Langkah yang saya rencanakan:
            </p>
            <ol className="list-decimal list-inside space-y-1">
              {dataRencana.map((rencana, index) => (
                <li key={index}>{rencana}</li>
              ))}
            </ol>
          </Kartu>

        </div>
      </div>

      <section className="mt-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-utama">Keahlian</h2>

        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.nama} nama={skill.nama}
              level={skill.level} />
          ))}
        </div>
      </section>

      <div className="mt-6">
        <Kartu judul="Jadwal Belajar">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-blue-950">
                <tr className="border-b-2 border-gray-300">
                  <th className="py-2 px-4 text-white">Hari</th>
                  <th className="py-2 px-4 text-white">Waktu</th>
                  <th className="py-2 px-4 text-white">Kegiatan</th>
                </tr>
              </thead>
              <tbody>
                {dataJadwal.map((jadwal, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-2 px-4 font-medium">{jadwal.hari}</td>
                    <td className="py-2 px-4">{jadwal.waktu}</td>
                    <td className="py-2 px-4">{jadwal.kegiatan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Kartu>
      </div>
    </main>
    </>
  );
}