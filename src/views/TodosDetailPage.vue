<template>
    <div class="todo-container">
      <h1 class="todo-id">ID: {{ todo.id }}</h1>
      <h3 class="todo-user">User ID: {{ todo.userId }}</h3>
      <h3 class="todo-title">Title: {{ todo.title }}</h3>
      <div :class="{ 'completed-container-green': todo.completed, 
                     'completed-container-red': !todo.completed }" class="todo-completed-container">
        <p>{{ todo.completed ? 'Completed' : 'Not Completed' }}</p>
      </div>
      <!-- it should be delete button! -->
      <!-- <router-link :to="'/todos/' + todo.id">
        <button>Details</button>
      </router-link> -->
      <router-link :to="'/update/' + todo.id">
        <button>Update</button>
      </router-link>
    </div>
</template>

<script>
import { todos } from '../todos';

export default {
    name: 'TodosDetailPage',
    data() {
        return {
            todo: todos.find((t) => t.id === Number(this.$route.params.id))
        };
    }
};
</script>

<style scoped>
.todo-container {
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
}

.todo-id {
  font-size: 24px;
  margin-bottom: 8px;
}

.todo-user {
  font-size: 18px;
  color: #6c757d;
  margin-bottom: 8px;
}

.todo-title {
  font-size: 20px;
  margin-bottom: 16px;
}

.todo-completed-container {
    width:fit-content;
    border-radius: 3px;
    margin: auto;
  }
  
  .completed-container-green {
    background-color: green;
    color: white;
  }
  
  .completed-container-red {
    background-color: red;
    color: white;
  }

.details-button,
.update-button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.details-button:hover,
.update-button:hover {
  background-color: #0056b3;
}
</style>