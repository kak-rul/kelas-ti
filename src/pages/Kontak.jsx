import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';

export default function Kontak() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        console.log('Data Formulir:', data);
        alert('Pesan berhasil dikirim!');
        reset(); // Mengosongkan form setelah submit
    };

    return (
        <section id="kontak" className="bg-primary py-20 px-5 md:pt-22 md:-scroll-pt-16 w-full h-full flex flex-col items-center">
            <div className="mb-6 w-full">
                <h2 className="text-xl md:text-4xl text-center font-extrabold text-white">
                    Kontak
                </h2>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-6xl w-full md:w-full p-6 space-y-3 rounded-lg border border-gray-300 bg-gray-100"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-10">
                        {/* Input Nama */}
                        <div className="relative">
                            <label className="block text-md font-medium text-gray-900 dark:text-white" htmlFor="name">
                                Nama
                            </label>
                            <input
                                {...register("name", { required: "Nama wajib diisi" })}
                                className={`mt-1 w-full rounded-lg border pl-2 pr-4 py-2 focus:border focus:border-primary focus:outline-none ${errors.name ? 'border-red-500' : ''}`}
                                id="name"
                                placeholder="Nama Anda"
                            />
                            {errors.name && <span className="absolute left-0 top-18 text-xs text-red-500">{errors.name.message}</span>}
                        </div >
                        {/* Input Email */}
                        <div className="relative">
                            <label className="block font-medium text-gray-900 dark:text-white" htmlFor="email">
                                Email
                            </label>
                            <input
                                {...register("email", {
                                    required: "Email wajib diisi",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Format email tidak valid"
                                    }
                                })}
                                className={`mt-1 w-full rounded-lg border pl-2 pr-4 py-2 focus:border focus:border-primary focus:outline-none ${errors.email ? 'border-red-500' : ''}`}
                                id="email"
                                type="email"
                                placeholder="Email Anda"
                            />
                            {errors.email && <span className="absolute left-0 top-18 text-xs text-red-500">{errors.email.message}</span>}
                        </div>
                    </div>

                    {/* Input Message */}
                    <div className="relative">
                        <label className="block font-medium text-gray-900 dark:text-white" htmlFor="message">
                            Pesan
                        </label>
                        <textarea
                            {...register("message", { required: "Pesan tidak boleh kosong" })}
                            className={`mt-1 md:h-38 w-full resize-none rounded-lg border p-2 focus:border focus:border-primary focus:outline-none ${errors.message ? 'border-red-500' : ''}`}
                            id="message"
                            rows="5"
                            placeholder="Tulis pesan Anda di sini..."
                        ></textarea>
                        {errors.message && <span className="absolute left-0 top-42 md:top-45.5 text-xs text-red-500">{errors.message.message}</span>}
                    </div>
                    <Button
                        size="lg" className="w-full"
                        aria-label="Submit"
                    >
                        Kirim Pesan
                    </Button>
                </div>
            </form>
        </section>
    );
};
