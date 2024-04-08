<template>
  <div id="nav-bar" class="d-flex justify-content-between align-items-center">
    <div id="todo-title">
      <router-link to="/todos" id="todos-link">
        <h3>To Do List</h3>
      </router-link>
    </div>
    <div id="todo-create">
      <router-link :to="'/create'">
        <img src="../assets/plus.png" class="mx-10" alt="AddData" />
        <!-- <h3>Add ToDo</h3> -->
      </router-link>
    </div>
  </div>
</template>
  
  <script>
  export default {
      name: 'NavBar',
  }
  </script>
  
  <style scoped>
  
  #todo-title h3 {
    margin: 20;
    color: white;
  }
  
  #todo-create {
    margin-left: auto;
  }

  #nav-bar {
      border-bottom: 1px solid #ddd;
      background-color: black;
      padding: 10px 20px;
    }

    #todos-link{
      text-align: center;
      display: block;
      color: white;
      font-size: 22px;
      left: 32px;
      top: 16px;
      text-decoration: none;
    }

    img {
      height: 1.5rem;
    }
  </style>
  