<script>
	import axios from "axios"

	let name
	let email
	let message
	let loading
	let success

	const sendEmail = () => {
		loading = true
		axios.post(`/contact`,{
			name,
			email,
			message
		}).then(() => {
			loading = false
			success = true
		}).catch((error) => {
			console.error(error)
			loading = false
			success = false
		})
	}
</script>

<form on:submit|preventDefault={() => sendEmail()} class="flex flex-col py-6 space-y-6 p-4 md:px-6 bg-white">
	<label class="block">
		<span class="mb-1">Full name</span>
		<input type="text" placeholder="Please enter your full name" class="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-gray-600 border-brown-600" bind:value={name}>
	</label>
	<label class="block">
		<span class="mb-1">Email address</span>
		<input type="email" placeholder="Please enter your email address" class="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-gray-600 border-brown-600" bind:value={email}>
	</label>
	<label class="block">
		<span class="mb-1">Reason for contacting us today</span>
		<textarea rows="3" class="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-gray-600 border-brown-600" bind:value={message}></textarea>
	</label>
	{#if loading}
		<button type="submit" class="px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 focus:ring-gray-600 hover:ring-gray-600 bg-teal-600 text-white">
			Submitting ...
		</button>
	{:else if typeof success === 'undefined'}
		<button type="submit" class="px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 focus:ring-gray-600 hover:ring-gray-600 bg-teal-600 text-white">
			Submit
		</button>
	{/if}
	{#if typeof success !== 'undefined' && success}
		<p class="text-teal-600 text-lg">
			Message sent successfully
		</p>
	{/if}
	{#if !success && typeof success !== 'undefined'}
		<p class="text-teal-600 text-lg">
			Message could not be sent at the moment
		</p>
	{/if}
</form>