
export default function SuscriptionForm () {

    return (
		<article className='flex-1 px-4 space-y-4'>
			<h1 class="text-3xl font-bold text-slate-300">Mantente informado</h1>
			<p class="font-semibold text-sm text-slate-400 text-pretty mb-3">
				Recibe nuestras actualizaciones en tiempo real a tu correo electrónico.
			</p>
			<form class="space-y-4">
				<input type="text" class="w-full bg-neutral-600 outline-neutral-700 text-slate-400 text-sm px-3 py-2" placeholder="Correo electrónico" />
				<button class="w-full rounded-full bg-blue-600 py-2 hover:bg-blue-700">Suscribirme</button>
			</form>
		</article>
    )
}