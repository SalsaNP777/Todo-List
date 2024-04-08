<template>
  <div class="crud-container">
    <h1>Add Todo-List</h1>
    <form @submit.prevent="addTodo">
      <div class="form-group">
          <label for="userId">User ID:</label>
          <input type="number" id="userId" v-model="todo.userId" required>
      </div>
      <div class="form-group">
        <label for="title">Title: </label>
        <input type="text" id="title" v-model="todo.title" required>
      </div>
      <button type="submit">Create</button>
    </form>
  </div>
</template>
  
<script>
  import axios from "axios";

  export default {
    name: 'addTodo',
    data() {
      return {
        todo: {
          title: '',
          userId: '',
          completed: false
        }
      };
    },
    methods: {
      async addTodo() {
        const path = '/todos';
        try{
          await axios.post(
            path, 
          {
            userId: this.todo.userId,
            title: this.todo.title,
            completed: this.todo.completed
          })
          .then(response => {
            console.log(response);
            this.$router.push( '/todos' );
          })
        }catch (error){
          console.error('Error creating todo:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .crud-container {
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
  
  h1 {
    color: black;
  }
  
  .form-group {
    margin-bottom: 16px;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
  }
  
  input[type="text"],
  input[type="number"],
  input[type="checkbox"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  