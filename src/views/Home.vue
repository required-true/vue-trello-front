<template>
	<div class="home-page">
		<div class="container">
			<ul class="board-list">
				<li class="board-item" v-for="board in boards" :key="board.id">
					<router-link
						:to="`/b/${board.id}`"
						:style="`background-color: ${board.bgColor}`"
						>{{ board.title }}</router-link
					>
				</li>
				<li class="board-item add-board">
					<a href="" @click.prevent="onAddBoard">Add Board...</a>
				</li>
			</ul>
		</div>
		<AddBoard v-if="isAddBoard" @@close="isAddBoard = false"></AddBoard>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations, mapActions } from 'vuex'
import AddBoard from '@/components/AddBoard.vue'

export default Vue.extend({
	components: {
		AddBoard,
	},

	data() {
		return {
			isAddBoard: false,
		}
	},

	computed: {
		...mapState(['boards']),
	},

	methods: {
		...mapMutations(['SET_THEME']),
		...mapActions(['FETCH_BOARDS']),
		onAddBoard() {
			this.isAddBoard = true
		},
	},

	created() {
		this.FETCH_BOARDS()
		this.SET_THEME()
	},
})
</script>

<style scoped>
.container {
	margin: 32px 20px;
}

.board-list {
	display: flex;
	flex-wrap: wrap;
}

.board-item a {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 220px;
	height: 80px;
	padding: 20px;
	margin-right: 20px;
	margin-bottom: 20px;
	border-radius: 4px;
	box-sizing: border-box;
	font-weight: 700;
	font-size: 18px;
	color: #fff;
	text-decoration: none;
	background-color: #ccc;
}

.board-item a:focus,
.board-item a:hover {
	color: rgba(255, 255, 255, 0.8);
}

.add-board a {
	background-color: #fff;
	color: #333;
	border: 1px solid #ccc;
}

.add-board a:focus,
.add-board a:hover {
	color: #444;
	background-color: #fafafa;
}

@media screen and (max-width: 768px) {
	.board-list {
		justify-content: space-around;
	}
}
</style>
