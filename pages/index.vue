<template>
  <section class="tile-container">

		<div class="sidebar bg-white">

		</div>

		<div class="tile__wrapper px-4">
			<ais-index app-id="CGF9DFXU44" api-key="3ec1344cc4c046572bcc890c59bd931a" index-name="dev_OSR_catalog">
				<ais-search-box></ais-search-box>
				<ais-results>
					<template slot-scope="{ result }">
						<section class="tile p-4 mb-4">
							{{ result.header }} <br>
							{{ result.meta.date }}
						</section>
					</template>
				</ais-results>
			</ais-index>
		</div>

  </section>
</template>

<script>
export default {}
</script>

<style>

</style>
