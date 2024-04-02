
export default function SuscriptionForm () {

	const handleSubmit = (e) => {
		e.preventDefault()
	}

    return (
		<article className='flex-1 px-4 space-y-4'>
			<h1 className="text-3xl font-bold text-slate-300">Mantente informado</h1>
			<p className="font-semibold text-sm text-slate-400 text-pretty mb-3">
				Recibe nuestras novedades, promociones y artículos directamente a tu correo electrónico.
			</p>
			<form onSubmit={handleSubmit} className="space-y-4">
				<input type="text" className="w-full bg-neutral-600 outline-neutral-700 text-slate-400 text-sm px-3 py-2" placeholder="Correo electrónico" />
				<button type='submit' className="w-full rounded-full bg-blue-600 py-2 hover:bg-blue-700">Suscribirme</button>
			</form>
		</article>
    )
}