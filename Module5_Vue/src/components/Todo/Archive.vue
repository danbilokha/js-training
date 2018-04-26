<template>
  <div>
    <ul>
      <li v-for="archive in archived(archives)">
        {{archive.description}}

        <button
          v-on:click.stop="unarchive(archive)">Un archived</button>
      </li>
    </ul>
    <button
      v-on:click="goBack">Go Back</button>
  </div>
</template>

<script>
  export default {
    name: 'Archive',
    data() {
      return {
        archives: this.$store.state.todos,
      };
    },
    methods: {
      unarchive(archive) {
        this.$store.commit('TODOS_UNARCHIVE', archive);
        this.archives = [
          ...this.archives,
        ];
      },
      archived(items) {
        return items.filter(item => item.archive === true);
      },
      goBack() {
        this.$router.push({
          name: 'Todo',
        });
      },
    },
  };
</script>
