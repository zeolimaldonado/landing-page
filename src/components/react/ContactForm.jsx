
export default function ContactForm () {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} className="w-3/5 mx-auto py-4 text-slate-300 space-y-4">
            <div className="flex justify-between items-center gap-4">
                <article className='flex-1 space-y-3'>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" className="w-full bg-neutral-700 outline-neutral-700 text-slate-300 text-sm px-3 py-3 rounded-md" placeholder='Nombre completo' />
                </article>
                <article className='flex-1 space-y-3'>
                    <label htmlFor="title">Título</label>
                    <input type="text" id="title" className="w-full bg-neutral-700 outline-neutral-700 text-slate-300 text-sm px-3 py-3 rounded-md" placeholder='Título del mensaje' />
                </article>
            </div>
            <div className="flex justify-between items-center gap-4">
                <article className='flex-1 space-y-3'>
                    <label htmlFor="company-email">Correo empresarial</label>
                    <input type="text" id="company-email" className="w-full bg-neutral-700 outline-neutral-700 text-slate-300 text-sm px-3 py-3 rounded-md" placeholder='Correo empresarial' />
                </article>
                <article className='flex-1 space-y-3'>
                    <label htmlFor="company">Nombre de la empresa</label>
                    <input type="text" id="company" className="w-full bg-neutral-700 outline-neutral-700 text-slate-300 text-sm px-3 py-3 rounded-md" placeholder='Nombre de la empresa' />
                </article>
            </div>
            <div className='space-y-3'>
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" rows='10' className="w-full bg-neutral-700 outline-neutral-700 text-slate-300 text-sm px-3 py-2 rounded-md resize-none" placeholder='Escribe tu mensaje' />
            </div>
            <div>
                <button className="px-6 min-w-40 text-sky-600 text-sm font-semibold bg-slate-200 rounded-full h-11">
                    Enviar
                </button>
            </div>
        </form>
    )
}