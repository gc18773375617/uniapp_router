<template>
	<view>
		<view @click="back">bbbbb</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		mounted(){
			console.log(12312312313111111111111)
		},
		methods: {
			back(){
				uni.navigateTo({
					url:'../../bbb/bbb'
				})
			}
		}
	}
</script>

<style>

</style>
