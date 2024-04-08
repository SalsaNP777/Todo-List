<template>
    <TodoList/>
</template>

<script>
import TodoList  from '@/components/TodoList.vue';
// import Paginate from "vuejs-paginate";

export default {
    name: 'TodosPage',
    components: {
        TodoList,
        // Paginate
    }
};
</script>

<style scoped>
</style>
