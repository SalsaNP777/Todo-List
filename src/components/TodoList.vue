<template>
    <div id="todo-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Title</th>
              <th>Completed</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="todo in todos" :key="todo.id">
              <td>{{ todo.id }}</td>
              <td>{{ todo.userId }}</td>
              <td>{{ todo.title }}</td>
              <td :class="{ 'completed-yes': todo.completed, 
                            'completed-no': !todo.completed }">
                {{ todo.completed ? 'Yes' : 'No' }}
                </td>
              <td>
                <router-link :to="'/todos/' + todo.id">
                  <button class="btn btn-light mx-1">Details</button>
                </router-link>
                <router-link :to="'/update/' + todo.id">
                  <button class="btn btn-light mx-1">Update</button>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>    
      </div>
</template>

<script>
import { todos } from '@/todos';

export default {
    name: 'TodosPage',
    data() {
        return {
            todos,
        };
    }
};
</script>

<style scoped>
#todo-container {
    margin: 20px auto; 
    width: 75%; 
  } 
  
  table {
    width: 100%; 
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
  
  th {
    background-color: #f2f2f2;
  }

  .completed-yes {
    font-weight: bold;
    color: green;
  }
  
  .completed-no {
    font-weight: bold;
    color:
     red;
  }
</style>