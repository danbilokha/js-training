<template>
    <div class='edit'>
        <h1> Edit todo </h1>
        <div class='description'>
            <span> Description </span>
            <input v-model='$data.todo.description'>
        </div>
        <div class='state'>
            <span> State </span>
            <input type='checkbox' v-model='$data.todo.done'>
        </div>

        <div class='controls'>
            <button v-on:click='back'> Back </button>
            <button v-on:click='apply'> Apply </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Edit',
        mounted() {
            const id = this.$route.params.id;
            this.$store.state.todos.forEach((todo) => {
                if (todo.id === id) {
                    this.$data.todo = todo;
                }
            });
        },
        data() {
            return {
                todo: {},
            };
        },
        methods: {
            apply() {
                this.$store.commit('TODOS_EDIT', this.todo);
                this.$router.push('/');
            },
            back() {
                this.$router.push('/');
            },
        },
    };
</script>

<style scoped>
    .controls {
        text-align: right;
    }
</style>
